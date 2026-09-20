"use client"

import React, { useEffect, useRef, useState, useCallback } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

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


/**
 * Dynamically compute device-tailored scrub distance:
 * - Desktop (> 1024px): ~7.5×vh (min 5600px)
 * - Tablet (768px - 1024px): ~6.0×vh (min 4200px)
 * - Mobile (< 768px): ~4.5×vh (min 3000px)
 */
function calculateDeviceScrubDistance(customScrub?: number): number {
  if (customScrub) return customScrub
  if (typeof window === "undefined") return 6000
  const w = window.innerWidth
  const h = window.innerHeight

  if (w > 1024) {
    return Math.round(Math.max(5600, h * 7.5))
  } else if (w >= 768) {
    return Math.round(Math.max(4200, h * 6.0))
  } else {
    return Math.round(Math.max(3000, h * 4.5))
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

    // Calculate pin scroll distance: must be long enough that all 250 frames
    // are fully scrubbed before the section unpins and the next section appears.
    // Desktop: 7.5×vh (≥5600px min), Tablet: 6.0×vh, Mobile: 4.5×vh.
    const pinDistance = typeof window !== "undefined"
      ? (() => {
          const w = window.innerWidth
          const h = window.innerHeight
          if (w > 1024) return Math.max(5600, Math.round(h * 7.5))
          if (w >= 768)  return Math.max(4200, Math.round(h * 6.0))
          return Math.max(3000, Math.round(h * 4.5))
        })()
      : 6000

    const heroTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${pinDistance}`,
      pin: true,
      scrub: 0.65,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const p = self.progress

        // Frame rendering
        const targetFrameIndex = Math.min(
          frameCount - 1,
          Math.max(0, Math.round(p * (frameCount - 1)))
        )
        currentRenderIndexRef.current = targetFrameIndex
        requestSlidingWindow(targetFrameIndex)
        drawFrame(targetFrameIndex)

        // 1. Initial Title: visible at start (p=0 to 0.20), fades out and drifts up
        if (titleRef.current) {
          const tTitle = 1 - Math.min(1, Math.max(0, p / 0.18))
          titleRef.current.style.opacity = String(tTitle)
          titleRef.current.style.transform = `translateY(${(1 - tTitle) * -32}px) scale(${0.96 + tTitle * 0.04})`
          titleRef.current.style.filter = `blur(${(1 - tTitle) * 10}px)`
          titleRef.current.style.pointerEvents = tTitle < 0.1 ? "none" : "auto"
        }

        // 2. Scroll Hint: fades out immediately once user scrolls
        if (hintRef.current) {
          const tHint = 1 - Math.min(1, Math.max(0, p / 0.04))
          hintRef.current.style.opacity = String(tHint)
          hintRef.current.style.pointerEvents = tHint < 0.1 ? "none" : "auto"
        }

        // 3. Revealed Tagline Info:
        // - FADES IN: p = 0.55 -> 0.74 (opacity 0 -> 1, floats up into focus)
        // - HOLDS: p = 0.74 -> 0.85 (opacity 1, crystal clear readability)
        // - FADES OUT: p = 0.85 -> 0.97 (opacity 1 -> 0, dissolves before unpinning!)
        // - At p >= 0.98: completely transparent (opacity 0)
        if (taglineRef.current) {
          let tTag = 0
          let yOffset = 0

          if (p >= 0.55 && p < 0.74) {
            const phaseProgress = (p - 0.55) / 0.19
            tTag = Math.min(1, Math.max(0, phaseProgress))
            yOffset = (1 - tTag) * 24
          } else if (p >= 0.74 && p <= 0.85) {
            tTag = 1
            yOffset = 0
          } else if (p > 0.85 && p <= 0.97) {
            const phaseProgress = (p - 0.85) / 0.12
            tTag = Math.max(0, 1 - phaseProgress)
            yOffset = -phaseProgress * 20
          } else {
            tTag = 0
            yOffset = 24
          }

          taglineRef.current.style.opacity = String(tTag)
          taglineRef.current.style.transform = `translateY(${yOffset}px) scale(${0.97 + tTag * 0.03})`
          taglineRef.current.style.filter = `blur(${(1 - tTag) * 8}px)`
          taglineRef.current.style.pointerEvents = tTag > 0.3 ? "auto" : "none"
        }

        // 4. Precision Bottom Progress Bar: tracks p exactly (0 -> 100%)
        if (progressBarRef.current) {
          progressBarRef.current.style.transform = `scaleX(${p})`
        }
      },
    })

    ScrollTrigger.refresh()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      heroTrigger.kill()
      if (idleTimer) {
        if (typeof window !== "undefined" && "cancelIdleCallback" in window) {
          // @ts-ignore
          window.cancelIdleCallback(idleTimer)
        } else {
          clearTimeout(idleTimer)
        }
      }
    }
  }, [frameCount, scrubDistance, loadFrame, requestSlidingWindow])

  const handleHintClick = () => {
    window.scrollBy({ top: window.innerHeight * 1.5, behavior: "smooth" })
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
            CARMATE BESPOKE WORKSHOP · GALLE · 2K SPEC
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

      {/* Revealed Tagline: Centered luxury automotive statement */}
      {tagline && (
        <div
          ref={taglineRef}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "6%",
            paddingRight: "6%",
            textAlign: "center",
            opacity: 0,
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          <div
            style={{
              maxWidth: 920,
              padding: "24px 32px",
              borderRadius: 24,
              background: "rgba(5, 7, 13, 0.72)",
              border: "1px solid rgba(255, 255, 255, 0.14)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(234, 28, 36, 0.2)",
            }}
          >
            <span
              style={{
                display: "inline-block",
                color: "#ea1c24",
                fontFamily: SANS,
                fontSize: "clamp(10px, 1.1vw, 12px)",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              BESPOKE CRAFTSMANSHIP // MAKULUWA, GALLE
            </span>
            <p
              style={{
                fontFamily: SANS,
                fontWeight: 700,
                fontSize: "clamp(17px, 2.8vw, 32px)",
                lineHeight: 1.28,
                letterSpacing: "-0.01em",
                color: COL_TEXT,
                textShadow: "0 2px 16px rgba(0,0,0,0.8)",
                margin: 0,
              }}
            >
              {tagline}
            </p>
          </div>
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
