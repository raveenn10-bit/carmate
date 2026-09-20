"use client"

import React, { useEffect, useRef, useState } from "react"

export interface ScrollLockedFrameHeroProps {
  /** Array of image frame URLs or total frame count if standard pattern */
  frames?: string[]
  frameCount?: number
  framePattern?: (index: number) => string
  title?: string
  scrollHint?: string
  tagline?: string
  signature?: { name: string; url: string } | false
  /** Total input scroll distance (px) needed to scrub the 250 frames */
  scrubDistance?: number
  className?: string
  style?: React.CSSProperties
}

const DEFAULT_SIGNATURE = { name: "carmate.lk", url: "https://carmate.lk" }
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
const COL_BG = "#05070d"
const COL_TEXT = "#f2f4f8"

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v))
}

export default function ScrollLockedFrameHero({
  frameCount = 250,
  framePattern = (i) => `/assets/frames/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`,
  title = "TRANSFORMING CARS INTO PERSONALIZED MASTERPIECES",
  scrollHint = "SCROLL TO EXPLORE",
  tagline = "At Carmate we're passionate about transforming cars into personalized masterpieces!",
  signature = DEFAULT_SIGNATURE,
  scrubDistance = 4200,
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

  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches

    // Preload all 250 frames
    const images: HTMLImageElement[] = new Array(frameCount)
    let loadedCount = 0

    function drawFrame(index: number) {
      let img = images[index] || images[0]
      if (!img || !img.complete || img.naturalWidth === 0) {
        for (let offset = 1; offset < frameCount; offset++) {
          const prev = images[index - offset]
          if (prev && prev.complete && prev.naturalWidth > 0) {
            img = prev
            break
          }
          const next = images[index + offset]
          if (next && next.complete && next.naturalWidth > 0) {
            img = next
            break
          }
        }
      }
      if (!canvas || !ctx) return
      if (!img || !img.complete || img.naturalWidth === 0) return

      const cw = canvas.width
      const ch = canvas.height
      const iw = img.naturalWidth
      const ih = img.naturalHeight
      const hRatio = cw / iw
      const vRatio = ch / ih
      const ratio = Math.max(hRatio, vRatio)
      const shiftX = (cw - iw * ratio) / 2
      const shiftY = (ch - ih * ratio) / 2

      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = "high"
      ctx.drawImage(img, 0, 0, iw, ih, shiftX, shiftY, iw * ratio, ih * ratio)
    }

    function resizeCanvas() {
      if (!canvas || !section || !ctx) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = section.getBoundingClientRect()
      const targetW = Math.round(rect.width * dpr)
      const targetH = Math.round(rect.height * dpr)
      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW
        canvas.height = targetH
      }
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = "high"
      drawFrame(0)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Load first frame immediately
    const first = new Image()
    first.decoding = "async"
    first.src = framePattern(0)
    images[0] = first
    first.onload = () => {
      drawFrame(0)
      loadedCount++
      setLoadedPercent(Math.round((loadedCount / frameCount) * 100))
    }

    // Load remaining frames with async decoding
    for (let i = 1; i < frameCount; i++) {
      const img = new Image()
      img.decoding = "async"
      img.src = framePattern(i)
      img.onload = () => {
        loadedCount++
        setLoadedPercent(Math.round((loadedCount / frameCount) * 100))
      }
      images[i] = img
    }

    let rafId = 0
    let targetProgress = 0
    let currentProgress = 0
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

    function addDelta(deltaY: number) {
      if (!locked && window.scrollY > 10) return false

      if (!locked && window.scrollY <= 10 && deltaY < 0) {
        engageLock()
        targetProgress = 1
        return true
      }

      const next = clamp(targetProgress + deltaY / scrubDistance, 0, 1)
      targetProgress = next
      if (targetProgress > 0.001) hasStartedScrolling = true

      // If finished scrub and continuing downward, unlock body
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
        addDelta(deltaY)
        e.preventDefault()
      }
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: false })

    function frame() {
      currentProgress += (targetProgress - currentProgress) * 0.18
      const frameIdx = Math.min(frameCount - 1, Math.max(0, Math.floor(currentProgress * (frameCount - 1))))
      drawFrame(frameIdx)

      if (titleRef.current) {
        const t = 1 - clamp(currentProgress / 0.32, 0, 1)
        titleRef.current.style.opacity = String(t)
        titleRef.current.style.transform = `translateY(${(1 - t) * -28}px) scale(${0.96 + t * 0.04})`
        titleRef.current.style.filter = `blur(${(1 - t) * 10}px)`
      }
      if (hintRef.current) {
        hintRef.current.style.opacity = hasStartedScrolling ? "0" : "1"
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
      releaseLock()
    }
  }, [scrubDistance, frameCount, framePattern])

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
      <canvas
        ref={canvasRef}
        width={1920}
        height={1080}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(5,7,13,0.35), rgba(5,7,13,0) 30%, rgba(5,7,13,0.15) 70%, rgba(5,7,13,0.55))",
          pointerEvents: "none",
        }}
      />

      <div
        ref={titleRef}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 6%",
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontFamily: SANS,
            fontWeight: 800,
            fontSize: "clamp(30px, 6vw, 84px)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: COL_TEXT,
            textShadow: "0 4px 30px rgba(0,0,0,0.8)",
            display: "inline-block",
            willChange: "transform, filter, opacity",
          }}
        >
          {title}
        </span>
      </div>

      {tagline && (
        <div
          ref={taglineRef}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 8%",
            textAlign: "center",
            opacity: 0,
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontFamily: SANS,
              fontWeight: 700,
              fontSize: "clamp(20px, 3.2vw, 38px)",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              color: COL_TEXT,
              textShadow: "0 4px 24px rgba(0,0,0,0.85)",
            }}
          >
            {tagline}
          </span>
        </div>
      )}

      <div
        ref={hintRef}
        style={{
          position: "absolute",
          left: "50%",
          bottom: "clamp(20px, 6vh, 48px)",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: "rgba(240,244,248,0.75)",
          fontFamily: SANS,
          fontSize: "clamp(10px, 1.4vw, 12px)",
          fontWeight: 600,
          letterSpacing: "0.3em",
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}
      >
        <span>{scrollHint}</span>
        <svg width="14" height="18" viewBox="0 0 14 18">
          <path d="M7 1 L7 17 M2 12 L7 17 L12 12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 3,
          background: "rgba(255,255,255,0.12)",
        }}
      >
        <div
          ref={progressBarRef}
          style={{
            height: "100%",
            width: "100%",
            background: "linear-gradient(90deg, #ea1c24, #ff4d54, #fff)",
            boxShadow: "0 0 10px rgba(234, 28, 36, 0.8)",
            transform: "scaleX(0)",
            transformOrigin: "left center",
          }}
        />
      </div>
    </div>
  )
}
