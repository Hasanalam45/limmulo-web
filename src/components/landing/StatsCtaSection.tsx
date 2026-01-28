import React from "react";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next"; // Commented out - using Dutch as default
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";

type Stat = {
  value: string;
  label: string;
};

type Props = {
  stats?: Stat[];
  headline?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function StatsCtaSection({
  stats,
  headline,
  ctaHref = "/preregistreer",
  ctaLabel,
}: Props) {
  // const { t } = useTranslation(); // Commented out - using Dutch as default
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.35, once: true });

  const finalHeadline = headline || "90% van het brein ontwikkelt vóór jaar 7.\nKleine momentjes, grote impact.";
  const finalCtaLabel = ctaLabel || "PREREGISTREER HIER";
  const data: Stat[] =
    stats ?? [
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
    <section className="relative mt-10 px-4 sm:px-6">
      <motion.div
        ref={ref}
        className="mx-auto max-w-[1100px] overflow-hidden rounded-[24px] bg-white shadow-[0_22px_55px_rgba(0,0,0,0.08)] ring-1 ring-black/5"
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {/* Gradient stats strip */}
        <div className="relative px-6 py-12 sm:px-10 sm:py-14">
          {/* Animated gradient layer */}
          <motion.div
            className="absolute inset-0 transform-gpu"
            style={{
              background:
                "linear-gradient(90deg, rgba(251,158,190,0.95) 0%, rgba(251,158,190,0.75) 18%, rgba(251,191,85,0.75) 60%, rgba(255,243,225,0.95) 100%)",
            }}
            aria-hidden="true"
            initial={false}
            animate={
              reduce
                ? undefined
                : { scale: [1, 1.03, 1], x: [0, -16, 0], y: [0, 10, 0] }
            }
            transition={reduce ? { duration: 0 } : { duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Soft depth overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              background: "radial-gradient(closest-side, rgba(255,255,255,0.35), rgba(255,255,255,0))",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="grid gap-10 text-center md:grid-cols-3">
              {data.map((s, idx) => (
                <motion.div
                  key={`${s.value}-${idx}`}
                  variants={item}
                  whileHover={reduce ? undefined : { y: -4 }}
                  className="space-y-3 transform-gpu"
                >
                  <div className="text-[34px] sm:text-[40px] lg:text-[48px] font-black tracking-tight text-black">
                    {s.value}
                  </div>

                  <div className="mx-auto h-[3px] w-12 rounded-full bg-sky-400" />

                  <p className="mx-auto max-w-[260px] whitespace-pre-line text-[11px] sm:text-[12px] font-medium leading-5 text-black/70">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* White area with headline + button */}
        <div className="bg-white px-6 py-12 sm:px-10 sm:py-14">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h3
              variants={item}
              className="
                whitespace-pre-line text-black font-black tracking-tight
                text-[18px] sm:text-[20px] lg:text-[26px] xl:text-[28px]
                leading-[1.25]
              "
            >
              {finalHeadline}
            </motion.h3>

            <motion.div variants={item} className="mt-8">
              <motion.div whileHover={reduce ? undefined : { y: -2 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
                <Link
                  to={ctaHref}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-[rgba(134,255,186,1)] px-10 sm:px-12 py-3 text-[11px] font-black tracking-wide text-black shadow-[0_14px_24px_rgba(16,185,129,0.20)] ring-1 ring-black/10 transition hover:bg-[rgba(90,200,150,1)]"
                >
                  {finalCtaLabel}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
