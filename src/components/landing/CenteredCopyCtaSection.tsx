import React from "react";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next"; // Commented out - using Dutch as default
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";

type Stat = { value: string; label: string };

type Props = {
  ctaHref?: string;
  ctaLabel?: string;
  headline?: string;
  stats?: Stat[];
};

export default function CenteredCopyCtaSection({
  ctaHref = "/preregistreer",
  ctaLabel,
  headline,
  stats,
}: Props) {
  // const { t } = useTranslation(); // Commented out - using Dutch as default
  const BASE = "#FFFCFA"; // ✅ matches LandingBackground whiteBackground
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.35, once: true });
  
  const finalHeadline = headline || "90% van het brein ontwikkelt vóór jaar 7.\nKleine momentjes, grote impact.";
  const finalCtaLabel = ctaLabel || "PREREGISTREER HIER";
  const finalStats = stats || [
    { value: "10 min", label: "gemiddelde tijd\nper activiteit" },
    { value: "80%", label: "ervaart sterkere\nouder-kind band" },
    { value: "94%", label: "van kinderen toont\nverbetering in emotionele\nintelligentie" },
  ];

  const container: Variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: reduce ? { duration: 0 } : { staggerChildren: 0.08, delayChildren: 0.06 },
    },
  };

  const item: Variants = {
    hidden: reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.99 },
    show: reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section ref={ref} className="relative bg-[#FFFCFA] pt-16 pb-8 sm:pt-20 sm:pb-8 lg:pt-24">
      <div className="mx-auto w-full">
        {/* Curved gradient strip */}
        <div className="relative overflow-hidden bg-[#FFFCFA]">
          {/* Animated Gradient background */}
          {/* Animated Gradient background - Mobile */}
          <motion.div
            className="absolute inset-0 transform-gpu sm:hidden"
            style={{
              background: 
                "radial-gradient(circle at 65.625% 30%, #FFB653 0%, 25%, rgba(255, 182, 83, 0) 50%), radial-gradient(circle at 16.041666666666668% 64.16666666666667%, rgba(255, 102, 147, 0.74) 0%, 47.038%, rgba(255, 102, 147, 0) 58%), radial-gradient(circle at 48.9013671875% 49.521484375%, #FFFCFA 0%, 100%, rgba(255, 252, 250, 0) 100%)"
            }}
            aria-hidden="true"
            initial={false}
            animate={
              reduce
                ? undefined
                : {
                    scale: [1, 1.03, 1],
                    x: [0, -18, 0],
                    y: [0, 10, 0],
                  }
            }
            transition={reduce ? { duration: 0 } : { duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Animated Gradient background - Desktop */}
          <motion.div
            className="absolute inset-0 transform-gpu hidden sm:block"
            style={{
              background: [
                "radial-gradient(53.36% 175.42% at 48.9% 49.52%, rgba(255, 252, 250, 0.15) 0%, rgba(255, 252, 250, 0.08) 50%, rgba(255, 252, 250, 0) 100%)",
                "radial-gradient(86.2% 283.39% at 16.04% 64.17%, rgba(255, 102, 147, 0.85) 0%, rgba(255, 102, 147, 0.5) 47.04%, rgba(255, 102, 147, 0) 58%)",
                "radial-gradient(68.99% 226.82% at 65.62% 30%, #FFB653 0%, rgba(255, 182, 83, 0.75) 25%, rgba(255, 182, 83, 0) 50%)",
              ].join(","),
            }}
            aria-hidden="true"
            initial={false}
            animate={
              reduce
                ? undefined
                : {
                    scale: [1, 1.03, 1],
                    x: [0, -18, 0],
                    y: [0, 10, 0],
                  }
            }
            transition={reduce ? { duration: 0 } : { duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Soft overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              background: "radial-gradient(closest-side, rgba(255,255,255,0.35), rgba(255,255,255,0))",
            }}
            aria-hidden="true"
          />

          {/* Top curve */}
          <svg
            className="pointer-events-none absolute inset-x-0 top-0 h-[120px] w-full sm:h-[140px]"
            viewBox="0 0 1440 240"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,0 H1440 V80 C1100,170 340,170 0,80 Z"
              fill={BASE}
            />
          </svg>

          {/* Bottom flat edge */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] w-full bg-[#FFFCFA] sm:h-[1px]"
            aria-hidden="true"
          />

          {/* Stats content */}
          <motion.div
            className="relative z-10 mx-auto max-w-[1100px] px-6 pt-[120px] pb-16 sm:px-10 sm:pt-[150px] sm:pb-20 lg:px-14"
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <div className="flex flex-col-reverse gap-28 sm:grid sm:grid-cols-3 sm:gap-8 lg:gap-10 lg:mt-0 mt-10">
              {/* Mobile Only Button */}
              <div className="sm:hidden w-full flex justify-center">
                 <Link
                  to={ctaHref}
                  className="inline-flex w-[85%] max-w-[320px] items-center justify-center rounded-xl bg-[rgba(134,255,186,1)] px-6 py-4 text-black shadow-[0_14px_24px_rgba(16,185,129,0.20)] ring-1 ring-black/10 transition hover:bg-[rgba(90,200,150,1)]"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '0.5px',
                    textAlign: 'center',
                    verticalAlign: 'middle'
                  }}
                >
                  PREREGISTREER HIER
                </Link>
              </div>

              {finalStats.map((s, idx) => (
                <motion.div
                  key={idx}
                  variants={item}
                  whileHover={reduce ? undefined : { y: -4 }}
                  className="relative grid grid-cols-[45%_55%] items-center gap-4 sm:block sm:text-center transform-gpu"
                >
                  <div 
                    className="text-black text-center sm:text-center"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(26px, 8vw, 62px)',
                      lineHeight: '1.1',
                      letterSpacing: '0%',
                      verticalAlign: 'middle'
                    }}
                  >
                    {s.value}
                  </div>

                  <div className="hidden sm:block mx-auto mt-2 h-[5px] w-20" style={{ backgroundColor: 'rgba(87, 146, 213, 1)' }} />

                  <div className="relative w-fit sm:w-full">
                    <p 
                      className="whitespace-pre-line text-black text-left sm:mx-auto sm:mt-4 sm:text-center"
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 400,
                        fontSize: 'clamp(9px, 3vw, 16px)',
                        lineHeight: '1.4',
                        letterSpacing: '0%',
                        verticalAlign: 'middle'
                      }}
                    >
                      {s.label}
                    </p>
                    
                    {/* Mobile Sparkles for the first item (10 min) */}
                    {idx === 0 && (
                      <div className="absolute left-[90px] top-[40px] -translate-y-1/2 ml-2 sm:hidden pointer-events-none">
                         <img 
                           src="/landingpage/big-star.svg" 
                           alt="" 
                           className="w-[50px] h-[50px] max-w-none opacity-90"
                         />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* White area text + CTA (must also be BASE, not pure white) */}
        <motion.div
          className="hidden sm:block mx-auto mt-10 max-w-[760px] bg-[#FFFCFA] px-5 text-center sm:mt-20"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.p
            variants={item}
            className="whitespace-pre-line text-black md:text-[32px]"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(20px, 6vw, 32px)',
              lineHeight: '28.8px',
              letterSpacing: '-1.6px',
              textAlign: 'center',
              verticalAlign: 'middle'
            }}
          >
            {finalHeadline}
          </motion.p>

          <motion.div variants={item} className="mt-7">
            <motion.div
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="inline-block transform-gpu"
            >
              <Link
                to={ctaHref}
                className="inline-flex items-center justify-center rounded-xl bg-[rgba(134,255,186,1)] px-10 py-4 text-black shadow-[0_14px_24px_rgba(16,185,129,0.20)] ring-1 ring-black/10 transition hover:bg-[rgba(90,200,150,1)] sm:px-12"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(14px, 4.5vw, 18px)',
                  lineHeight: '100%',
                  letterSpacing: '0.5px',
                  textAlign: 'center',
                  verticalAlign: 'middle'
                }}
              >
                {finalCtaLabel}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
