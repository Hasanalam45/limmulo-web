import React from "react";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next"; // Commented out - using Dutch as default
import LuumiloLogo from "../brand/LuumiloLogo";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";

export default function AboutFooter() {
  // const { t } = useTranslation(); // Commented out - using Dutch as default
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { amount: 0.25, once: true });

  const container: Variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: reduce ? { duration: 0 } : { staggerChildren: 0.07, delayChildren: 0.05 },
    },
  };

  const item: Variants = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    show: reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 },
  };

  const linkHover = reduce ? undefined : { x: 2 };

  return (
    <footer ref={ref} className="w-full bg-[rgb(255,255,255)]">
      <motion.div
        className="mx-auto max-w-[999px] px-4 sm:px-6 lg:px-10 py-12 sm:py-14 lg:py-16"
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {/* Contact, Bedrijf, and Quote inline */}
        <div className="flex flex-col sm:flex-row gap-6 lg:gap-4 items-start">
          {/* Contact section */}
          <motion.div variants={item}>
            <Link to="/" className="inline-flex w-fit origin-left scale-[0.95]">
              <LuumiloLogo />
            </Link>

            <div className="mt-6 space-y-1 text-[12px] sm:text-[11px] font-medium leading-5 text-black/60">
              <p className="font-extrabold text-black/75">Contact</p>

              <a className="block hover:text-black/80" href="tel:+31627583306">
                +31 6 27 58 33 06
              </a>
              <a className="block hover:text-black/80" href="mailto:join@luumilo.nl">
                join@luumilo.nl
              </a>
              <a
                className="block hover:text-black/80"
                href="https://www.luumilo.nl"
                target="_blank"
                rel="noreferrer"
              >
                www.luumilo.nl
              </a>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <motion.a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 sm:h-8 sm:w-8 place-items-center rounded-full bg-black/10 text-[12px] sm:text-[11px] font-black text-black/70 transition hover:bg-black/15"
                whileHover={reduce ? undefined : { y: -2, scale: 1.04 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                in
              </motion.a>

              <motion.a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-9 w-9 sm:h-8 sm:w-8 place-items-center rounded-full bg-black/10 text-[12px] sm:text-[11px] font-black text-black/70 transition hover:bg-black/15"
                whileHover={reduce ? undefined : { y: -2, scale: 1.04 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                f
              </motion.a>
            </div>
          </motion.div>

          {/* Bedrijf section - only "Over ons" */}
          <motion.div variants={item} className="mt-8 sm:mt-[67px]">
            <div className="space-y-2 text-[12px] sm:text-[11px] font-medium text-black/60 ml-0 sm:ml-[40px]">
              <p className="font-extrabold text-black/75">Bedrijf</p>

              <motion.div whileHover={linkHover}>
                <Link className="block transition hover:text-black/80" to="/over-ons">
                  Over ons
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            variants={item}
            className="text-left sm:text-left lg:text-right lg:ml-auto mt-8 sm:mt-[130px]"
          >
            <p className="text-[12px] sm:text-[11px] font-medium italic leading-5 text-black">
              "Het platform dat kinderen vandaag<br />voorbereidt op de wereld van morgen."
            </p>

            <div className="mt-3 inline-flex items-center gap-2 lg:justify-end">
              <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_8px_14px_rgba(0,0,0,0.10)] ring-1 ring-black/5" />
              <span className="h-1 w-1 rounded-full bg-white shadow-[0_8px_14px_rgba(0,0,0,0.10)] ring-1 ring-black/5" />
            </div>
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div
          variants={item}
          className="
            mt-12 sm:mt-14
            flex flex-col gap-2
            text-[11px] sm:text-[10px]
            font-medium text-black/35
            sm:flex-row sm:items-center sm:justify-between
          "
        >
          <p>Alle rechten voorbehouden. © 2026 door Luumilo</p>
          <p>Met liefde gemaakt voor kinderen over de hele wereld.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}

