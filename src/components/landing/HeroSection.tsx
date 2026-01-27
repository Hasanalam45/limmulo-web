import { Link } from "react-router-dom";
import { motion, useReducedMotion, type Variants } from "framer-motion";
// import { useTranslation } from "react-i18next"; // Commented out - using Dutch as default

function Sparkle({ className, delay = 0 }: { className?: string; delay?: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.img
      src="/landingpage/big-star.svg"
      alt=""
      className={className}
      aria-hidden="true"
      initial={false}
      animate={
        reduce
          ? {}
          : { rotate: [0, 10, 0] }
      }
      transition={reduce ? { duration: 0 } : { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay }}
      style={{ width: '75px', height: '83px' }}
    />
  );
}

export default function HeroSection() {
  // const { t } = useTranslation(); // Commented out - using Dutch as default
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: reduce ? { duration: 0 } : { staggerChildren: 0.07, delayChildren: 0.08 },
    },
  };

  const item: Variants = {
    hidden: reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 18, scale: 0.985 },
    show: reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-[1040px] px-4 sm:px-6">
        {/* Purple blob with organic shape and radial gradient matching Figma */}
        <motion.img
          src="/landingpage/purple-blob.svg"
          alt=""
          className="pointer-events-none absolute z-0 left-0 md:left-[5%] lg:left-[-5%] top-2 sm:top-3 md:-top-4 lg:top-[2%] w-[min(95vw,800px)] h-[400px] sm:w-[min(95vw,900px)] sm:h-[480px] md:w-[850px] md:h-[650px] lg:w-[950px] lg:h-[720px] object-contain"
          style={{
            filter: 'drop-shadow(0 0 0 rgba(196, 140, 209, 0))',
            maskImage: 'radial-gradient(ellipse 70% 70% at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.95) 85%, rgba(0,0,0,0.7) 95%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.95) 85%, rgba(0,0,0,0.7) 95%, rgba(0,0,0,0) 100%)',
          }}
          initial={false}
          animate={reduce ? undefined : { y: [0, -10, 0], scale: [1, 1.02, 1] }}
          transition={reduce ? { duration: 0 } : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />

        <motion.div
          className="relative z-20 pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-14"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Top area */}
          <div className="grid gap-7 md:gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-start">
            <motion.div variants={item} className="relative lg:pl-[20%]">
              {/* Stars above heading */}
              <div className="relative mb-2 sm:mb-3 z-30">
                <Sparkle className="pointer-events-none absolute left-[15%] top-0" delay={0.0} />
              </div>
              
              <h1 className="text-[40px] sm:text-[54px] lg:text-[64px] font-black leading-[0.95] tracking-tight text-black mt-[120px]">
                Geef je kind een sterke start.
              </h1>

              <p className="mt-4 sm:mt-5 max-w-[540px] text-[13px] sm:text-sm font-medium leading-6 text-black/75">
                Voor kinderen van 3-6 jaar: 10 minuten per dag samen lachen, leren en groeien. Speelse missies die jullie band versterken, schermvrij.
              </p>
            </motion.div>

            <div className="md:pt-2 lg:pt-4">
              <div className="space-y-6 sm:space-y-7 md:pl-2">
                <motion.div variants={item} className="flex items-start gap-3">
                    <img src="/landingpage/orange-blob.svg" alt="" aria-hidden="true" />
                  <div>
                    <p className="text-[13px] sm:text-sm font-extrabold text-black mt-2">Voor ouders</p>
                    <p className="mt-1 max-w-[120px] text-[12px] sm:text-xs leading-5 text-black/70">
                      die voelen dat innerlijke kracht belangrijker is dan hoge cijfers.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={item} className="flex items-start gap-3 lg:pl-[25%]">
                  <img src="/landingpage/pink-blob.svg" alt="" aria-hidden="true" />
                  <div>
                    <p className="text-[13px] sm:text-sm font-extrabold text-black mt-4">Voor kinderen</p>
                    <p className="mt-1 max-w-[120px] text-[12px] sm:text-xs leading-5 text-black/70">
                      die zelfstandig, sterk en nieuwsgierig de wereld in stappen.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="relative mt-9 sm:mt-10 md:mt-12 grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10 lg:items-stretch">
            {/* Badge + arrow */}
            <motion.div
              variants={item}
              className="pointer-events-none absolute left-1/2 -top-6 sm:-top-7 z-30 -translate-x-1/2 lg:left-[28%]"
              initial={false}
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={reduce ? { duration: 0 } : { duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative">
                <span className="inline-flex rotate-[-2deg] items-center rounded-[10px] bg-yellow-300 px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs font-black tracking-wide text-black shadow-[0_14px_25px_rgba(0,0,0,0.12)]">
                  NOG 3 PLEKKEN!
                </span>

                <img
                  src="/landingpage/Arrow.svg"
                  alt=""
                  className="absolute left-[72%] top-[20px] h-16 w-16 sm:h-24 sm:w-24 -translate-x-1/2"
                />
              </div>
            </motion.div>

            {/* Card 1 */}
            <motion.div
              variants={item}
              whileHover={reduce ? undefined : { y: -6, scale: 1.01 }}
              className="rounded-[22px] sm:rounded-[26px] bg-white/95 p-6 sm:p-8 shadow-[0_22px_55px_rgba(0,0,0,0.12)] ring-1 ring-black/5 transform-gpu"
            >
              <h2 className="text-[30px] sm:text-4xl font-black leading-[0.95] tracking-tight text-black">
                Doe mee als testgezin
              </h2>

              <div className="mt-4 h-[4px] w-14 rounded-full bg-sky-400" />

              <ul className="mt-5 sm:mt-6 list-disc space-y-2 pl-5 text-[13px] sm:text-sm text-slate-700 marker:text-slate-400">
                <li>Levenslang gratis toegang</li>
                <li>Exclusieve toegang tot nieuwe features</li>
                <li>Direct contact met ontwikkelaars</li>
              </ul>

              <Link
                to="/word-testgezin"
                className="mt-6 sm:mt-7 inline-flex w-full items-center justify-center rounded-xl bg-emerald-200 px-4 py-3 text-xs font-black tracking-wide text-black shadow-[0_14px_22px_rgba(16,185,129,0.20)] ring-1 ring-black/10 transition hover:bg-emerald-300"
              >
                MELD JE AAN
              </Link>

              <p className="mt-3 text-[10px] font-medium text-slate-400">
                Vragenlijst met voor/achternaam, leeftijd kind, ervaring
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={item}
              whileHover={reduce ? undefined : { y: -6, scale: 1.01 }}
              className="rounded-[22px] sm:rounded-[26px] bg-white/95 p-6 sm:p-8 shadow-[0_22px_55px_rgba(0,0,0,0.12)] ring-1 ring-black/5 transform-gpu"
            >
              <h2 className="text-[30px] sm:text-4xl font-black leading-[0.95] tracking-tight text-black">
                Preregistreer voor de app
              </h2>

              <div className="mt-4 h-[4px] w-14 rounded-full bg-sky-400" />

              <ul className="mt-5 sm:mt-6 list-disc space-y-2 pl-5 text-[13px] sm:text-sm text-slate-700 marker:text-slate-400">
                <li>Eerste maand 50% korting</li>
                <li>Ontvang nu onze best en meest beoordeelde oefening gratis</li>
                <li>Hoor als eerste wanneer we officieel lanceren</li>
              </ul>

              <div className="mt-5 sm:mt-6">
                <input
                  type="email"
                  placeholder="Vul je e-mailadres in"
                  className="h-11 w-full rounded-xl border border-black/40 bg-white px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-black/60"
                />
                <p className="mt-2 text-center text-[10px] font-medium text-slate-400">
                  Alleen je e-mailadres, meer niet
                </p>

                <Link
                  to="/preregistreer"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-emerald-200 px-4 py-3 text-xs font-black tracking-wide text-black shadow-[0_14px_22px_rgba(16,185,129,0.20)] ring-1 ring-black/10 transition hover:bg-emerald-300"
                >
                  HOUD ME OP DE HOOGTE
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="h-2 sm:h-4" />
        </motion.div>
      </div>
    </section>
  );
}
