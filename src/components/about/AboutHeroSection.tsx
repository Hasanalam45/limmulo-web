import { useEffect, useRef } from "react";
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

  // DEBUG: Refs for tracking visibility
  const topStarsRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const bottomStarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("--- DEBUGGING MOBILE ELEMENTS ---");
      [
        { name: "Top Stars", ref: topStarsRef },
        { name: "Arrow", ref: arrowRef },
        { name: "Bottom Stars", ref: bottomStarsRef }
      ].forEach(({ name, ref }) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          console.log(`${name}:`, {
            visible: rect.width > 0 && rect.height > 0,
            x: rect.x,
            y: rect.y,
            z: window.getComputedStyle(ref.current).zIndex
          });
        } else {
          console.log(`${name}: Ref is null`);
        }
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
    <section className="relative w-screen left-1/2 -ml-[50vw] sm:left-0 sm:ml-0 sm:w-full">
      {/* ✅ ORANGE BLOB: Mobile */}
      <motion.div
        className="
          sm:hidden
          pointer-events-none absolute
          left-1/2 -translate-x-1/2
          top-[-40px]
          w-[98%]
          max-w-none
          z-0
          rotate-[175deg]
        "
        aria-hidden="true"
      >
        <svg
          viewBox="7 33.5 186 133"
          className="w-full h-[620px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M191.916 84.136 c 10.758 34.373 -61.017 84.352 -107.951 82.303 C 60.976 165.435 7 143.252 7 107.221 c 0 -36.133 71.967 -85.314 92.958 -71.262 c 45.248 30.29 80.963 13.048 91.958 48.177 Z"
            fill="#FF8A5D"
          />
        </svg>
      </motion.div>

      <div className="relative mx-auto max-w-[1040px]">
        {/* ✅ ORANGE BLOB: centered */}

        {/* ✅ ORANGE BLOB: Desktop (Original) */}
        <motion.div
          className="
            hidden sm:block
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
          className="pointer-events-none absolute left-[280px] top-[20px] opacity-90 hidden sm:block" 
          style={{ width: '70px', height: '70px' }}
          aria-hidden="true"
        /> 
        <img 
          src="/landingpage/big-star.svg" 
          alt="" 
          className="pointer-events-none absolute left-[660px] top-[500px] opacity-90 hidden sm:block" 
          style={{ width: '65px', height: '60px' }}
          aria-hidden="true"
        /> 

        {/* Content */}
        <motion.div
          className="relative z-10 px-14 pt-10 sm:px-6 sm:pt-12 lg:pt-24"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* ✅ Mobile-only decorations */}
          <div ref={topStarsRef} className="absolute top-[40px] left-10 w-32 h-20 sm:hidden pointer-events-none z-50">
             <img src="/landingpage/big-star.svg" alt="" className="w-12 h-12 absolute top-0 left-0" />
          </div>
          
          <div className="absolute bottom-16 left-2 sm:hidden pointer-events-none rotate-[20deg]">
            <DoodleArrow className="w-16 opacity-90" />
          </div>

          <div ref={bottomStarsRef} className="absolute bottom-10 right-14 w-20 h-20 sm:hidden pointer-events-none z-50 rotate-[90deg]">
             <img src="/landingpage/big-star.svg" alt="" className="w-12 h-8 absolute top-0 right-0" />
          </div>

          <div className="mx-auto max-w-[680px] text-center sm:text-left lg:mr-[110px]">
            <motion.h1
              variants={item}
              className="text-black"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(30px, 9vw, 82px)',
                lineHeight: '1.2',
                letterSpacing: 'clamp(-1px, -0.05em, -4.1px)',
                verticalAlign: 'middle'
              }}
            >
              Over ons
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 sm:mt-5 max-w-[600px] text-black mx-auto sm:mx-0"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(12px, 3.5vw, 16px)',
                lineHeight: '1.8',
                letterSpacing: '0%',
                verticalAlign: 'middle'
              }}
            >
              Bij Luumilo geloven we dat sommige van de belangrijkste<br className="hidden sm:inline"/> vaardigheden in het leven – zoals emotionele veerkracht,<br className="hidden sm:inline" /> dankbaarheid en zelfzorg – het beste al vroeg aangeleerd kunnen<br className="hidden sm:inline"/> worden, door middel van echte ervaringen en speelse interactie.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-8 sm:mt-4 md:mt-5 max-w-[600px] text-black mx-auto sm:mx-0"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(12px, 3.5vw, 16px)',
                lineHeight: '1.8',
                letterSpacing: '0%',
                verticalAlign: 'middle'
              }}
            >
              Daarom hebben we een platform gecreëerd dat gezinnen helpt deze<br className="hidden sm:inline"/> essentiële waarden te introduceren bij kinderen van 3 tot 6 jaar door<br className="hidden sm:inline"/> middel van leuke, schermloze dagelijkse activiteiten.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex justify-center sm:justify-start sm:mt-[60px] sm:ml-[30px]">
              <motion.div
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                className="inline-block transform-gpu"
              >
                <Link
                  to="/preregistreer"
                  className="inline-flex items-center justify-center rounded-xl bg-[rgba(134,255,186,1)] px-8 py-4 sm:px-20 sm:py-4 text-black shadow-[0_14px_24px_rgba(16,185,129,0.20)] ring-1 ring-black/10 transition hover:bg-[rgba(90,200,150,1)]"
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
          className="pointer-events-none absolute right-[125px] top-[445px] hidden sm:block"
          initial={false}
          animate={reduce ? undefined : { y: [0, -6, 0] }}
          transition={reduce ? { duration: 0 } : { duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <DoodleArrow className="h-16 w-44 opacity-95" />
        </motion.div>

        <div className="h-10 sm:h-24 lg:h-28" />
      </div>
    </section>
  );
}
