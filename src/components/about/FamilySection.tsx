import React from "react";
// import { useTranslation } from "react-i18next"; // Commented out - using Dutch as default
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";

function RedBlobIcon() {
  return (
    <div className="relative shrink-0">
      <img
        src="/landingpage/aboutPage/red-blob.svg"
        alt=""
        className="h-14 w-14 sm:h-16 sm:w-16 drop-shadow-[0_18px_40px_rgba(0,0,0,0.14)]"
        aria-hidden="true"
      />
    </div>
  );
}

export default function FamilySection() {
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
    <section ref={ref} className="relative bg-[#FFFCFA] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1040px] px-4 sm:px-6">
        <motion.div
          className="grid items-center gap-10 lg:gap-14 lg:grid-cols-[1fr_1fr]"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {/* LEFT - Family Image */}
          <motion.div variants={item} className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[18px] sm:rounded-[24px] shadow-[0_22px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/5 max-w-[400px] mx-auto lg:mx-0">
              <img
                src="/landingpage/aboutPage/Luumilo 26-11-250045_LR.jpg.png"
                alt="Gelukkige familieportret"
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT - Text Content */}
          <motion.div variants={item} className="order-1 lg:order-2 pt-2 sm:pt-4">
            <motion.div variants={item} className="flex items-center gap-4 sm:gap-5">
              <RedBlobIcon />
              <h2
                className="
                  font-black leading-[0.95] tracking-tight text-black
                  text-[40px] xs:text-[44px] sm:text-[54px] md:text-[58px]
                "
              >
                Waarom het ertoe doet
              </h2>
            </motion.div>

            <motion.p
              variants={item}
              className="
                mt-6 max-w-[460px] text-black/65 font-medium
                text-[11px] sm:text-[12px] lg:text-[13px]
                leading-6 sm:leading-7
              "
            >
              Wist je dat 90% van de hersenontwikkeling plaatsvindt vóór het 7e levensjaar? Juist in deze vormende jaren legt Luumilo de basis voor gezonde gewoonten en emotionele veerkracht. Zo groeien kinderen op tot zelfverzekerde, empathische en sterke mensen, met kwaliteiten waar ze hun hele leven op kunnen bouwen.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

