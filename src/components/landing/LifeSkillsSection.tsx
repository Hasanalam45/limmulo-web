import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";

type Props = {
  ctaHref?: string;
  ctaLabel?: string;
};

export default function LifeSkillsSection({
  ctaHref = "/preregistreer",
  ctaLabel = "PREREGISTREER HIER",
}: Props) {
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
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    show: reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="relative bg-[#FFFCFA] pt-16 pb-16 sm:pt-20 sm:pb-20">
      <div className="mx-auto w-full">
        {/* Content area */}
        <motion.div
          className="mx-auto max-w-[760px] bg-[#FFFCFA] px-6 text-center sm:px-8"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {/* First paragraph */}
          <motion.p
            variants={item}
            className="text-black"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(18px, 5.5vw, 22px)',
              lineHeight: '39.6px',
              letterSpacing: '0%',
              textAlign: 'center',
              verticalAlign: 'middle'
            }}
          >
            De belangrijkste vaardigheden in<br />het leven - zoals{" "} v
            <strong className="font-bold">eerkracht,< br/> dankbaarheid en zelfzorg</strong> - kunnen <br/> het beste al{" "}
            <strong className="font-bold">vroeg aangeleerd<br/></strong> worden, door middel van{" "}
            <strong className="font-bold">speelse<br/></strong> interactie en{" "}
            <strong className="font-bold">bijzondere schermvrije<br/></strong> momentjes.
          </motion.p>

          {/* Blue line separator */}
          <div className="flex justify-center my-8">
            <div className="h-[6px] w-[120px]" style={{ backgroundColor: 'rgba(87, 146, 213, 1)' }} />
          </div>

          {/* Second paragraph */}
          <motion.p
            variants={item}
            className="text-black"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(18px, 5.5vw, 22px)',
              lineHeight: '39.6px',
              letterSpacing: '0%',
              textAlign: 'center',
              verticalAlign: 'middle'
            }}
          >
            Daarom helpt Luumilo gezinnen<br/> <strong className="font-bold">essentiële waarden</strong> te introduceren<br/> bij kinderen van{" "}
            <strong className="font-bold">3 tot 6 jaar.</strong>
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={item} className="mt-8 sm:mt-10">
            <motion.div
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="inline-block transform-gpu"
            >
              <Link
                to={ctaHref}
                className="inline-flex items-center justify-center rounded-xl bg-[rgba(134,255,186,1)] px-10 py-3 text-black shadow-[0_14px_24px_rgba(16,185,129,0.20)] ring-1 ring-black/10 transition hover:bg-[rgba(90,200,150,1)] sm:px-12"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(16px, 4.5vw, 18px)',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  verticalAlign: 'middle'
                }}
              >
                {ctaLabel}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

