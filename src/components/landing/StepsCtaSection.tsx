import React from "react";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next"; // Commented out - using Dutch as default
import {
  motion,
  useReducedMotion,
  useInView,
  type Variants,
} from "framer-motion";

type StepItem = {
  number: 1 | 2 | 3;
  title: string;
  description: string;
};

type Props = {
  steps?: StepItem[];
  ctaHref?: string;
  ctaLabel?: string;
};

export function Dots() {
  return (
    <div className="mt-5 flex items-center justify-center gap-2" aria-label="carousel indicators">
      <span className="h-1 w-1 rounded-full border border-black/40 bg-transparent" />
      <span className="h-1 w-1 rounded-full bg-black/25" />
      <span className="h-1 w-1 rounded-full bg-black/25" />
      <span className="h-1 w-1 rounded-full bg-black/25" />
      <span className="h-1 w-1 rounded-full bg-black/25" />
      <span className="h-1 w-1 rounded-full bg-black/25" />
      <span className="h-1 w-1 rounded-full bg-black/25" />
      <span className="h-1 w-1 rounded-full bg-black/25" />
      <span className="h-1 w-1 rounded-full bg-black/25" />
    </div>
  );
}

function StepCard({
  item,
  variants,
  reduce,
}: {
  item: StepItem;
  variants: Variants;
  reduce: boolean;
}) {
  return (
    <motion.div
      variants={variants}
      whileHover={reduce ? undefined : { y: -6, scale: 1.01 }}
      className="rounded-[18px] mt-[120px] bg-white px-4 py-8 shadow-[0_18px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/5 transform-gpu"
    >
      <div className="text-center">
        {item.number === 1 ? (
          <div className="flex justify-center">
            <img 
              src="/landingpage/number-one.svg" 
              alt="1" 
              className="h-[45px] w-[50px]"
            />
          </div>
        ) : item.number === 2 ? (
          <div className="flex justify-center">
            <img 
              src="/landingpage/number-two.svg" 
              alt="2" 
              className="h-[45px] w-[50px]"
            />
          </div>
        ) : (
          <div className="flex justify-center">
            <img 
              src="/landingpage/number-three.svg" 
              alt="3" 
              className="h-[45px] w-[50px]"
            />
          </div>
        )}

        <div className="mt-3 text-[12px] font-extrabold leading-[1.15] text-black">
          {item.title.split("\n").map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>

        <p className="mx-auto mt-4 max-w-[210px] text-[11px] leading-5 text-black">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function StepsCtaSection({
  steps,
  ctaHref = "/preregistreer",
  ctaLabel,
}: Props) {
  // const { t } = useTranslation(); // Commented out - using Dutch as default
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.35, once: true });

  const data: StepItem[] =
    steps ?? [
      {
        number: 1,
        title: "Speel, leer\nen groei",
        description: "Korte, speelse activiteiten die bouwen aan de fundering van je kind - thuis, met aandacht en intentie.",
      },
      {
        number: 2,
        title: "Versterk de band\nmet je kind",
        description: "Creëer momenten van verbinding, plezier en groei. Samen ontdekken, lachen en leren.",
      },
      {
        number: 3,
        title: "Groei op 3 vlakken:\nhoofd, hart en handen",
        description: "Elke activiteit versterkt emotionele, praktische en sociale vaardigheden, volg jullie voortgang!",
      },
    ];
  
  const finalCtaLabel = ctaLabel || "PREREGISTREER HIER";

  const container: Variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: reduce ? { duration: 0 } : { staggerChildren: 0.08, delayChildren: 0.06 },
    },
  };

  const cardItem: Variants = {
    hidden: reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 18, scale: 0.99 },
    show: reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 },
  };

  const fadeUp: Variants = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
    show: reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full">
      {/* ✅ Wave removed — subtle premium glow instead */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-6 z-0 h-[340px] w-full max-w-[100vw] -translate-x-1/2 rounded-[999px] blur-[44px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(246,167,58,0.18), rgba(255,255,255,0))",
        }}
        initial={false}
        animate={
          reduce
            ? undefined
            : { opacity: [0.55, 0.85, 0.6], scale: [1, 1.03, 1], y: [0, -10, 0] }
        }
        transition={reduce ? { duration: 0 } : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <div ref={ref} className="relative z-10 mx-auto max-w-[999px] px-4 sm:px-6">
        {/* Cards row */}
        <motion.div
          className="mx-auto grid max-w-[620px] grid-cols-1 gap-5 md:grid-cols-3 md:gap-4"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {data.map((s) => (
            <StepCard key={s.number} item={s} variants={cardItem} reduce={!!reduce} />
          ))}
        </motion.div>

        {/* Button + big star */}
        <motion.div
          className="relative mt-10 flex justify-center"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.div whileHover={reduce ? undefined : { y: -2 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
            <Link
              to={ctaHref}
              className="inline-flex items-center justify-center rounded-xl bg-[rgba(134,255,186,1)] px-12 py-3 text-[11px] font-black tracking-wide text-black shadow-[0_14px_24px_rgba(16,185,129,0.20)] ring-1 ring-black/10 transition hover:bg-[rgba(90,200,150,1)]"
            >
              {finalCtaLabel}
            </Link>
          </motion.div>

          <motion.img
            src="/landingpage/big-star.svg"
            alt=""
            className="pointer-events-none absolute left-[600px] -top-[16px] -translate-y-1/2 translate-x-[160px] sm:translate-x-[180px]"
            aria-hidden="true"
            initial={false}
            animate={
              reduce
                ? {}
                : { rotate: [0, 10, 0] }
            }
            transition={reduce ? { duration: 0 } : { duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: '60px', height: '60px' }}
          />
        </motion.div>

        <div className="h-10 sm:h-14" />
      </div>
    </section>
  );
}
