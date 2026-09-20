import ScrollLockedFrameHero from "@/components/ui/scroll-locked-frame-hero"
import MetroHero from "@/components/ui/scroll-locked-video-hero"

// Demo 1: Using the 250 local 2K WebP frames from Carmate
export function CarmateFrameHeroDemo() {
  return (
    <ScrollLockedFrameHero
      frameCount={250}
      title="TRANSFORMING CARS INTO PERSONALIZED MASTERPIECES"
      tagline="At Carmate we're passionate about transforming cars into personalized masterpieces!"
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
