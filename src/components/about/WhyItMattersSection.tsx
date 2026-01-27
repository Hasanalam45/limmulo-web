import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";

function Sparkle({ className, delay = 0 }: { className?: string; delay?: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      className={className}
      aria-hidden="true"
      initial={false}
      animate={
        reduce
          ? { opacity: 0.9 }
          : { opacity: [0.55, 0.95, 0.6], scale: [0.92, 1.06, 0.94], rotate: [0, 10, 0] }
      }
      transition={reduce ? { duration: 0 } : { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <FaStar className="h-full w-full text-white" />
    </motion.span>
  );
}

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
  const { t } = useTranslation();
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
    <section ref={ref} className="relative bg-[#FFFCFA] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1040px] px-4 sm:px-6">
        <motion.div
          className="flex justify-center"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.div variants={item} className="relative w-full max-w-[560px]">
            {/* Blob wrapper */}
            <div className="relative">
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
                  className="h-full w-full object-contain"
                  aria-hidden="true"
                />
              </motion.div>

              {/* content */}
              <div
                className="
                  relative z-10 text-center
                  px-7 py-12
                  sm:px-10 sm:py-14
                  lg:px-12 lg:py-16
                "
              >
                {/* sparkles */}
                <Sparkle className="pointer-events-none absolute right-12 top-10 h-4 w-4 opacity-90" delay={0.0} />
                <Sparkle className="pointer-events-none absolute right-16 top-16 h-3.5 w-3.5 opacity-85" delay={0.4} />
                <Sparkle className="pointer-events-none absolute left-16 top-20 h-3.5 w-3.5 opacity-85" delay={0.8} />

                {/* rocket left (animated) */}
                <motion.div
                  className="pointer-events-none absolute -left-12 sm:-left-10 top-14 sm:top-16"
                  initial={false}
                  animate={
                    reduce
                      ? undefined
                      : { y: [0, -8, 0], rotate: [0, -3, 0] }
                  }
                  transition={reduce ? { duration: 0 } : { duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Rocket className="h-[96px] w-[78px] sm:h-[108px] sm:w-[86px]" />
                </motion.div>

                <motion.h3
                  variants={item}
                  className="text-black font-black tracking-tight text-[18px] sm:text-[20px] lg:text-[22px]"
                >
                  {t('about.finalCta.title')}
                </motion.h3>

                <motion.p
                  variants={item}
                  className="
                    mx-auto mt-3 max-w-[420px]
                    text-black/80 font-medium
                    text-[11px] sm:text-[12px] lg:text-[13px]
                    leading-6 sm:leading-6 lg:leading-7
                  "
                >
                  {t('about.finalCta.p1')}
                </motion.p>

                <motion.p
                  variants={item}
                  className="
                    mx-auto mt-5 max-w-[420px]
                    text-black/85 font-extrabold
                    text-[11px] sm:text-[12px] lg:text-[13px]
                    leading-6 sm:leading-6 lg:leading-7
                  "
                  dangerouslySetInnerHTML={{ __html: t('about.finalCta.p2') }}
                />

                <motion.div variants={item} className="mt-6 flex justify-center">
                  <motion.div
                    whileHover={reduce ? undefined : { y: -2 }}
                    whileTap={reduce ? undefined : { scale: 0.98 }}
                    className="inline-block transform-gpu"
                  >
                    <Link
                      to="/preregistreer"
                      className="inline-flex items-center justify-center rounded-xl bg-emerald-200 px-10 sm:px-12 py-3 text-[11px] font-black tracking-wide text-black shadow-[0_14px_24px_rgba(16,185,129,0.20)] ring-1 ring-black/10 transition hover:bg-emerald-300"
                    >
                      {t('about.finalCta.cta')}
                    </Link>
                  </motion.div>
                </motion.div>

                {/* doodle arrow inside blob (animated) */}
                <motion.div
                  className="pointer-events-none absolute -right-6 sm:right-20 top-[230px] sm:top-[200px]"
                  initial={false}
                  animate={reduce ? undefined : { y: [0, -6, 0] }}
                  transition={reduce ? { duration: 0 } : { duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <DoodleArrow className="h-20 w-20 opacity-95" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
