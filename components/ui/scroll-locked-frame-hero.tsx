"use client"

import React, { useEffect, useRef, useState, useCallback } from "react"

export interface ScrollLockedFrameHeroProps {
  /** Array of image frame URLs or total frame count if standard pattern */
  frames?: string[]
  frameCount?: number
  framePattern?: (index: number) => string
  title?: string
  scrollHint?: string
  tagline?: string
  signature?: { name: string; url: string } | false
  /** Total input scroll distance (px) needed to scrub frames. If omitted, tuned dynamically to device */
  scrubDistance?: number
  className?: string
  style?: React.CSSProperties
}

const DEFAULT_SIGNATURE = { name: "carmate.lk", url: "https://wa.me/94777177452" }
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
const COL_BG = "#05070d"
const COL_TEXT = "#f2f4f8"

function clamp(v: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, v))
}

/**
 * Dynamically compute device-tailored scrub distance:
 * - Desktop (> 1024px): 550vh - 650vh (~4800px)
 * - Tablet (768px - 1024px): 400vh - 500vh (~3200px)
 * - Mobile (< 768px): 300vh - 400vh (~1800px - 2200px)
 */
function calculateDeviceScrubDistance(customScrub?: number): number {
  if (typeof window === "undefined") return customScrub || 4800
  const w = window.innerWidth
  const h = window.innerHeight

  if (w > 1024) {
    if (customScrub && customScrub >= 4000) return customScrub
    return Math.round(clamp(h * 6.0, 4600, 5200))
  } else if (w >= 768) {
    return Math.round(clamp(h * 4.5, 3000, 3600))
  } else {
    return Math.round(clamp(h * 3.5, 1800, 2200))
  }
}

export default function ScrollLockedFrameHero({
  frameCount = 250,
  framePattern,
  title = "TRANSFORMING CARS INTO PERSONALIZED MASTERPIECES",
  scrollHint = "SCROLL TO SCRUB CARMATE DIODES",
  tagline = "At Carmate we're passionate about transforming cars into personalized masterpieces!",
  signature = DEFAULT_SIGNATURE,
  scrubDistance,
  className,
  style,
}: ScrollLockedFrameHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const hintRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const [loadedPercent, setLoadedPercent] = useState(0)

  // References for frames and sliding window
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(frameCount).fill(null))
  const lastDrawnIndexRef = useRef<number>(-1)
  const currentRenderIndexRef = useRef<number>(0)
  const loadedCountRef = useRef<number>(0)
  const scrubDistRef = useRef<number>(4800)

  // Fallback pattern paths
  const getPrimaryUrl = useCallback(
    (index: number) => {
      if (framePattern) return framePattern(index)
      const numStr = String(index + 1).padStart(3, "0")
      return `/assets/frames-2k/ezgif-frame-${numStr}.webp`
    },
    [framePattern]
  )

  const getFallbackUrl = useCallback((index: number) => {
    const numStr = String(index + 1).padStart(3, "0")
    return `/assets/frames/ezgif-frame-${numStr}.jpg`
  }, [])

  // Single frame loader with fallback from 2K WebP to JPG
  const loadFrame = useCallback(
    (index: number, priority = false): HTMLImageElement => {
      if (imagesRef.current[index]) {
        return imagesRef.current[index]!
      }

      const img = new Image()
      img.decoding = "async"
      if (priority && "fetchPriority" in img) {
        // @ts-ignore - modern standard fetchPriority
        img.fetchPriority = "high"
      }

      const primaryUrl = getPrimaryUrl(index)
      const fallbackUrl = getFallbackUrl(index)

      img.src = primaryUrl
      img.onerror = () => {
        // Fallback to JPG if 2K WebP fails or is missing
        if (img.src !== fallbackUrl && !img.src.endsWith(".jpg")) {
          img.src = fallbackUrl
        }
      }

      img.onload = () => {
        loadedCountRef.current++
        setLoadedPercent(Math.round((loadedCountRef.current / frameCount) * 100))
      }

      imagesRef.current[index] = img
      return img
    },
    [frameCount, getPrimaryUrl, getFallbackUrl]
  )

  // Prioritize sliding window around current frame (currentFrame ± 10)
  const requestSlidingWindow = useCallback(
    (centerIndex: number) => {
      const start = Math.max(0, centerIndex - 10)
      const end = Math.min(frameCount - 1, centerIndex + 10)
      for (let i = start; i <= end; i++) {
        if (!imagesRef.current[i]) {
          loadFrame(i, true)
        }
      }
    },
    [frameCount, loadFrame]
  )

  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches

    scrubDistRef.current = calculateDeviceScrubDistance(scrubDistance)

    // Progressive Sliding Window: Preload first 15 frames immediately
    const immediatePreloadCount = Math.min(15, frameCount)
    for (let i = 0; i < immediatePreloadCount; i++) {
      loadFrame(i, true)
    }

    // Background idle loader for remaining frames to avoid saturating initial bandwidth
    let idleIndex = immediatePreloadCount
    let idleTimer: any = null

    function preloadNextIdle() {
      if (idleIndex >= frameCount) return
      while (idleIndex < frameCount && imagesRef.current[idleIndex]) {
        idleIndex++
      }
      if (idleIndex < frameCount) {
        loadFrame(idleIndex, false)
        idleIndex++
        if (typeof window !== "undefined" && "requestIdleCallback" in window) {
          // @ts-ignore
          idleTimer = window.requestIdleCallback(preloadNextIdle, { timeout: 250 })
        } else {
          idleTimer = setTimeout(preloadNextIdle, 30)
        }
      }
    }

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      // @ts-ignore
      idleTimer = window.requestIdleCallback(preloadNextIdle, { timeout: 400 })
    } else {
      idleTimer = setTimeout(preloadNextIdle, 100)
    }

    /**
     * Draw frame onto canvas with intelligent focal crop & High-DPI backing.
     * Never shows blank/white screen: always keeps previous frame drawn until next is ready.
     */
    function drawFrame(index: number) {
      if (!canvas || !ctx) return

      let img = imagesRef.current[index]
      let isReady = Boolean(img && img.complete && img.naturalWidth > 0)

      if (!isReady) {
        // Keep previous frame drawn if available
        if (lastDrawnIndexRef.current >= 0) {
          const prevImg = imagesRef.current[lastDrawnIndexRef.current]
          if (prevImg && prevImg.complete && prevImg.naturalWidth > 0) {
            img = prevImg
            isReady = true
          }
        }
        // Bidirectional search for nearest loaded frame
        if (!isReady) {
          for (let offset = 1; offset < frameCount; offset++) {
            const prev = imagesRef.current[index - offset]
            if (prev && prev.complete && prev.naturalWidth > 0) {
              img = prev
              isReady = true
              break
            }
            const next = imagesRef.current[index + offset]
            if (next && next.complete && next.naturalWidth > 0) {
              img = next
              isReady = true
              break
            }
          }
        }
      }

      if (!img || !img.complete || img.naturalWidth === 0) {
        return // Canvas retains prior pixels without flicker
      }

      const cw = canvas.width
      const ch = canvas.height
      const iw = img.naturalWidth
      const ih = img.naturalHeight

      const isPortrait = ch > cw
      let ratio: number
      let shiftX: number
      let shiftY: number

      if (isPortrait) {
        // Mobile portrait: focal crop centering vehicle headlights & body
        const minScaleH = ch / ih
        const minScaleW = cw / iw
        ratio = Math.max(minScaleW, minScaleH)
        const renderW = iw * ratio
        const renderH = ih * ratio

        // Focal point ~0.48 centers vehicle headlights & body in vertical viewport
        const focalX = 0.48
        shiftX = cw * 0.5 - renderW * focalX
        shiftX = Math.min(0, Math.max(cw - renderW, shiftX))

        const focalY = 0.50
        shiftY = ch * 0.5 - renderH * focalY
        shiftY = Math.min(0, Math.max(ch - renderH, shiftY))

        ctx.imageSmoothingEnabled = true
        ctx.imageSmoothingQuality = "high"
        ctx.drawImage(img, 0, 0, iw, ih, shiftX, shiftY, renderW, renderH)
      } else {
        // Landscape / Desktop: centered cover
        const hRatio = cw / iw
        const vRatio = ch / ih
        ratio = Math.max(hRatio, vRatio)
        const renderW = iw * ratio
        const renderH = ih * ratio
        shiftX = (cw - renderW) * 0.5
        shiftY = (ch - renderH) * 0.5

        ctx.imageSmoothingEnabled = true
        ctx.imageSmoothingQuality = "high"
        ctx.drawImage(img, 0, 0, iw, ih, shiftX, shiftY, renderW, renderH)
      }

      lastDrawnIndexRef.current = index
    }

    /**
     * Intelligent High-DPI canvas backing
     */
    function resizeCanvas() {
      if (!canvas || !section || !ctx) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = section.getBoundingClientRect()
      const targetW = Math.max(1, Math.round(rect.width * dpr))
      const targetH = Math.max(1, Math.round(rect.height * dpr))

      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW
        canvas.height = targetH
      }
      canvas.style.width = "100%"
      canvas.style.height = "100%"

      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = "high"

      scrubDistRef.current = calculateDeviceScrubDistance(scrubDistance)
      drawFrame(currentRenderIndexRef.current)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Draw frame 0 when ready
    const frame0 = imagesRef.current[0]
    if (frame0) {
      if (frame0.complete && frame0.naturalWidth > 0) {
        drawFrame(0)
      } else {
        frame0.addEventListener("load", () => drawFrame(0), { once: true })
      }
    }

    let rafId = 0
    let targetProgress = 0
    let currentProgress = 0
    let currentFrame = 0
    let hasStartedScrolling = false
    let locked = false
    let lockedScrollY = 0
    let touchStartY = 0

    function engageLock() {
      if (locked || typeof document === "undefined") return
      locked = true
      lockedScrollY = window.scrollY
      const b = document.body.style
      b.position = "fixed"
      b.top = `-${lockedScrollY}px`
      b.left = "0"
      b.right = "0"
      b.width = "100%"
      b.height = "100%"
      b.overscrollBehavior = "none"
    }

    function releaseLock() {
      if (!locked || typeof document === "undefined") return
      locked = false
      const y = lockedScrollY
      const b = document.body.style
      b.position = ""
      b.top = ""
      b.left = ""
      b.right = ""
      b.width = ""
      b.height = ""
      b.overscrollBehavior = ""
      window.scrollTo(0, y)
    }

    engageLock()

    function addDelta(deltaY: number): boolean {
      if (!locked && window.scrollY > 10) return false

      if (!locked && window.scrollY <= 10 && deltaY < 0) {
        engageLock()
        targetProgress = 1
        return true
      }

      const activeScrub = scrubDistRef.current || 4800
      const next = clamp(targetProgress + deltaY / activeScrub, 0, 1)
      targetProgress = next
      if (targetProgress > 0.001) hasStartedScrolling = true

      // If scrub completed and user continues downward, smoothly release lock
      if (next >= 0.999 && deltaY > 0) {
        releaseLock()
      }
      return true
    }

    const onWheel = (e: WheelEvent) => {
      if (locked) {
        addDelta(e.deltaY)
        e.preventDefault()
      }
    }

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0]?.clientY ?? 0
    }

    const onTouchMove = (e: TouchEvent) => {
      if (locked) {
        const y = e.touches[0]?.clientY ?? touchStartY
        const deltaY = touchStartY - y
        touchStartY = y
        const handled = addDelta(deltaY)
        if (handled && e.cancelable) {
          e.preventDefault()
        }
      }
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: false })

    /**
     * Cinematic weighted lerp animation loop (~0.07 factor)
     */
    function frame() {
      const targetFrame = targetProgress * (frameCount - 1)
      // Lerp currentFrame towards targetFrame with weighted cinematic factor 0.07
      currentFrame += (targetFrame - currentFrame) * 0.07

      if (Math.abs(targetFrame - currentFrame) < 0.001) {
        currentFrame = targetFrame
      }

      const renderIndex = clamp(Math.round(currentFrame), 0, frameCount - 1)
      currentRenderIndexRef.current = renderIndex

      // Prioritize sliding window around active frame
      requestSlidingWindow(renderIndex)

      drawFrame(renderIndex)

      currentProgress = currentFrame / (frameCount - 1)

      // Animate typography and overlay states
      if (titleRef.current) {
        const t = 1 - clamp(currentProgress / 0.32, 0, 1)
        titleRef.current.style.opacity = String(t)
        titleRef.current.style.transform = `translateY(${(1 - t) * -24}px) scale(${0.96 + t * 0.04})`
        titleRef.current.style.filter = `blur(${(1 - t) * 8}px)`
      }

      if (hintRef.current) {
        hintRef.current.style.opacity = hasStartedScrolling ? "0" : "1"
        hintRef.current.style.pointerEvents = hasStartedScrolling ? "none" : "auto"
      }

      if (taglineRef.current) {
        const t = clamp((currentProgress - 0.72) / 0.25, 0, 1)
        taglineRef.current.style.opacity = String(t)
        taglineRef.current.style.transform = `translateY(${(1 - t) * 20}px) scale(${0.97 + t * 0.03})`
        taglineRef.current.style.filter = `blur(${(1 - t) * 8}px)`
      }

      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${currentProgress})`
      }

      rafId = requestAnimationFrame(frame)
    }

    if (!reduceMotion) {
      rafId = requestAnimationFrame(frame)
    } else {
      drawFrame(frameCount - 1)
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchmove", onTouchMove)
      cancelAnimationFrame(rafId)
      if (idleTimer) {
        if (typeof window !== "undefined" && "cancelIdleCallback" in window) {
          // @ts-ignore
          window.cancelIdleCallback(idleTimer)
        } else {
          clearTimeout(idleTimer)
        }
      }
      releaseLock()
    }
  }, [frameCount, scrubDistance, loadFrame, requestSlidingWindow])

  const handleHintClick = () => {
    // Smooth user nudge on tap/click
    const simulatedDelta = (scrubDistRef.current || 4800) * 0.15
    const wheelEvent = new WheelEvent("wheel", { deltaY: simulatedDelta })
    window.dispatchEvent(wheelEvent)
  }

  return (
    <div
      ref={sectionRef}
      className={className}
      style={{
        position: "relative",
        height: "100dvh",
        width: "100%",
        overflow: "hidden",
        background: COL_BG,
        touchAction: "none",
        ...style,
      }}
    >
      {/* High-DPI 2K Canvas */}
      <canvas
        ref={canvasRef}
        width={2560}
        height={1440}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />

      {/* Cinematic Vignette Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(5,7,13,0.45) 0%, rgba(5,7,13,0.05) 35%, rgba(5,7,13,0.15) 65%, rgba(5,7,13,0.65) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Signature / Contact Link (>= 44px touch target) */}
      {signature && (
        <a
          href={signature.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            top: "clamp(16px, 3vh, 28px)",
            right: "clamp(16px, 4vw, 36px)",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            minHeight: 44,
            minWidth: 44,
            padding: "8px 16px",
            borderRadius: 999,
            background: "rgba(9, 13, 20, 0.75)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            backdropFilter: "blur(12px)",
            color: "rgba(242, 244, 248, 0.9)",
            fontFamily: SANS,
            fontSize: "clamp(11px, 1.2vw, 13px)",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textDecoration: "none",
            zIndex: 30,
            transition: "all 0.25s ease",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#25D366",
              boxShadow: "0 0 8px #25D366",
            }}
          />
          <span>{signature.name}</span>
        </a>
      )}

      {/* Hero Title: Upper-aligned on mobile to never cover car body & headlights */}
      <div
        ref={titleRef}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "clamp(88px, 15vh, 180px)",
          paddingLeft: "6%",
          paddingRight: "6%",
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "5px 14px",
            borderRadius: 999,
            background: "rgba(234, 28, 36, 0.14)",
            border: "1px solid rgba(234, 28, 36, 0.35)",
            backdropFilter: "blur(8px)",
            marginBottom: "clamp(10px, 2vh, 18px)",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#ea1c24",
              boxShadow: "0 0 8px #ea1c24",
            }}
          />
          <span
            style={{
              color: "#f2f4f8",
              fontFamily: SANS,
              fontSize: "clamp(10px, 1.1vw, 12px)",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Automotive Masterpiece · 2K QHD
          </span>
        </div>

        <h1
          style={{
            fontFamily: SANS,
            fontWeight: 900,
            fontSize: "clamp(26px, 5.2vw, 76px)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: COL_TEXT,
            textShadow: "0 4px 30px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.8)",
            maxWidth: 1120,
            margin: 0,
            willChange: "transform, filter, opacity",
          }}
        >
          {title}
        </h1>
      </div>

      {/* Revealed Tagline: Bottom-aligned when scrub reaches completion */}
      {tagline && (
        <div
          ref={taglineRef}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: "clamp(80px, 15vh, 150px)",
            paddingLeft: "6%",
            paddingRight: "6%",
            textAlign: "center",
            opacity: 0,
            pointerEvents: "none",
          }}
        >
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 700,
              fontSize: "clamp(18px, 3.2vw, 36px)",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              color: COL_TEXT,
              textShadow: "0 4px 24px rgba(0,0,0,0.9)",
              maxWidth: 880,
              margin: 0,
            }}
          >
            {tagline}
          </p>
        </div>
      )}

      {/* Scroll Hint (>= 44px touch target) */}
      <div
        ref={hintRef}
        onClick={handleHintClick}
        role="button"
        tabIndex={0}
        aria-label="Scroll to explore vehicle sequence"
        style={{
          position: "absolute",
          left: "50%",
          bottom: "clamp(22px, 5vh, 46px)",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          minHeight: 44,
          minWidth: 160,
          padding: "6px 16px",
          color: "rgba(240,244,248,0.85)",
          fontFamily: SANS,
          fontSize: "clamp(10px, 1.3vw, 12px)",
          fontWeight: 600,
          letterSpacing: "0.26em",
          transition: "opacity 0.4s ease, transform 0.2s ease",
          cursor: "pointer",
          zIndex: 25,
          userSelect: "none",
        }}
      >
        <span>{scrollHint}</span>
        <svg width="14" height="18" viewBox="0 0 14 18" aria-hidden="true">
          <path
            d="M7 1 L7 17 M2 12 L7 17 L12 12"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Precision Progress Bar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 3,
          background: "rgba(255,255,255,0.12)",
          zIndex: 30,
        }}
      >
        <div
          ref={progressBarRef}
          style={{
            height: "100%",
            width: "100%",
            background: "linear-gradient(90deg, #ea1c24, #ff4d54, #fff)",
            boxShadow: "0 0 12px rgba(234, 28, 36, 0.9)",
            transform: "scaleX(0)",
            transformOrigin: "left center",
          }}
        />
      </div>
    </div>
  )
}
