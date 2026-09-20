"use client";

import React from "react";
import { useTheme } from "@/components/providers/theme-provider";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ThemeToggleProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function ThemeToggle({
  className = "",
  size = "md",
  showLabel = false,
}: ThemeToggleProps) {
  const { theme, toggleTheme, mounted, isDark } = useTheme();

  // Prevent hydration mismatch: render placeholder with same dimensions
  if (!mounted) {
    return (
      <div
        className={`relative inline-flex items-center justify-center rounded-full border border-white/10 bg-black/20 backdrop-blur-md opacity-70 ${
          size === "sm" ? "w-9 h-9" : size === "lg" ? "w-12 h-12" : "w-10 h-10"
        } ${className}`}
        aria-hidden="true"
      >
        <div className="w-4 h-4 rounded-full bg-white/20 animate-pulse" />
      </div>
    );
  }

  const iconSizes = {
    sm: 16,
    md: 18,
    lg: 22,
  };

  const currentIconSize = iconSizes[size];

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <motion.button
        type="button"
        onClick={toggleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        aria-label={
          isDark
            ? "Switch to Ambient Aurora Light Theme"
            : "Switch to Signature Automotive Dark Theme"
        }
        title={
          isDark
            ? "Switch to Ambient Aurora Light Theme"
            : "Switch to Signature Automotive Dark Theme"
        }
        className={`group relative flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#62B6CB] cursor-pointer select-none ${
          size === "sm"
            ? "w-9 h-9 min-w-[36px] min-h-[36px]"
            : size === "lg"
            ? "w-12 h-12 min-w-[48px] min-h-[48px]"
            : "w-10 h-10 min-w-[40px] min-h-[40px]"
        } ${
          isDark
            ? "bg-[#090d14]/90 hover:bg-[#0f1420] text-zinc-300 hover:text-white border border-white/15 hover:border-[#ea1c24]/50 shadow-[0_2px_12px_rgba(0,0,0,0.6)] hover:shadow-[0_0_16px_rgba(234,28,36,0.35)]"
            : "bg-white/90 hover:bg-white text-[#0B1F3B] hover:text-[#1B4965] border border-[#62B6CB]/40 hover:border-[#62B6CB] shadow-[0_2px_12px_rgba(11,31,59,0.08)] hover:shadow-[0_0_18px_rgba(98,182,203,0.45)]"
        }`}
      >
        {/* Subtle interior cockpit radial ring */}
        <span
          className={`absolute inset-0.5 rounded-full pointer-events-none transition-opacity duration-300 ${
            isDark
              ? "bg-gradient-to-tr from-white/[0.03] to-transparent opacity-80 group-hover:opacity-100"
              : "bg-gradient-to-tr from-[#BEE9E8]/30 to-transparent opacity-90 group-hover:opacity-100"
          }`}
        />

        {/* Ambient status indicator LED dot */}
        <span
          className={`absolute top-1 right-1 w-1.5 h-1.5 rounded-full transition-all duration-300 ${
            isDark
              ? "bg-[#ea1c24] shadow-[0_0_6px_#ea1c24]"
              : "bg-[#62B6CB] shadow-[0_0_6px_#62B6CB]"
          }`}
        />

        {/* Animated Sun / Moon icon transition */}
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="dark-moon"
              initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 22,
              }}
              className="relative flex items-center justify-center"
            >
              <Moon
                size={currentIconSize}
                className="text-zinc-200 group-hover:text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                strokeWidth={1.75}
              />
            </motion.div>
          ) : (
            <motion.div
              key="light-sun"
              initial={{ rotate: 90, scale: 0.6, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0.6, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 22,
              }}
              className="relative flex items-center justify-center"
            >
              <Sun
                size={currentIconSize}
                className="text-[#0B1F3B] group-hover:text-[#1B4965] drop-shadow-[0_0_6px_rgba(98,182,203,0.6)]"
                strokeWidth={1.85}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {showLabel && (
        <span
          onClick={toggleTheme}
          className={`text-xs font-mono font-bold tracking-wider uppercase cursor-pointer select-none transition-colors ${
            isDark
              ? "text-zinc-400 hover:text-white"
              : "text-[#1B4965] hover:text-[#0B1F3B]"
          }`}
        >
          {isDark ? "Dark Spec" : "Aurora Light"}
        </span>
      )}
    </div>
  );
}
