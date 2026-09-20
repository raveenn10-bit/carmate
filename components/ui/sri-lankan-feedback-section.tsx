"use client";

import * as React from "react";
import {
  Star,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Car,
  MessageSquare,
  BadgeCheck,
  ExternalLink,
  CheckCheck,
  Sun,
  Moon,
  ThumbsUp,
  Calendar,
  ArrowUpRight,
  Wrench,
  Camera,
  Phone,
} from "lucide-react";

export interface VerifiedReview {
  id: number;
  slug: string;
  name: string;
  location: string;
  distanceNote: string;
  travelRoute: string;
  vehicle: string;
  vehicleCode: string;
  service: string;
  paintCode: string;
  fitmentGuarantee: string;
  electricalSpec: string;
  platform: "google" | "whatsapp";
  rating: number;
  date: string;
  googleReviewLevel: string;
  googleReviewCount: number;
  googleFoundHelpful: number;
  quoteGoogle: string;
  whatsappMessage: string;
  whatsappTimestamp: string;
  whatsappAttachmentName: string;
  whatsappAttachmentSize: string;
  carmateReply: string;
  carmateReplyTimestamp: string;
  image: string;
  initials: string;
  avatarBg: string;
  verifiedLabel: string;
}

export const REVIEWS_5: VerifiedReview[] = [
  {
    id: 1,
    slug: "prius-30-matara",
    name: "Kavindu Wickramasinghe",
    location: "Matara",
    distanceNote: "Southern Coast • 45km to Galle",
    travelRoute: "A2 Coastal Highway via Weligama",
    vehicle: "Toyota Prius 30",
    vehicleCode: "ZVW30",
    service: "Modellista Ver.2 Full Aero Kit + Custom DRL Setup",
    paintCode: "070 Pearl White (Factory Code Matched)",
    fitmentGuarantee: "100% Flush • Zero Panel Gaps",
    electricalSpec: "Plug & Play Harness • OEM DRL Switch",
    platform: "google",
    rating: 5,
    date: "2 weeks ago",
    googleReviewLevel: "Local Guide • 38 Reviews",
    googleReviewCount: 38,
    googleFoundHelpful: 14,
    quoteGoogle:
      "Brought my Prius 30 all the way from Matara after seeing Carmate's Facebook builds. Installed full Modellista kit with custom DRL setup. Fitment eka millimeter ekata match una, panel gaps zero. Pearl White (070) colour matching was 100% factory finish. Galle wala thiyena supirima place ekak!",
    whatsappMessage:
      "Aiya Modellista kit eka gahuwata passe look eka pissu hadenawa! Paint matching eka 070 code ekatama millimeter ekata thiyenawa. Matara yanakota godak aya nawaththala ahanawa kohenda kale kiyala. Attach karala thiyenne delivery gaththa gaman gaththa photo eka. Supiri work ekak Carmate team!",
    whatsappTimestamp: "10:24 PM",
    whatsappAttachmentName: "IMG_20260904_WA0014.jpg",
    whatsappAttachmentSize: "2.4 MB • High Res",
    carmateReply:
      "Thank you Kavindu malli! Really happy you love the Modellista 070 match. Drive safe down to Matara! Always here for your Prius. 🚗✨",
    carmateReplyTimestamp: "10:27 PM",
    image: "/assets/carmate-project-2.jpg",
    initials: "KW",
    avatarBg: "bg-gradient-to-br from-red-600 to-amber-600",
    verifiedLabel: "Verified Build • Matara Client",
  },
  {
    id: 2,
    slug: "aqua-gs-colombo",
    name: "Shanuka Perera",
    location: "Colombo / Kottawa",
    distanceNote: "Southern Expressway • 115km to Galle",
    travelRoute: "E01 Expressway Kottawa to Pinnaduwa Exit",
    vehicle: "Toyota Aqua G's Edition",
    vehicleCode: "NHP10",
    service: "Custom Bi-LED Projector Retrofit + Laser High Beam",
    paintCode: "Piano Black Housing + Smoked Lens",
    fitmentGuarantee: "100% Socket-to-Socket • Zero Wire Cutting",
    electricalSpec: "Independent High Beam Relay • No Glare Cutoff",
    platform: "google",
    rating: 5,
    date: "1 month ago",
    googleReviewLevel: "Local Guide • 52 Reviews",
    googleReviewCount: 52,
    googleFoundHelpful: 21,
    quoteGoogle:
      "Came down from Colombo via Southern Expressway. Night highway driving was impossible with stock yellow halogens. Carmate team installed custom Bi-LED projectors. Wiring clean ekata socket-to-socket karala dunna without any wire cuts. Road visibility is insane now! Worth every rupee of the expressway drive.",
    whatsappMessage:
      "Bro highway eke Colombo awilla check kala. Cut-off line eka sharp, oncoming traffic ekata glare wenne na. High beam throw eka 350m+ watenawa. Wiring eke single wire ekakwath cut karala na socket-to-socket karala thibbe. Expressway drive ekata gihin karagaththa eka watinawa!",
    whatsappTimestamp: "11:15 PM",
    whatsappAttachmentName: "IMG_20260818_WA0032.jpg",
    whatsappAttachmentSize: "1.9 MB • Night Cutoff Shot",
    carmateReply:
      "Glad to hear Shanuka bro! Those custom Bi-LEDs are engineered specifically for high-speed highway illumination with zero glare. Have a safe drive!",
    carmateReplyTimestamp: "11:19 PM",
    image: "/assets/cac-8260-front-lights.jpg",
    initials: "SP",
    avatarBg: "bg-gradient-to-br from-blue-600 to-cyan-600",
    verifiedLabel: "Verified Highway Build • Colombo",
  },
  {
    id: 3,
    slug: "civic-fd-galle",
    name: "Dilantha Senanayake",
    location: "Galle Fort",
    distanceNote: "Makuluwa Local • Galle Workshop",
    travelRoute: "Makuluwa Workshop Direct Handover",
    vehicle: "Honda Civic FD Spec",
    vehicleCode: "FD4",
    service: "Mugen RR Aero Package & Carbon Ducktail Wing",
    paintCode: "NH-0 Championship White + Gloss Carbon",
    fitmentGuarantee: "Reinforced Brackets • High-Speed Tested",
    electricalSpec: "Rear LED F1 Rain Light Integration",
    platform: "google",
    rating: 5,
    date: "3 weeks ago",
    googleReviewLevel: "Automotive Enthusiast • Galle",
    googleReviewCount: 19,
    googleFoundHelpful: 17,
    quoteGoogle:
      "Galle local here. Handed over my Civic FD for a complete Mugen RR aero package, front lip, and ducktail spoiler. Structural sturdiness on high speeds is rock solid. Friendly brother who explains everything clearly before touching the car. 10/10 recommended for anyone in Southern Province!",
    whatsappMessage:
      "Machan Civic eke Mugen RR kit eka fit una widiya maru. High speed yaddi spoiler vibration na, mounting clips okkoma rock solid. Makuluwa workshop eke thiyena genuine craftsmanship ekata saluteness. Galle paththe inna ayata rekama karanna puluwan 100%!",
    whatsappTimestamp: "4:48 PM",
    whatsappAttachmentName: "IMG_20260829_WA0008.jpg",
    whatsappAttachmentSize: "3.1 MB • Workshop Rollout",
    carmateReply:
      "Cheers Dilantha bro! That FD4 Mugen stance is turning heads all around Galle Fort! Catch you soon at the workshop.",
    carmateReplyTimestamp: "4:52 PM",
    image: "/assets/carmate-project-1.jpg",
    initials: "DS",
    avatarBg: "bg-gradient-to-br from-rose-600 to-red-800",
    verifiedLabel: "Verified Local Enthusiast • Galle",
  },
  {
    id: 4,
    slug: "prius-50-kalutara",
    name: "Tharindu Bandara",
    location: "Kalutara",
    distanceNote: "West Coast • 75km to Galle",
    travelRoute: "Southern Expressway Dodangoda to Pinnaduwa",
    vehicle: "Toyota Prius 50",
    vehicleCode: "ZVW50",
    service: "Modellista Iconic Style Aero Package + Dual Exhaust",
    paintCode: "3T7 Emotional Red Pearl Coat",
    fitmentGuarantee: "OEM Mounting Tabs • On-Time Handover",
    electricalSpec: "Illuminated Lower Bumper LED Strips",
    platform: "whatsapp",
    rating: 5,
    date: "3 days ago",
    googleReviewLevel: "Verified Customer • Kalutara",
    googleReviewCount: 12,
    googleFoundHelpful: 9,
    quoteGoogle:
      "Car eka deliver karaddi baladdi adahaganna ba aiyala karala thiyena lassanata. Prius 50 curves tikak tricky eth kit eka perfectly aligned. Finished the project right on the promised date. Honest pricing without hidden costs like Colombo body shops. Big respect Carmate team!",
    whatsappMessage:
      "Aiya car eka receive kala. Kalutara enakota full smooth. Paint finish eka glass wagema thiyenawa. Anith body shops wage nemei kiyapu ganatama delivery dunna on the exact promised date. Really appreciate your honesty and dedication!",
    whatsappTimestamp: "7:35 PM",
    whatsappAttachmentName: "IMG_20260917_WA0022.jpg",
    whatsappAttachmentSize: "2.7 MB • Sunset Delivery",
    carmateReply:
      "Thank you Tharindu! Prius 50 Iconic Style curves take extra care and patience to align. Respect for driving down from Kalutara!",
    carmateReplyTimestamp: "7:40 PM",
    image: "/assets/carmate-prius-cherry.jpg",
    initials: "TB",
    avatarBg: "bg-gradient-to-br from-emerald-600 to-teal-700",
    verifiedLabel: "WhatsApp Verified Chat • Kalutara",
  },
  {
    id: 5,
    slug: "axio-wxb-unawatuna",
    name: "Sachintha De Silva",
    location: "Unawatuna, Galle",
    distanceNote: "Southern Coast • 6km to Workshop",
    travelRoute: "Matara Road Direct to Makuluwa",
    vehicle: "Toyota Axio WxB",
    vehicleCode: "NKE165",
    service: "TRD Aero Skirts + Gloss Black De-Chroming Package",
    paintCode: "070 Pearl White + 202 Gloss Black Accent",
    fitmentGuarantee: "OEM Weather Rubber Seals • Perfect Edging",
    electricalSpec: "Rear Trunk Spoiler Brake Lamp Hookup",
    platform: "google",
    rating: 5,
    date: "1 month ago",
    googleReviewLevel: "Local Guide • 26 Reviews",
    googleReviewCount: 26,
    googleFoundHelpful: 15,
    quoteGoogle:
      "Got full TRD skirts and gloss black de-chroming on my Axio WxB. Gloss black contrast against pearl white looks menacing on the road. Attention to small details like rubber beading seals between panels shows their true craftsmanship. Best modification team around Galle.",
    whatsappMessage:
      "Bro TRD skirts fit eka super clean. Rubber beadings OEM wagema thiyala gahala thiyenne water seeping wenne nathi wenna. Gloss black de-chroming eken look eka totally change una. Unawatuna paththe inna ape set ekatath mama Carmate recommend kala!",
    whatsappTimestamp: "6:10 PM",
    whatsappAttachmentName: "IMG_20260814_WA0005.jpg",
    whatsappAttachmentSize: "2.2 MB • TRD Kit Close-up",
    carmateReply:
      "Much appreciated Sachintha! The TRD + gloss black contrast on that WxB is pure class. See you around Unawatuna!",
    carmateReplyTimestamp: "6:15 PM",
    image: "/assets/carmate-project-3.jpg",
    initials: "SD",
    avatarBg: "bg-gradient-to-br from-purple-600 to-indigo-700",
    verifiedLabel: "Verified Customer • Unawatuna",
  },
];

export function SriLankanFeedbackSection() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState<"split" | "google" | "whatsapp">("split");
  const [isLightMode, setIsLightMode] = React.useState(false);

  // Sync with document element class & listen for changes
  React.useEffect(() => {
    if (typeof document !== "undefined") {
      const isLight = document.documentElement.classList.contains("light");
      setIsLightMode(isLight);

      const observer = new MutationObserver(() => {
        setIsLightMode(document.documentElement.classList.contains("light"));
      });
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
      return () => observer.disconnect();
    }
  }, []);

  const toggleTheme = () => {
    if (typeof document !== "undefined") {
      const willBeLight = !isLightMode;
      setIsLightMode(willBeLight);
      if (willBeLight) {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
      } else {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
      }
    }
  };

  const activeReview = REVIEWS_5[selectedIndex];

  const nextReview = () => {
    setSelectedIndex((prev) => (prev + 1) % REVIEWS_5.length);
  };

  const prevReview = () => {
    setSelectedIndex((prev) => (prev - 1 + REVIEWS_5.length) % REVIEWS_5.length);
  };

  return (
    <section
      id="feedbacks"
      className={`py-20 sm:py-28 relative overflow-hidden transition-colors duration-500 ${
        isLightMode
          ? "bg-[#f4fafd] text-[#0a0a0c] border-t border-[#222227]/15"
          : "bg-[#05070a] text-zinc-100 border-t border-white/10"
      }`}
    >
      {/* Dynamic Background Atmosphere */}
      {isLightMode ? (
        <>
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#f7eef0]/35 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-[600px] h-[350px] bg-[#6b111e]/20 rounded-full blur-[130px] pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-[#ea1c24]/[0.035] rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-[#222227]/20 rounded-full blur-[120px] pointer-events-none" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges & Interactive Theme Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase border shadow-sm ${
              isLightMode
                ? "bg-[#f7eef0]/60 text-[#0a0a0c] border-[#222227]/20"
                : "bg-white/[0.04] text-[#ea1c24] border-white/15"
            }`}
          >
            <Sparkles size={13} className={isLightMode ? "text-[#222227]" : "text-[#ea1c24]"} />
            <span>5 VERIFIED SRI LANKAN OWNER EXPERIENCES • MAKULUWA, GALLE</span>
          </div>

          {/* Theme Switcher Toggle Pill */}
          <button
            onClick={toggleTheme}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 shadow-sm cursor-pointer ${
              isLightMode
                ? "bg-[#FFFFFF] text-[#0a0a0c] border-[#222227]/25 hover:border-[#6b111e] hover:shadow-md"
                : "bg-[#0b0e14] text-zinc-300 border-white/15 hover:border-white/30 hover:text-white"
            }`}
            title="Toggle Light/Dark Theme"
          >
            {isLightMode ? (
              <>
                <Moon size={14} className="text-[#222227]" />
                <span className="font-mono text-[11px]">Theme: <strong className="text-[#0a0a0c]">Luxury Spec</strong> (Switch to Dark)</span>
              </>
            ) : (
              <>
                <Sun size={14} className="text-amber-400" />
                <span className="font-mono text-[11px]">Theme: <strong className="text-white">Obsidian Dark</strong> (Switch to Light)</span>
              </>
            )}
          </button>
        </div>

        {/* Section Headline */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-none mb-4 ${
              isLightMode ? "text-[#0a0a0c]" : "text-white"
            }`}
          >
            REAL BUILDS.{" "}
            <span
              className={`text-transparent bg-clip-text ${
                isLightMode
                  ? "bg-gradient-to-r from-[#0a0a0c] via-[#222227] to-[#6b111e]"
                  : "bg-gradient-to-r from-[#ea1c24] via-[#ff525a] to-white"
              }`}
            >
              GENUINE REVIEWS.
            </span>
          </h2>

          <p
            className={`text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed ${
              isLightMode ? "text-[#222227]/80 font-medium" : "text-zinc-400"
            }`}
          >
            Real Sri Lankan automotive enthusiasts sharing genuine build experiences. From daily drivers around Galle Fort to custom projects commuting via the Southern Expressway.
          </p>

          {/* Authentic Google & Workshop Trust Indicators */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs">
            {/* Google Business Profile Rating */}
            <div
              className={`flex items-center gap-2.5 px-4 py-2 rounded-xl border shadow-sm transition-all ${
                isLightMode
                  ? "bg-[#FFFFFF] border-[#222227]/15 text-[#0a0a0c]"
                  : "bg-[#0d1117] border-white/10 text-white"
              }`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span className="font-bold">4.9 / 5.0</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
              <span className={`text-[11px] font-mono ${isLightMode ? "text-[#222227]/70" : "text-zinc-500"}`}>
                • 50+ Verified Reviews
              </span>
            </div>

            {/* Socket-to-Socket Guarantee */}
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border shadow-sm ${
                isLightMode
                  ? "bg-[#FFFFFF] border-[#222227]/15 text-[#0a0a0c]"
                  : "bg-[#0d1117] border-white/10 text-zinc-200"
              }`}
            >
              <ShieldCheck size={14} className="text-emerald-500" />
              <span className="font-semibold">Socket-to-Socket Wiring</span>
              <span className={`text-[11px] font-mono ${isLightMode ? "text-[#222227]/70" : "text-zinc-500"}`}>
                • Zero Wire Cut
              </span>
            </div>

            {/* Workshop Location */}
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border shadow-sm ${
                isLightMode
                  ? "bg-[#FFFFFF] border-[#222227]/15 text-[#0a0a0c]"
                  : "bg-[#0d1117] border-white/10 text-zinc-200"
              }`}
            >
              <MapPin size={14} className={isLightMode ? "text-[#222227]" : "text-[#ea1c24]"} />
              <span className="font-semibold">Makuluwa, Galle</span>
              <span className={`text-[11px] font-mono ${isLightMode ? "text-[#222227]/70" : "text-zinc-500"}`}>
                • Southern Province
              </span>
            </div>
          </div>
        </div>

        {/* 5 Cars Quick-Select Selector Strip */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3.5 mb-8 sm:mb-12">
          {REVIEWS_5.map((rev, index) => {
            const isSelected = selectedIndex === index;
            return (
              <button
                key={rev.id}
                onClick={() => setSelectedIndex(index)}
                className={`group inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
                  isSelected
                    ? isLightMode
                      ? "bg-[#0a0a0c] text-[#FFFFFF] border-[#0a0a0c] shadow-[0_4px_20px_rgba(11,31,59,0.22)] scale-[1.03]"
                      : "bg-[#ea1c24] text-white border-[#ea1c24] shadow-[0_0_25px_rgba(234,28,36,0.45)] scale-[1.03]"
                    : isLightMode
                    ? "bg-[#FFFFFF] text-[#222227] hover:text-[#0a0a0c] border-[#222227]/15 hover:border-[#6b111e] shadow-sm"
                    : "bg-[#0b0e14]/80 text-zinc-400 hover:text-white border-white/10 hover:border-white/25"
                }`}
              >
                <div className="w-6 h-6 rounded-full overflow-hidden border border-white/20 shrink-0">
                  <img src={rev.image} alt={rev.vehicle} className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[10px] opacity-75">0{rev.id}.</span>
                    <span>{rev.vehicle}</span>
                  </div>
                  <span
                    className={`block text-[9px] font-mono uppercase tracking-wider ${
                      isSelected
                        ? isLightMode
                          ? "text-[#6b111e]"
                          : "text-zinc-200"
                        : isLightMode
                        ? "text-[#222227]/70"
                        : "text-zinc-500"
                    }`}
                  >
                    {rev.name.split(" ")[0]} • {rev.location}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* View Mode Switcher Pills: Split / Google / WhatsApp */}
        <div className="flex justify-center mb-8">
          <div
            className={`inline-flex p-1 rounded-xl border text-xs font-semibold ${
              isLightMode ? "bg-[#FFFFFF] border-[#222227]/20 shadow-sm" : "bg-[#0c1017] border-white/10"
            }`}
          >
            <button
              onClick={() => setActiveTab("split")}
              className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === "split"
                  ? isLightMode
                    ? "bg-[#0a0a0c] text-white shadow-sm"
                    : "bg-white/15 text-white shadow-sm"
                  : isLightMode
                  ? "text-[#222227] hover:text-[#0a0a0c]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Split View (Google & WhatsApp)
            </button>
            <button
              onClick={() => setActiveTab("google")}
              className={`px-4 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "google"
                  ? isLightMode
                    ? "bg-[#0a0a0c] text-white shadow-sm"
                    : "bg-white/15 text-white shadow-sm"
                  : isLightMode
                  ? "text-[#222227] hover:text-[#0a0a0c]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span>Google Review Card</span>
            </button>
            <button
              onClick={() => setActiveTab("whatsapp")}
              className={`px-4 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "whatsapp"
                  ? isLightMode
                    ? "bg-[#0a0a0c] text-white shadow-sm"
                    : "bg-white/15 text-white shadow-sm"
                  : isLightMode
                  ? "text-[#222227] hover:text-[#0a0a0c]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span>Direct WhatsApp Chat</span>
            </button>
          </div>
        </div>

        {/* MAIN INTERACTIVE SPOTLIGHT CONTAINER */}
        <div
          className={`border rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-all duration-300 ${
            isLightMode
              ? "bg-[#FFFFFF] border-[#222227]/20 shadow-[0_20px_60px_-15px_rgba(11,31,59,0.12)]"
              : "bg-[#0b0e14] border-white/15"
          }`}
        >
          {/* Subtle Accent Glow */}
          <div
            className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
              isLightMode ? "bg-[#6b111e]/15" : "bg-[#ea1c24]/[0.04]"
            }`}
          />

          {/* Active Build Header & Navigation Controls */}
          <div
            className={`pb-6 mb-8 border-b flex flex-col md:flex-row md:items-center justify-between gap-4 ${
              isLightMode ? "border-[#222227]/15" : "border-white/10"
            }`}
          >
            <div className="flex items-center gap-3.5">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-white text-base shrink-0 shadow-md ${activeReview.avatarBg}`}
              >
                {activeReview.initials}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3
                    className={`text-lg sm:text-xl font-black uppercase tracking-tight ${
                      isLightMode ? "text-[#0a0a0c]" : "text-white"
                    }`}
                  >
                    {activeReview.name}
                  </h3>
                  <BadgeCheck size={18} className="text-emerald-500" />
                </div>
                <div
                  className={`flex flex-wrap items-center gap-2 text-xs mt-0.5 ${
                    isLightMode ? "text-[#222227]" : "text-zinc-400"
                  }`}
                >
                  <span className="font-semibold">{activeReview.vehicle}</span>
                  <span className="opacity-50">•</span>
                  <span className="font-mono text-[11px]">{activeReview.vehicleCode}</span>
                  <span className="opacity-50">•</span>
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <MapPin size={11} className={isLightMode ? "text-[#222227]" : "text-[#ea1c24]"} />
                    {activeReview.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-3 self-end md:self-center">
              <span
                className={`text-xs font-mono ${
                  isLightMode ? "text-[#222227]/80 font-bold" : "text-zinc-500"
                }`}
              >
                0{selectedIndex + 1} of 0{REVIEWS_5.length}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={prevReview}
                  aria-label="Previous Review"
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all active:scale-95 cursor-pointer ${
                    isLightMode
                      ? "bg-[#f7eef0]/40 hover:bg-[#f7eef0] border-[#222227]/20 text-[#0a0a0c]"
                      : "bg-white/[0.06] hover:bg-white/[0.12] border-white/15 text-white"
                  }`}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextReview}
                  aria-label="Next Review"
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all active:scale-95 cursor-pointer ${
                    isLightMode
                      ? "bg-[#f7eef0]/40 hover:bg-[#f7eef0] border-[#222227]/20 text-[#0a0a0c]"
                      : "bg-white/[0.06] hover:bg-white/[0.12] border-white/15 text-white"
                  }`}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* DUAL CONTENT GRID: Google Review Card & WhatsApp Preview */}
          <div
            className={`grid gap-8 items-stretch ${
              activeTab === "split"
                ? "grid-cols-1 lg:grid-cols-12"
                : "grid-cols-1 max-w-3xl mx-auto"
            }`}
          >
            {/* COLUMN A: Authentically Styled Google Maps / Business Review Card */}
            {(activeTab === "split" || activeTab === "google") && (
              <div
                className={`flex flex-col justify-between p-6 sm:p-7 rounded-2xl border transition-all ${
                  activeTab === "split" ? "lg:col-span-6" : "w-full"
                } ${
                  isLightMode
                    ? "bg-[#FFFFFF] border-[#222227]/20 shadow-md"
                    : "bg-[#0e131d] border-white/10 shadow-xl"
                }`}
              >
                <div>
                  {/* Google Review Card Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                      </svg>
                      <div>
                        <span
                          className={`text-xs font-bold block leading-tight ${
                            isLightMode ? "text-[#0a0a0c]" : "text-white"
                          }`}
                        >
                          Google Maps Review
                        </span>
                        <span
                          className={`text-[10px] font-mono ${
                            isLightMode ? "text-[#222227]/70" : "text-zinc-400"
                          }`}
                        >
                          {activeReview.googleReviewLevel}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-md border ${
                        isLightMode
                          ? "bg-[#f7eef0]/50 border-[#222227]/20 text-[#0a0a0c]"
                          : "bg-white/[0.05] border-white/10 text-zinc-400"
                      }`}
                    >
                      {activeReview.date}
                    </span>
                  </div>

                  {/* Stars Row with Verified Tag */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-amber-400 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} fill="#f59e0b" className="text-amber-400" />
                      ))}
                    </div>
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                        isLightMode
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-emerald-950/50 text-emerald-400 border border-emerald-800/40"
                      }`}
                    >
                      Verified Workshop Customer
                    </span>
                  </div>

                  {/* Build Specifications Summary Chips */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    <div
                      className={`p-2.5 rounded-xl border text-[11px] ${
                        isLightMode
                          ? "bg-[#f8fcfe] border-[#222227]/15"
                          : "bg-[#090d14] border-white/10"
                      }`}
                    >
                      <span
                        className={`block text-[9px] font-mono uppercase tracking-wider ${
                          isLightMode ? "text-[#222227]/70" : "text-zinc-500"
                        }`}
                      >
                        Paint / Spec
                      </span>
                      <strong className={isLightMode ? "text-[#0a0a0c]" : "text-white"}>
                        {activeReview.paintCode}
                      </strong>
                    </div>

                    <div
                      className={`p-2.5 rounded-xl border text-[11px] ${
                        isLightMode
                          ? "bg-[#f8fcfe] border-[#222227]/15"
                          : "bg-[#090d14] border-white/10"
                      }`}
                    >
                      <span
                        className={`block text-[9px] font-mono uppercase tracking-wider ${
                          isLightMode ? "text-[#222227]/70" : "text-zinc-500"
                        }`}
                      >
                        Fitment Standard
                      </span>
                      <strong className={isLightMode ? "text-[#0a0a0c]" : "text-emerald-400"}>
                        {activeReview.fitmentGuarantee}
                      </strong>
                    </div>
                  </div>

                  {/* Real Google Review Quote */}
                  <blockquote
                    className={`text-sm sm:text-base leading-relaxed italic pl-4 border-l-3 mb-6 ${
                      isLightMode
                        ? "text-[#0a0a0c] border-[#222227]"
                        : "text-zinc-100 border-[#ea1c24]"
                    }`}
                  >
                    "{activeReview.quoteGoogle}"
                  </blockquote>
                </div>

                {/* Google Review Footer */}
                <div
                  className={`pt-4 border-t flex items-center justify-between text-xs ${
                    isLightMode ? "border-[#222227]/15 text-[#222227]" : "border-white/10 text-zinc-400"
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <ThumbsUp size={13} className="text-emerald-500" />
                    <span className="text-[11px]">
                      {activeReview.googleFoundHelpful} people found this helpful
                    </span>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Makuluwa+Galle+Sri+Lanka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 text-[11px] font-semibold hover:underline ${
                      isLightMode ? "text-[#0a0a0c]" : "text-zinc-300"
                    }`}
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            )}

            {/* COLUMN B: Direct WhatsApp Customer Chat Interface */}
            {(activeTab === "split" || activeTab === "whatsapp") && (
              <div
                className={`flex flex-col justify-between rounded-2xl border overflow-hidden shadow-2xl transition-all ${
                  activeTab === "split" ? "lg:col-span-6" : "w-full"
                } ${
                  isLightMode
                    ? "bg-[#efeae2] border-[#222227]/25"
                    : "bg-[#0b141a] border-white/10"
                }`}
              >
                {/* WhatsApp Chat Top App Bar */}
                <div
                  className={`px-4 py-3 flex items-center justify-between ${
                    isLightMode ? "bg-[#222227] text-white" : "bg-[#202c33] text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-xs text-white shadow">
                      CM
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold leading-tight">Carmate Modifications Galle</span>
                        <BadgeCheck size={13} className="text-emerald-400 fill-emerald-400" />
                      </div>
                      <span className="text-[10px] text-emerald-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        +94 77 717 7452 • Online
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 text-white/80">
                    <Camera size={16} />
                    <Phone size={16} />
                  </div>
                </div>

                {/* Chat Bubbles Container */}
                <div className="p-4 sm:p-5 flex flex-col gap-3.5 flex-1 justify-center">
                  {/* Date Stamp Pill */}
                  <div className="text-center">
                    <span
                      className={`text-[10px] font-mono px-3 py-1 rounded-full uppercase shadow-xs ${
                        isLightMode
                          ? "bg-white/80 text-[#222227] border border-[#222227]/15"
                          : "bg-[#182229] text-zinc-400 border border-white/5"
                      }`}
                    >
                      Customer Direct Chat • Southern Workshop
                    </span>
                  </div>

                  {/* Customer Inbound Bubble with Car Photo Attachment */}
                  <div className="self-start max-w-[92%] sm:max-w-[85%]">
                    <div
                      className={`rounded-2xl rounded-tl-sm p-3 shadow-md border ${
                        isLightMode
                          ? "bg-[#FFFFFF] text-[#0a0a0c] border-black/5"
                          : "bg-[#202c33] text-zinc-100 border-white/5"
                      }`}
                    >
                      {/* Photo Thumbnail Attachment */}
                      <div className="relative rounded-xl overflow-hidden mb-2.5 border border-black/10 aspect-[16/10] group">
                        <img
                          src={activeReview.image}
                          alt={activeReview.vehicle}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2 text-white text-[10px] font-mono justify-between">
                          <span className="truncate">{activeReview.whatsappAttachmentName}</span>
                          <span className="opacity-80 shrink-0">{activeReview.whatsappAttachmentSize}</span>
                        </div>
                      </div>

                      {/* Customer Message */}
                      <p className="text-xs sm:text-[13px] leading-relaxed">
                        "{activeReview.whatsappMessage}"
                      </p>

                      {/* Timestamp & Double Blue Ticks */}
                      <div className="mt-2 flex items-center justify-end gap-1 text-[10px]">
                        <span className={isLightMode ? "text-zinc-500" : "text-zinc-400"}>
                          {activeReview.whatsappTimestamp}
                        </span>
                        {/* WhatsApp Blue Double Tick */}
                        <CheckCheck size={14} className="text-[#53bdeb]" />
                      </div>
                    </div>
                    <span
                      className={`text-[10px] font-mono ml-1 mt-0.5 block ${
                        isLightMode ? "text-[#222227]/70" : "text-zinc-500"
                      }`}
                    >
                      From: {activeReview.name} ({activeReview.location})
                    </span>
                  </div>

                  {/* Workshop Outbound Reply Bubble */}
                  <div className="self-end max-w-[92%] sm:max-w-[85%]">
                    <div
                      className={`rounded-2xl rounded-tr-sm p-3 shadow-md border ${
                        isLightMode
                          ? "bg-[#D9FDD3] text-[#0a0a0c] border-[#222227]/10"
                          : "bg-[#005c4b] text-white border-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-800 dark:text-emerald-200 mb-1">
                        <span>Carmate Galle Workshop</span>
                      </div>
                      <p className="text-xs sm:text-[13px] leading-relaxed">
                        {activeReview.carmateReply}
                      </p>
                      <div className="mt-1.5 flex items-center justify-end gap-1 text-[10px]">
                        <span className={isLightMode ? "text-emerald-900/60" : "text-emerald-200/70"}>
                          {activeReview.carmateReplyTimestamp}
                        </span>
                        <CheckCheck size={14} className="text-[#53bdeb]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fake WhatsApp Bottom Input Field */}
                <div
                  className={`px-3 py-2 border-t flex items-center gap-2 ${
                    isLightMode ? "bg-[#f0f2f5] border-black/10" : "bg-[#202c33] border-white/5"
                  }`}
                >
                  <div
                    className={`flex-1 px-3 py-1.5 rounded-full text-xs font-mono truncate ${
                      isLightMode ? "bg-white text-zinc-400" : "bg-[#2a3942] text-zinc-400"
                    }`}
                  >
                    Verified Customer Chat • Verified via WhatsApp +94 77 717 7452
                  </div>
                  <a
                    href="https://wa.me/94777177452"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shrink-0 transition-transform active:scale-95"
                    title="Chat with Carmate on WhatsApp"
                  >
                    <MessageSquare size={14} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 5-CARD OVERVIEW GRID: ALL 5 REVIEWS VISIBLE AT A GLANCE */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h4
              className={`text-sm font-bold uppercase tracking-wider font-mono ${
                isLightMode ? "text-[#0a0a0c]" : "text-zinc-300"
              }`}
            >
              All 5 Verified Customer Reviews ({REVIEWS_5.length})
            </h4>
            <span
              className={`text-xs font-mono ${
                isLightMode ? "text-[#222227]" : "text-zinc-500"
              }`}
            >
              Click any card to inspect full build
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {REVIEWS_5.map((rev, index) => {
              const isSelected = selectedIndex === index;
              return (
                <div
                  key={rev.id}
                  onClick={() => setSelectedIndex(index)}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? isLightMode
                        ? "bg-[#FFFFFF] border-[#0a0a0c] shadow-[0_8px_25px_rgba(11,31,59,0.18)] -translate-y-1 ring-2 ring-[#6b111e]"
                        : "bg-[#10141d] border-[#ea1c24] shadow-[0_4px_25px_rgba(234,28,36,0.35)] -translate-y-1 ring-1 ring-[#ea1c24]"
                      : isLightMode
                      ? "bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] border-[#222227]/15 hover:border-[#6b111e] shadow-xs"
                      : "bg-[#090c12]/75 border-white/[0.08] hover:border-white/20 hover:bg-[#0c1017]"
                  }`}
                >
                  <div>
                    {/* Card Top: Index, Stars, Platform */}
                    <div className="flex items-center justify-between gap-1 mb-2.5">
                      <span
                        className={`text-[11px] font-mono font-bold ${
                          isLightMode ? "text-[#0a0a0c]" : "text-[#ea1c24]"
                        }`}
                      >
                        0{rev.id}. {rev.vehicleCode}
                      </span>
                      <div className="flex text-amber-400 gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={10} fill="#f59e0b" className="text-amber-400" />
                        ))}
                      </div>
                    </div>

                    {/* Customer Photo Thumbnail */}
                    <div className="h-28 rounded-xl overflow-hidden mb-2.5 relative border border-black/10">
                      <img
                        src={rev.image}
                        alt={rev.vehicle}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-1 right-1 bg-black/70 backdrop-blur-xs px-1.5 py-0.5 rounded text-[9px] font-mono text-white flex items-center gap-1">
                        <CheckCheck size={10} className="text-[#53bdeb]" />
                        <span>Verified</span>
                      </div>
                    </div>

                    <h5
                      className={`text-xs font-bold truncate ${
                        isLightMode ? "text-[#0a0a0c]" : "text-white"
                      }`}
                    >
                      {rev.name}
                    </h5>

                    <p
                      className={`text-[10px] font-mono flex items-center gap-1 mt-0.5 mb-2 ${
                        isLightMode ? "text-[#222227]" : "text-zinc-400"
                      }`}
                    >
                      <MapPin size={9} className={isLightMode ? "text-[#222227]" : "text-[#ea1c24]"} />
                      <span>{rev.location}</span>
                    </p>

                    <p
                      className={`text-[11px] line-clamp-2 italic leading-relaxed ${
                        isLightMode ? "text-[#222227]/90" : "text-zinc-300"
                      }`}
                    >
                      "{rev.quoteGoogle}"
                    </p>
                  </div>

                  <div
                    className={`mt-3 pt-2.5 border-t flex items-center justify-between text-[10px] ${
                      isLightMode ? "border-[#222227]/15" : "border-white/[0.08]"
                    }`}
                  >
                    <span
                      className={`font-mono uppercase font-bold ${
                        isSelected
                          ? isLightMode
                            ? "text-[#0a0a0c]"
                            : "text-[#ea1c24]"
                          : isLightMode
                          ? "text-[#222227]/70"
                          : "text-zinc-500"
                      }`}
                    >
                      {isSelected ? "Active View" : "Click to view"}
                    </span>
                    <span
                      className={`font-mono ${
                        isLightMode ? "text-[#222227]/60" : "text-zinc-500"
                      }`}
                    >
                      {rev.date}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Direct Sri Lankan WhatsApp Consultation Banner */}
        <div
          className={`mt-14 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl p-6 sm:p-8 border shadow-lg transition-all ${
            isLightMode
              ? "bg-[#FFFFFF] border-[#222227]/20"
              : "bg-white/[0.02] border-white/10"
          }`}
        >
          <div>
            <div
              className={`inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase mb-2 ${
                isLightMode ? "text-[#222227]" : "text-[#ea1c24]"
              }`}
            >
              <Wrench size={12} />
              <span>Galle Workshop Direct Booking • Sinhala & English</span>
            </div>
            <h4
              className={`text-lg sm:text-2xl font-bold uppercase tracking-tight ${
                isLightMode ? "text-[#0a0a0c]" : "text-white"
              }`}
            >
              Ready to modify your Prius, Aqua, Civic or Axio?
            </h4>
            <p
              className={`text-xs sm:text-sm mt-1 max-w-xl ${
                isLightMode ? "text-[#222227]/80" : "text-zinc-400"
              }`}
            >
              Send us your car model & desired build on WhatsApp. Our Makuluwa, Galle workshop team provides exact fitment details, paint codes, and transparent quotations.
            </p>
          </div>

          <a
            href="https://wa.me/94777177452?text=Hello%20Carmate!%20I'm%20reaching%20out%20for%20a%20vehicle%20modification%20quotation%20at%20your%20Galle%20workshop."
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105 shrink-0 active:scale-95 ${
              isLightMode
                ? "bg-[#0a0a0c] hover:bg-[#222227] text-white shadow-[0_4px_25px_rgba(11,31,59,0.3)]"
                : "bg-[#ea1c24] hover:bg-[#ff222a] text-white shadow-[0_4px_25px_rgba(234,28,36,0.45)]"
            }`}
          >
            <MessageSquare size={16} />
            <span>Chat on WhatsApp (+94 77 717 7452)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
