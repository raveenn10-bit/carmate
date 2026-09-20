export interface VideoReel {
  id: string;
  title: string;
  badge: string;
  description: string;
  specs: string;
  src: string;
  duration: string;
}

export const CARMATE_REELS: VideoReel[] = [
  {
    id: "reel-1",
    title: "Project Rollout & Exhaust Note",
    badge: "ROLLOUT SPEC",
    description: "Deep tone performance exhaust and road presence calibration.",
    specs: "Prius Custom Blackout · Makuluwa Galle",
    src: "/assets/vid 1.mp4",
    duration: "0:15"
  },
  {
    id: "reel-2",
    title: "RGB DRL Sequential Flow",
    badge: "LIGHTING DYNAMICS",
    description: "Multi-color app-controlled projector beam and dynamic turn signals.",
    specs: "Project Red Phantom · Bi-LED RGB",
    src: "/assets/vid 2.mp4",
    duration: "0:12"
  },
  {
    id: "reel-3",
    title: "Carbon Aero GT Walkaround",
    badge: "TRACK SPEC",
    description: "Aggressive aerodynamic downforce package, carbon GT wing and rear diffuser.",
    specs: "CAC 8260 · Aero Carbon",
    src: "/assets/vid 3.mp4",
    duration: "0:18"
  },
  {
    id: "reel-4",
    title: "Night Run & Illumination",
    badge: "NIGHT VISUALS",
    description: "Strobe accents, crystal lens clarity, and underbody glow demonstration.",
    specs: "Carmate Custom Suite · Galle, Sri Lanka",
    src: "/assets/vid 4.mp4",
    duration: "0:20"
  }
];
