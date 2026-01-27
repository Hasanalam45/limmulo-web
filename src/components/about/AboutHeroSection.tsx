import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion, type Variants } from "framer-motion";

function Sparkle({ className, delay = 0 }: { className?: string; delay?: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      className={className}
      aria-hidden="true"
      initial={false}
      animate={
        reduce
          ? { opacity: 0.85 }
          : { opacity: [0.55, 0.95, 0.6], scale: [0.92, 1.06, 0.95], rotate: [0, 10, 0] }
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
      src="/landingpage/aboutPage/about-arrow.svg"
      alt=""
      className={className}
      aria-hidden="true"
    />
  );
}

export default function AboutHeroSection() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: reduce ? { duration: 0 } : { staggerChildren: 0.08, delayChildren: 0.06 },
    },
  };

  const item: Variants = {
    hidden: reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 18, scale: 0.99 },
    show: reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-[1040px]">
        {/* ✅ ORANGE BLOB: centered */}
        <motion.div
          className="
            pointer-events-none absolute
            left-[10%] -translate-x-1/2
            top-4
            opacity-95
            w-[min(85vw,650px)]
            transform-gpu
          "
          style={{ aspectRatio: '812/575' }}
          initial={false}
          animate={reduce ? undefined : { y: [0, -10, 0], scale: [1, 1.02, 1], rotate: [0, 0.5, 0] }}
          transition={reduce ? { duration: 0 } : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            src="/landingpage/aboutPage/orange-blob.svg" 
            alt="" 
            className="h-full w-full "
            aria-hidden="true"
          />
        </motion.div>

        {/* ✅ Sparkles: keep them near the blob/text side */}
        <Sparkle className="pointer-events-none absolute left-[10%] top-[10%] h-5 w-5" delay={0.0} />
        <Sparkle className="pointer-events-none absolute left-[14%] top-[16%] h-4 w-4" delay={0.35} />
        <Sparkle className="pointer-events-none absolute left-[58%] top-[60%] h-5 w-5 hidden sm:block" delay={0.2} />
        <Sparkle className="pointer-events-none absolute left-[62%] top-[66%] h-4 w-4 hidden sm:block" delay={0.55} />

        {/* Content */}
        <motion.div
          className="relative z-10 px-4 pt-10 sm:px-6 sm:pt-12 lg:pt-16"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="mx-auto max-w-[680px] text-left">
            <motion.h1
              variants={item}
              className="font-black tracking-tight text-black leading-[0.95] text-[40px] xs:text-[46px] sm:text-[58px] lg:text-[64px]"
            >
              {t('about.hero.title')}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-[600px] text-black/75 font-medium text-[12px] sm:text-[13px] lg:text-[14px] leading-6 sm:leading-7"
            >
              {t('about.hero.p1')}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-4 sm:mt-5 max-w-[600px] text-black/75 font-medium text-[12px] sm:text-[13px] lg:text-[14px] leading-6 sm:leading-7"
            >
              {t('about.hero.p2')}
            </motion.p>

            <motion.div variants={item} className="mt-7">
              <motion.div
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                className="inline-block transform-gpu"
              >
                <Link
                  to="/preregistreer"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-200 px-10 py-3 text-[11px] font-black tracking-wide text-black shadow-[0_14px_24px_rgba(16,185,129,0.20)] ring-1 ring-black/10 transition hover:bg-emerald-300"
                >
                  {t('about.hero.cta')}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Doodle arrow (right side) */}
        <motion.div
          className="pointer-events-none absolute right-[6%] top-[60%] hidden sm:block"
          initial={false}
          animate={reduce ? undefined : { y: [0, -6, 0] }}
          transition={reduce ? { duration: 0 } : { duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <DoodleArrow className="h-16 w-52 opacity-95" />
        </motion.div>

        <div className="h-20 sm:h-24 lg:h-28" />
      </div>
    </section>
  );
}
