"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

/* ─── Typewriter Hook ─────────────────────────────────────────── */
function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let index = 0;

    const delayTimer = setTimeout(() => {
      const interval = setInterval(() => {
        index++;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(delayTimer);
  }, [text, speed, startDelay]);

  return { displayed, done };
}

/* ─── Background Video ────────────────────────────────────────── */
function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTimeRef = useRef(0);
  const prevXRef = useRef<number | null>(null);

  // Desktop: scrub on mouse move
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleSeeked = () => {
      video.currentTime = targetTimeRef.current;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      if (!video.duration) return;

      const prevX = prevXRef.current ?? e.clientX;
      const delta = e.clientX - prevX;
      prevXRef.current = e.clientX;

      targetTimeRef.current = Math.min(
        Math.max(targetTimeRef.current + (delta / window.innerWidth) * 0.8 * video.duration, 0),
        video.duration
      );

      video.currentTime = targetTimeRef.current;
    };

    video.addEventListener("seeked", handleSeeked);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      video.removeEventListener("seeked", handleSeeked);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Mobile: autoplay
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.innerWidth < 1024) {
      video.autoplay = true;
      video.play().catch(() => {});
    }
  }, []);

  return (
    <div className="order-last lg:order-none relative lg:absolute lg:inset-0 lg:z-0 overflow-hidden pointer-events-none w-full aspect-square md:aspect-video lg:aspect-auto lg:h-full bg-neutral-50 lg:bg-transparent">
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover object-right lg:object-right-bottom"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

/* ─── Service Pills ───────────────────────────────────────────── */
const SERVICE_OPTIONS = ["Brand", "Digital", "Campaign", "Other"];

function ServicePills() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = useCallback((s: string) => {
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }, []);

  return (
    <div>
      <p className="text-2xl font-medium tracking-tight mb-1 text-[#1C2E1E]">
        What sort of service?
      </p>
      <p className="text-sm mb-6 text-[#738273]" style={{ opacity: 0.85 }}>
        Select all that apply
      </p>

      <div className="flex flex-wrap gap-3 mb-6">
        {SERVICE_OPTIONS.map((s) => {
          const active = selected.includes(s);
          return (
            <motion.button
              key={s}
              onClick={() => toggle(s)}
              whileTap={{ scale: 0.96 }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active
                  ? "bg-[#1C2E1E] text-white shadow-md shadow-emerald-950/5"
                  : "bg-white text-[#1C2E1E] border border-[#F1F3F1] hover:bg-[#F1F3F1]/55"
              }`}
            >
              <AnimatePresence>
                {active && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Check size={13} strokeWidth={2.5} />
                  </motion.span>
                )}
              </AnimatePresence>
              {s}
            </motion.button>
          );
        })}
      </div>

      {/* Feedback banner */}
      <AnimatePresence mode="wait">
        {selected.length === 0 ? (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="text-xs italic text-[#738273]"
          >
            Please click to select services above.
          </motion.p>
        ) : (
          <motion.div
            key="selected"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="overflow-hidden"
          >
            <div className="bg-[#FAFBF9] border border-[#EAECE9] rounded-2xl px-5 py-4 flex items-center justify-between gap-4">
              <p className="text-sm text-[#1C2E1E]">
                Ready to inquire about:{" "}
                <span className="font-medium">{selected.join(", ")}</span>
              </p>
              <button className="flex items-center gap-1.5 text-[#4D6D47] uppercase text-xs font-semibold tracking-wider whitespace-nowrap hover:opacity-70 transition-opacity">
                Let&apos;s Go <ArrowRight size={13} strokeWidth={2.5} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Hero Section (main export) ─────────────────────────────── */
export default function InteractiveHero() {
  const { displayed, done } = useTypewriter("we'd love to\nhear from you!", 38, 600);

  return (
    <section className="relative bg-white text-neutral-900 font-sans antialiased overflow-x-hidden flex flex-col lg:block lg:min-h-[90vh] rounded-2xl mb-0">
      {/* Background video */}
      <BackgroundVideo />

      {/* Content layer */}
      <div className="relative z-10 flex flex-col order-first lg:order-none w-full bg-white lg:bg-transparent pb-8 lg:pb-0 lg:min-h-[90vh]">
        <main className="w-full max-w-4xl mx-auto px-6 py-14 flex-1 flex flex-col justify-center">

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-normal tracking-tight text-black leading-[1.08] mb-8 select-none w-full whitespace-pre-wrap">
              {displayed}
              {!done && (
                <span className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-blink" />
              )}
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg md:text-xl text-[#5A635A] leading-relaxed font-normal mb-14 max-w-2xl">
              Whether you have questions, feedback,{" "}
              <br className="hidden sm:block" />
              drop us a message and we&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>

          {/* Service Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ServicePills />
          </motion.div>
        </main>
      </div>
    </section>
  );
}
