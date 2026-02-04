// import React from "react";
// import { useTranslation } from "react-i18next"; // Commented out - using Dutch as default
import PhoneMock from "./PhoneMock";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type HowItWorksPhone = {
  src: string;
  alt: string;
};

type Props = {
  phones?: HowItWorksPhone[];
};

// function IconCircle({ bg, children }: { bg: string; children: React.ReactNode }) {
//   return (
//     <span
//       className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full shadow-[0_14px_28px_rgba(0,0,0,0.10)] ring-1 ring-black/5 shrink-0"
//       style={{ background: bg }}
//       aria-hidden="true"
//     >
//       {children}
//     </span>
//   );
// }

export default function HowItWorksSection({ phones }: Props) {
  // const { t } = useTranslation(); // Commented out - using Dutch as default
  const reduce = useReducedMotion();

  const phoneData: HowItWorksPhone[] = phones ?? [
    { src: "/assets/howitworks/phone-1.png", alt: "App screen 1" },
    { src: "/assets/howitworks/phone-2.png", alt: "App screen 2" },
    { src: "/assets/howitworks/phone-3.png", alt: "App screen 3" },
  ];

  const container: Variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: reduce ? { duration: 0 } : { staggerChildren: 0.07, delayChildren: 0.06 },
    },
  };

  const item: Variants = {
    hidden: reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.99 },
    show: reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="relative overflow-hidden pb-10">
      {/* ✅ Wave removed — replaced by a subtle premium glow */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-6 z-0 h-[320px] w-[min(92vw,860px)] -translate-x-1/2 rounded-[999px] blur-[40px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(182,138,214,0.22), rgba(255,255,255,0))",
        }}
        initial={false}
        animate={
          reduce
            ? undefined
            : {
                opacity: [0.55, 0.85, 0.6],
                scale: [1, 1.03, 1],
                y: [0, -8, 0],
              }
        }
        transition={reduce ? { duration: 0 } : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[999px] px-4 sm:px-6">
        {/* Phones row (premium float + hover lift) */}
        <div className="-mt-14 pt-20 sm:-mt-20 hidden md:flex flex-wrap items-end justify-center gap-7 sm:gap-10">
          <motion.div
            initial={false}
            animate={reduce ? undefined : { y: [0, -10, 0], rotate: [0, -0.6, 0] }}
            transition={reduce ? { duration: 0 } : { duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={reduce ? undefined : { y: -6, scale: 1.01 }}
            className="transform-gpu"
          >
            <PhoneMock src={phoneData[1].src} alt={phoneData[1].alt} className="translate-y-4" />
          </motion.div>

          <motion.div
            initial={false}
            animate={reduce ? undefined : { y: [0, -12, 0], rotate: [0, 0.4, 0] }}
            transition={reduce ? { duration: 0 } : { duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
            whileHover={reduce ? undefined : { y: -8, scale: 1.015 }}
            className="transform-gpu"
          >
            <PhoneMock src={phoneData[0].src} alt={phoneData[0].alt} className="translate-y-4" />
          </motion.div>

          <motion.div
            initial={false}
            animate={reduce ? undefined : { y: [0, -10, 0], rotate: [0, 0.6, 0] }}
            transition={reduce ? { duration: 0 } : { duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={reduce ? undefined : { y: -6, scale: 1.01 }}
            className="transform-gpu"
          >
            <PhoneMock src={phoneData[2].src} alt={phoneData[2].alt} className="translate-y-4" />
          </motion.div>
        </div>

        {/* Text row (stagger like Hero) */}
        <motion.div
          className="mt-8 sm:mt-16 grid gap-0 sm:gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start px-0 lg:px-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h2
            variants={item}
            className="text-black mb-10 text-center lg:text-left"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(32px, 8vw, 62px)',
              lineHeight: '1.1',
              letterSpacing: '-1.5px',
              verticalAlign: 'middle'
            }}
          >
            Hoe het <br className="hidden lg:block" />werkt
          </motion.h2>

          <div className="space-y-6 sm:space-y-7">
            <motion.div
              variants={item}
              whileHover={reduce ? undefined : { y: -2 }}
              className="flex flex-col lg:flex-row items-center gap-3 sm:gap-4 transform-gpu text-center lg:text-left"
            >
                <img 
                  src="/landingpage/learning.svg" 
                  alt="" 
                  className="h-24 w-24 sm:h-24 sm:w-24"
                  aria-hidden="true"
                />

              <div style={{ minWidth: 0, overflow: 'visible' }}>
                <p 
                  className="text-black"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(22px, 5vw, 24px)',
                    lineHeight: '28px',
                    letterSpacing: '-1px',
                    verticalAlign: 'middle'
                  }}
                >
                  7 leergebieden
                </p>
                <p 
                  className="mt-1 text-black md:whitespace-nowrap"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(16px, 4vw, 18px)',
                    lineHeight: '28.8px',
                    letterSpacing: '0%',
                    verticalAlign: 'middle'
                  }}
                >
                  van emotionele gezondheid tot ondernemerschap
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={reduce ? undefined : { y: -2 }}
              className="flex flex-col lg:flex-row items-center gap-3 sm:gap-4 transform-gpu text-center lg:text-left"
            >
                <img 
                  src="/landingpage/time.svg" 
                  alt="" 
                  className="h-24 w-24 sm:h-24 sm:w-24"
                  aria-hidden="true"
                />
              <div>
                <p 
                  className="text-black"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(22px, 5vw, 24px)',
                    lineHeight: '28px',
                    letterSpacing: '-1px',
                    verticalAlign: 'middle'
                  }}
                >
                  5 – 15 minuten per dag
                </p>
                <p 
                  className="mt-1 text-black"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(16px, 4vw, 18px)',
                    lineHeight: '28.8px',
                    letterSpacing: '0%',
                    verticalAlign: 'middle'
                  }}
                >
                  past altijd in jullie dagritme
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={reduce ? undefined : { y: -2 }}
              className="flex flex-col lg:flex-row items-center gap-3 sm:gap-4 transform-gpu text-center lg:text-left"
            >
                <img 
                  src="/landingpage/screen.svg" 
                  alt="" 

                  className="h-24 w-24 sm:h-24 sm:w-24"
                  aria-hidden="true"
                />
              <div>
                <p 
                  className="text-black"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(22px, 5vw, 24px)',
                    lineHeight: '28px',
                    letterSpacing: '-1px',
                    verticalAlign: 'middle'
                  }}
                >
                  geen scherm
                </p>
                <p 
                  className="mt-1 text-black"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(16px, 4vw, 18px)',
                    lineHeight: '28.8px',
                    letterSpacing: '0%',
                    verticalAlign: 'middle'
                  }}
                >
                  samen spelen, samen groeien
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
