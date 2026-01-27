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
    <section className="relative overflow-hidden pb-0">
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
        <div className="-mt-14 pt-20 sm:-mt-20 flex flex-wrap items-end justify-center gap-7 sm:gap-10">
          <motion.div
            initial={false}
            animate={reduce ? undefined : { y: [0, -10, 0], rotate: [0, -0.6, 0] }}
            transition={reduce ? { duration: 0 } : { duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={reduce ? undefined : { y: -6, scale: 1.01 }}
            className="transform-gpu"
          >
            <PhoneMock src={phoneData[0].src} alt={phoneData[0].alt} className="translate-y-4" />
          </motion.div>

          <motion.div
            initial={false}
            animate={reduce ? undefined : { y: [0, -12, 0], rotate: [0, 0.4, 0] }}
            transition={reduce ? { duration: 0 } : { duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
            whileHover={reduce ? undefined : { y: -8, scale: 1.015 }}
            className="transform-gpu"
          >
            <PhoneMock src={phoneData[1].src} alt={phoneData[1].alt} className="" />
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
          className="mt-8 sm:mt-10 grid gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h2
            variants={item}
            className="
              font-black leading-[0.95] tracking-tight text-black
              text-[34px] xs:text-[40px] sm:text-[46px] md:text-[52px]
            "
          >
            Hoe het werkt
          </motion.h2>

          <div className="space-y-6 sm:space-y-7">
            <motion.div
              variants={item}
              whileHover={reduce ? undefined : { y: -2 }}
              className="flex items-center gap-3 sm:gap-4 transform-gpu"
            >
                <img 
                  src="/landingpage/learning.svg" 
                  alt="" 
                  className="h-16 w-16 sm:h-20 sm:w-20"
                  aria-hidden="true"
                />

              <div>
                <p className="font-extrabold text-black text-[14px] sm:text-[15px] md:text-[16px] leading-[1.15]">
                  7 leergebieden
                </p>
                <p className="mt-1 text-black/60 text-[12px] sm:text-[13px] md:text-[14px] leading-5">
                  van emotionele gezondheid tot ondernemerschap
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={reduce ? undefined : { y: -2 }}
              className="flex items-center gap-3 sm:gap-4 transform-gpu"
            >
                <img 
                  src="/landingpage/time.svg" 
                  alt="" 
                  className="h-16 w-16 sm:h-20 sm:w-20"
                  aria-hidden="true"
                />
              <div>
                <p className="font-extrabold text-black text-[14px] sm:text-[15px] md:text-[16px] leading-[1.15]">
                  5 – 15 minuten per dag
                </p>
                <p className="mt-1 text-black/60 text-[12px] sm:text-[13px] md:text-[14px] leading-5">
                  past altijd in jullie dagritme
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={reduce ? undefined : { y: -2 }}
              className="flex items-center gap-3 sm:gap-4 transform-gpu"
            >
                <img 
                  src="/landingpage/screen.svg" 
                  alt="" 

                  className="h-16 w-16 sm:h-20 sm:w-20"
                  aria-hidden="true"
                />
              <div>
                <p className="font-extrabold text-black text-[14px] sm:text-[15px] md:text-[16px] leading-[1.15]">
                  geen scherm
                </p>
                <p className="mt-1 text-black/60 text-[12px] sm:text-[13px] md:text-[14px] leading-5">
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
