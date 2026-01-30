import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next"; // Commented out - using Dutch as default
import { motion, useReducedMotion, type Variants } from "framer-motion";

// function Sparkle({ className, delay = 0 }: { className?: string; delay?: number }) {
//   const reduce = useReducedMotion();

//   return (
//     <motion.span
//       className={className}
//       aria-hidden="true"
//       initial={false}
//       animate={
//         reduce
//           ? { opacity: 0.85 }
//           : { opacity: [0.55, 0.95, 0.6], scale: [0.92, 1.06, 0.95], rotate: [0, 10, 0] }
//       }
//       transition={reduce ? { duration: 0 } : { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay }}
//     >
//       <FaStar className="h-full w-full text-white" />
//     </motion.span>
//   );
// }

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
  // const { t } = useTranslation(); // Commented out - using Dutch as default
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
            w-[min(95vw,800px)]
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
        <img 
          src="/landingpage/big-star.svg" 
          alt="" 
          className="pointer-events-none absolute left-[260px] top-[0px] opacity-90 hidden sm:block" 
          style={{ width: '60px', height: '55px' }}
          aria-hidden="true"
        /> 
        <img 
          src="/landingpage/big-star.svg" 
          alt="" 
          className="pointer-events-none absolute left-[640px] top-[530px] opacity-90 hidden sm:block" 
          style={{ width: '60px', height: '55px' }}
          aria-hidden="true"
        /> 

        {/* Content */}
        <motion.div
          className="relative z-10 px-4 pt-10 sm:px-6 sm:pt-12 lg:pt-24"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="mx-auto max-w-[680px] text-left lg:mr-[110px]">
            <motion.h1
              variants={item}
              className="text-black"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(40px, 10vw, 82px)',
                lineHeight: '73.8px',
                letterSpacing: '-4.1px',
                verticalAlign: 'middle'
              }}
            >
              Over ons
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 sm:mt-5 max-w-[600px] text-black"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 4vw, 16px)',
                lineHeight: '28.8px',
                letterSpacing: '0%',
                verticalAlign: 'middle'
              }}
            >
              Bij Luumilo geloven we dat sommige van de belangrijkste<br className="hidden sm:inline"/> vaardigheden in het leven – zoals emotionele veerkracht,<br className="hidden sm:inline" /> dankbaarheid en zelfzorg – het beste al vroeg aangeleerd kunnen<br className="hidden sm:inline"/> worden, door middel van echte ervaringen en speelse interactie.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-3 sm:mt-4 md:mt-5 max-w-[600px] text-black"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 4vw, 16px)',
                lineHeight: '28.8px',
                letterSpacing: '0%',
                verticalAlign: 'middle'
              }}
            >
              Daarom hebben we een platform gecreëerd dat gezinnen helpt deze<br className="hidden sm:inline"/> essentiële waarden te introduceren bij kinderen van 3 tot 6 jaar door<br className="hidden sm:inline"/> middel van leuke, schermloze dagelijkse activiteiten.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex justify-center sm:justify-start sm:mt-[90px] sm:ml-[5px]">
              <motion.div
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                className="inline-block transform-gpu"
              >
                <Link
                  to="/preregistreer"
                  className="inline-flex items-center justify-center rounded-xl bg-[rgba(134,255,186,1)] px-8 py-2.5 sm:px-20 sm:py-4 text-black shadow-[0_14px_24px_rgba(16,185,129,0.20)] ring-1 ring-black/10 transition hover:bg-[rgba(90,200,150,1)]"
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
          </div>
        </motion.div>

        {/* Doodle arrow (right side) */}
        <motion.div
          className="pointer-events-none absolute right-[140px] top-[470px] hidden sm:block"
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
