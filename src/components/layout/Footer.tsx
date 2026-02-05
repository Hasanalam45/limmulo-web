import React from "react";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next"; // Commented out - using Dutch as default
import LuumiloLogo from "../brand/LuumiloLogo";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";

export default function Footer() {
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
    <footer ref={ref} className="w-full bg-[rgba(168,177,255,0.13)]">
      <motion.div
        className="mx-auto max-w-[999px] px-4 sm:px-6 lg:px-10 py-12 sm:py-14 lg:py-16"
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {/* Contact, Bedrijf, and Ondersteuning inline */}
        <div className="flex flex-col sm:flex-row gap-6 lg:gap-4 items-start">
          {/* Left section: Logo, Quote (mobile), Socials, Contact */}
          <motion.div variants={item}>
            <Link to="/" className="inline-flex w-fit origin-left scale-[1.8]">
              <LuumiloLogo />
            </Link>

            {/* Quote specifically for Mobile - from AboutFooter */}
            <div className="sm:hidden mt-8 pr-4">
              <p 
                className="text-black mb-8"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: '14px',
                  lineHeight: '22px',
                }}
              >
                "Het platform dat kinderen vandaag<br />voorbereidt op de wereld van morgen."
              </p>

              {/* Social icons - Moved up for mobile layout */}
              <div className="flex items-center gap-2 mb-8">
                <motion.a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="transition"
                  whileHover={reduce ? undefined : { y: -2, scale: 1.04 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                >
                  <img 
                    src="/assets/footer/instagram.png" 
                    alt="Instagram" 
                    className="h-5 w-5"
                  />
                </motion.a>

                <motion.a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="transition"
                  whileHover={reduce ? undefined : { y: -2, scale: 1.04 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                >
                  <img 
                    src="/assets/footer/tiktok.png" 
                    alt="TikTok" 
                    className="h-5 w-5"
                  />
                </motion.a>
              </div>
            </div>

            <div className="mt-10 sm:mt-6 space-y-1 text-[12px] sm:text-[11px] font-medium leading-5 text-black">
              <p 
                className="font-extrabold text-black"
                style={{
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                Contact
              </p>

              <a 
                className="block hover:text-black/80 text-black" 
                href="tel:+31627583306"
                style={{
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                +31 6 27 58 33 06
              </a>
              <a 
                className="block hover:text-black/80 text-black" 
                href="mailto:join@luumilo.nl"
                style={{
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                join@luumilo.nl
              </a>
              <a
                className="block hover:text-black/80 text-black"
                href="https://www.luumilo.nl"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                www.luumilo.nl
              </a>
            </div>

            {/* Desktop-only Social Icons */}
            <div className="hidden sm:flex mt-2 items-center gap-2">
              <motion.a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="transition"
                whileHover={reduce ? undefined : { y: -2, scale: 1.04 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                <img 
                  src="/assets/footer/instagram.png" 
                  alt="Instagram" 
                  className="sm:h-4 sm:w-4"
                />
              </motion.a>

              <motion.a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="transition"
                whileHover={reduce ? undefined : { y: -2, scale: 1.04 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                <img 
                  src="/assets/footer/tiktok.png" 
                  alt="TikTok" 
                  className="sm:h-4 sm:w-4"
                />
              </motion.a>
            </div>
          </motion.div>

          {/* Bedrijf + Ondersteuning grouped together */}
          <motion.div variants={item} className="flex gap-4 lg:gap-10 mt-8 sm:mt-[67px]">
            {/* Company */}
            <div className="space-y-2 text-[12px] sm:text-[11px] font-medium text-black ml-0 sm:ml-[40px]">
              <p 
                className="font-extrabold text-black"
                style={{
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                Bedrijf
              </p>

              <motion.div whileHover={linkHover}>
                <Link 
                  className="block transition hover:text-black/80 text-black" 
                  to="/over-ons"
                  style={{
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  Over ons
                </Link>
              </motion.div>

              <motion.div whileHover={linkHover}>
                <Link 
                  className="block transition hover:text-black/80 text-black" 
                  to="/vacatures"
                  style={{
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  Vacatures
                </Link>
              </motion.div>

              <motion.div whileHover={linkHover}>
                <Link 
                  className="block transition hover:text-black/80 text-black" 
                  to="/pers"
                  style={{
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  Pers
                </Link>
              </motion.div>
            </div>

            {/* Support */}
            <div className="space-y-2 text-[12px] sm:text-[11px] font-medium text-black ml-0 sm:ml-[30px]">
              <p 
                className="font-extrabold text-black"
                style={{
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                Ondersteuning
              </p>

              <motion.div whileHover={linkHover}>
                <Link 
                  className="block transition hover:text-black/80 text-black" 
                  to="/veelgestelde-vragen"
                  style={{
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  Veelgestelde vragen
                </Link>
              </motion.div>

              <motion.div whileHover={linkHover}>
                <Link 
                  className="block transition hover:text-black/80 text-black" 
                  to="/privacybeleid"
                  style={{
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  Privacybeleid
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Quote (Desktop Only) */}
          <motion.div
            variants={item}
            className="hidden sm:block text-left sm:text-left lg:ml-auto mt-8 sm:mt-[130px] mr-10"
          >
            <p 
              className="text-black"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: '11px',
                lineHeight: '19.8px',
                letterSpacing: '0%',
                verticalAlign: 'middle'
              }}
            >
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
            mt-12 sm:mt-20
            flex flex-col gap-2
            text-[11px] sm:text-[10px]
            font-medium text-black
            sm:flex-row sm:items-center sm:justify-between
          "
        >
          <p 
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '11px',
              lineHeight: '100%',
              letterSpacing: '0%',
              verticalAlign: 'middle',
              color: 'rgba(191, 189, 188, 1)'
            }}
          >
            Alle rechten voorbehouden. © 2026 door Luumilo
          </p>
          <p 
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '11px',
              lineHeight: '100%',
              letterSpacing: '0%',
              verticalAlign: 'middle',
              color: 'rgba(191, 189, 188, 1)'
            }}
          >
            Met liefde gemaakt voor kinderen over de hele wereld.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
