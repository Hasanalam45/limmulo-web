import React from "react";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next"; // Commented out - using Dutch as default
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";

function DoodleArrow({ className }: { className?: string }) {
  return (
    <img
      src="/landingpage/aboutPage/down-arrow.svg"
      alt=""
      className={className}
      aria-hidden="true"
    />
  );
}

function Rocket({ className }: { className?: string }) {
  return (
    <img
      src="/landingpage/aboutPage/space.svg"
      alt=""
      className={className}
      aria-hidden="true"
    />
  );
}

export default function AboutFinalCtaSection() {
  // const { t } = useTranslation(); // Commented out - using Dutch as default
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.35, once: true });

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
    <section ref={ref} className="relative bg-transparent sm:bg-[#FFFCFA] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1040px] px-4 sm:px-6">
        <motion.div
          className="flex justify-center"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.div variants={item} className="relative w-full max-w-[560px]">
            {/* Blob wrapper */}
            <div className="relative min-h-[650px] sm:min-h-0">
              {/* ✅ Organic orange blob (animated) */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                aria-hidden="true"
                initial={false}
                animate={
                  reduce
                    ? undefined
                    : {
                        y: [0, -8, 0],
                        scale: [1, 1.01, 1],
                      }
                }
                transition={reduce ? { duration: 0 } : { duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src="/landingpage/aboutPage/orange-blob-preregister.svg"
                  alt=""
                  className="h-full w-full object-contain scale-[3] sm:scale-100"
                  aria-hidden="true"
                />
              </motion.div>

              {/* content */}
              <div
                className="
                  relative z-10 text-center
                  px-6 py-10
                  sm:px-8 sm:py-12
                  md:px-10 md:py-14
                  lg:px-12 lg:py-16
                "
              >
                {/* sparkles */}
                <motion.span
                  className="pointer-events-none absolute right-4 top-4 h-[40px] w-[40px] sm:right-6 sm:top-20 sm:h-[50px] sm:w-[50px]"
                  aria-hidden="true"
                  initial={false}
                  animate={
                    reduce
                      ? { opacity: 0.85 }
                      : { opacity: [0.55, 0.95, 0.6], scale: [0.92, 1.06, 0.94], rotate: [0, 10, 0] }
                  }
                  transition={reduce ? { duration: 0 } : { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                >
                  <img src="/landingpage/big-star.svg" alt="" className="h-full w-full" />
                </motion.span>

                {/* rocket centered top (animated) - mobile only */}
                <motion.div
                  className="pointer-events-none absolute left-[60px] -translate-x-1/2 -top-[100px] sm:-left-4 md:-left-[20px] sm:top-12 md:top-[70px] sm:translate-x-0"
                  initial={false}
                  animate={
                    reduce
                      ? undefined
                      : { y: [0, -8, 0], rotate: [0, -3, 0] }
                  }
                  transition={reduce ? { duration: 0 } : { duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Rocket className="h-[250px] w-[200px] sm:h-[120px] sm:w-[70px] md:h-[180px] md:w-[80px] lg:h-[230px] lg:w-[100px]" />
                </motion.div>

                <motion.h3
                  variants={item}
                  className="text-center text-black mt-[130px] sm:text-left sm:ml-10 sm:mt-0"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(18px, 5vw, 32px)',
                    lineHeight: 'clamp(24px, 7vw, 44.8px)',
                    letterSpacing: '0%',
                    verticalAlign: 'middle'
                  }}
                >
                  Ga mee op reis!
                </motion.h3>

                <motion.p
                  variants={item}
                  className="text-center mt-4 max-w-full mx-auto sm:text-left sm:mt-1 sm:max-w-[420px] sm:ml-10"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(12px, 3.5vw, 16px)',
                    lineHeight: 'clamp(24px, 5vw, 28.8px)',
                    letterSpacing: '0%',
                    verticalAlign: 'middle'
                  }}
                >
                  Wij nodigen je uit om Luumilo te ontdekken, de activiteiten uit te proberen, de voortgang van je kind te volgen en te genieten van de leerzame en grappige momentjes die je onderweg tegenkomt.
                </motion.p>

                <motion.p
                  variants={item}
                  className="text-center mt-4 max-w-full mx-auto sm:text-left sm:mt-5 sm:max-w-[420px] sm:ml-10"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(12px, 3.5vw, 16px)',
                    lineHeight: 'clamp(24px, 5vw, 28.8px)',
                    letterSpacing: '0%',
                    verticalAlign: 'middle'
                  }}
                  dangerouslySetInnerHTML={{ __html: "Laten we samen een betere toekomst bouwen,<br /> één dag, één missie tegelijk." }}
                />

                <motion.div variants={item} className="mt-5 sm:mt-6 flex justify-center">
                  <motion.div
                    whileHover={reduce ? undefined : { y: -2 }}
                    whileTap={reduce ? undefined : { scale: 0.98 }}
                    className="inline-block transform-gpu w-full max-w-[350px]"
                  >
                    <Link
                      to="/preregistreer"
                      className="inline-flex items-center justify-center w-full rounded-xl bg-[rgba(134,255,186,1)] px-8 py-2.5 sm:px-10 sm:py-4 md:px-12 text-black shadow-[0_14px_24px_rgba(16,185,129,0.20)] ring-1 ring-black/10 transition hover:bg-[rgba(90,200,150,1)]"
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 700,
                        fontSize: 'clamp(14px, 4.5vw, 18px)',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        textAlign: 'center',
                        verticalAlign: 'middle'
                      }}
                    >
                      PREREGISTREER HIER
                    </Link>
                  </motion.div>
                </motion.div>

                {/* doodle arrow inside blob (animated) */}
                <motion.div
                  className="pointer-events-none absolute -right-2 sm:-right-2 md:right-4 lg:right-2 top-[410px] sm:top-[200px] md:top-[220px] lg:top-[230px]"
                  initial={false}
                  animate={reduce ? undefined : { y: [0, -6, 0] }}
                  transition={reduce ? { duration: 0 } : { duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <DoodleArrow className="h-16 w-16 sm:h-[72px] sm:w-[72px] md:h-24 md:w-24 opacity-95" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
