import ScrollLockedFrameHero from "@/components/ui/scroll-locked-frame-hero"
import MetroHero from "@/components/ui/scroll-locked-video-hero"

// Demo 1: Using the 250 local JPG frames from Carmate
export function CarmateFrameHeroDemo() {
  return (
    <ScrollLockedFrameHero
      frameCount={250}
      framePattern={(i) => `/assets/frames/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`}
      title="TRANSFORMING CARS INTO PERSONALIZED MASTERPIECES"
      tagline="At Carmate we're passionate about transforming cars into personalized masterpieces!"
      scrubDistance={2800}
    />
  )
}

// Demo 2: Using video source
export function CarmateVideoHeroDemo() {
  return (
    <MetroHero
      title="CARMATE MODIFICATIONS"
      tagline="Crafted in Galle · Driven by Passion"
      scrubDistance={3200}
    />
  )
}

export default function DemoOne() {
  return <CarmateFrameHeroDemo />
}
