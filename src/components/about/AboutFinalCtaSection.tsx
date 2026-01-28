import React from "react";
import { Link } from "react-router-dom";
import { FaRocket, FaStar } from "react-icons/fa";
import { FiArrowDownRight } from "react-icons/fi";
// import { useTranslation } from "react-i18next"; // Commented out - using Dutch as default
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";

function Sparkle({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
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
      transition={
        reduce ? { duration: 0 } : { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay }
      }
    >
      <FaStar className="h-full w-full text-white" />
    </motion.span>
  );
}

function DoodleArrow({ className }: { className?: string }) {
  return (
    <FiArrowDownRight
      className={["text-black", className].filter(Boolean).join(" ")}
      aria-hidden="true"
    />
  );
}

function Rocket({ className }: { className?: string }) {
  return (
    <FaRocket
      className={["text-[#FFD43B] drop-shadow-[0_18px_40px_rgba(0,0,0,0.12)]", className]
        .filter(Boolean)
        .join(" ")}
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
    <section className="relative px-4 pb-10 pt-10 sm:pt-12">
      <motion.div
        ref={ref}
        className="mx-auto flex max-w-[1040px] justify-center"
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {/* Orange blob container */}
        <motion.div
          variants={item}
          className="relative w-full max-w-[560px]"
          whileHover={reduce ? undefined : { y: -2 }}
        >
          {/* floating blob shadow/backplate for “organic” depth */}
          <motion.div
            className="pointer-events-none absolute -inset-2 rounded-[44px] opacity-[0.18]"
            style={{ background: "#000" }}
            aria-hidden="true"
            initial={false}
            animate={reduce ? undefined : { y: [0, 6, 0], scale: [1, 1.01, 1] }}
            transition={reduce ? { duration: 0 } : { duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="
              relative overflow-hidden rounded-[40px]
              px-7 py-10 sm:px-10 sm:py-12
              shadow-[0_22px_60px_rgba(0,0,0,0.10)]
              ring-1 ring-black/10
            "
            style={{ background: "#FF855C" }}
          >
            {/* subtle highlight */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.35]"
              style={{
                background:
                  "radial-gradient(closest-side at 35% 20%, rgba(255,255,255,0.35), rgba(255,255,255,0))",
              }}
              aria-hidden="true"
            />

            {/* sparkles */}
            <Sparkle className="pointer-events-none absolute right-8 top-8 h-5 w-5 opacity-90" delay={0.0} />
            <Sparkle className="pointer-events-none absolute right-14 top-24 h-4 w-4 opacity-85" delay={0.4} />
            <Sparkle className="pointer-events-none absolute left-16 top-20 h-4 w-4 opacity-85" delay={0.8} />

            {/* rocket left (responsive positioning) */}
            <motion.div
              className="pointer-events-none absolute -left-8 top-10 sm:-left-10 sm:top-12"
              aria-hidden="true"
              initial={false}
              animate={reduce ? undefined : { y: [0, -6, 0], rotate: [0, -2, 0] }}
              transition={reduce ? { duration: 0 } : { duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Rocket className="h-[80px] w-[62px] sm:h-[92px] sm:w-[70px]" />
            </motion.div>

            <motion.div variants={container} initial="hidden" animate={inView ? "show" : "hidden"}>
              <motion.h3
                variants={item}
                className="text-[18px] sm:text-[20px] lg:text-[22px] font-black tracking-tight text-black"
              >
                Ga mee op reis!
              </motion.h3>

              <motion.p
                variants={item}
                className="mt-3 text-[11px] sm:text-[12px] lg:text-[13px] font-medium leading-6 text-black/80"
              >
                Wij nodigen je uit om Luumilo te ontdekken, de activiteiten uit te proberen, de voortgang van je kind te volgen en te genieten van de leerzame en grappige momentjes die je onderweg tegenkomt.
              </motion.p>

              <motion.p
                variants={item}
                className="mt-5 text-[11px] sm:text-[12px] lg:text-[13px] font-extrabold leading-6 text-black/85"
              >
                Laten we samen een betere toekomst bouwen, één dag, één missie tegelijk.
              </motion.p>

              <motion.div variants={item} className="mt-7 flex justify-center">
                <motion.div
                  whileHover={reduce ? undefined : { y: -2 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                  className="inline-block transform-gpu"
                >
                  <Link
                    to="/preregistreer"
                    className="
                      inline-flex items-center justify-center rounded-xl
                      bg-[rgba(134,255,186,1)] px-10 sm:px-12 py-3
                      text-[11px] font-black tracking-wide text-black
                      shadow-[0_14px_24px_rgba(16,185,129,0.20)]
                      ring-1 ring-black/10 transition hover:bg-[rgba(90,200,150,1)]
                    "
                  >
                    PREREGISTREER HIER
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* doodle arrow on right (hide on small screens so it doesn’t collide) */}
            <DoodleArrow className="pointer-events-none absolute right-5 top-20 hidden sm:block h-20 w-24 opacity-95" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
