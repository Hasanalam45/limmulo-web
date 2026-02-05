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
      <div className="relative mx-auto max-w-[1040px] px-0 sm:px-6">
        {/* Purple blob with organic shape and radial gradient matching Figma */}
        <motion.img
          src="/landingpage/purple-blob.svg"
          alt=""
          className="pointer-events-none absolute z-0 left-0 md:left-[5%] lg:left-[-5%] top-2 sm:top-3 md:-top-4 lg:top-[2%] w-[218] h-[230px] sm:w-[min(95vw,900px)] sm:h-[480px] md:w-[850px] md:h-[650px] lg:w-[950px] lg:h-[650px] object-contain"
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
          <div className="flex flex-col gap-7 md:grid md:gap-4 md:grid-cols-[2.5fr_1fr] md:items-start">
            <motion.div variants={item} className="relative lg:pl-[20%]">
              {/* Stars above heading */}
              <div className="relative mb-2 sm:mb-3 z-30">
                <Sparkle className="pointer-events-none absolute left-[130px] top-2 w-[32px] h-auto md:left-[15%] md:top-0 md:w-[75px] md:h-[83px]" delay={0.0} />
              </div>
              
              <h1 
                className="text-black mt-[35px] md:mt-[110px] text-[32px] ml-4 md:ml-0 leading-[28px] tracking-[-1px] md:text-[86px] md:leading-[77.4px] md:tracking-[-4.3px]"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  verticalAlign: 'middle'
                }}
              >
                Geef je<br />
                kind een<br />
                sterke start.
              </h1>
              
              {/* Small stars after heading */}
              <div className="relative mt-2 bottom-[55px]">
                <img 
                  src="/landingpage/small-star.svg" 
                  alt="" 
                  className="absolute hidden md:block md:left-[500px] top-0 h-4 w-4 sm:h-14 sm:w-14 opacity-90"
                  aria-hidden="true"
                />
              </div>
              
              {/* Small stars after paragraph */}
              <div className="relative mt-2 sm:mt-3 bottom-[60px]">
                <img 
                  src="/landingpage/small-star.svg" 
                  alt="" 
                  className="absolute hidden md:block md:left-[620px] top-[100px] h-4 w-4 sm:h-14 sm:w-14 opacity-90"
                  aria-hidden="true"
                />
              </div>
            </motion.div>

            <div className="md:pt-2 lg:pt-2 md:-ml-8 lg:-ml-12 order-last md:order-none">
              {/* Desktop Layout - Blobs */}
              <div className="hidden md:block space-y-6 sm:space-y-1">
                <motion.div variants={item} className="flex items-start gap-3 md:-ml-16 lg:-ml-20 xl:-ml-22">
                    <img src="/landingpage/orange-blob.svg" alt="" aria-hidden="true" />
                  <div>
                    <p 
                      className="text-black mt-1"
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 700,
                        fontSize: '20px',
                        lineHeight: '28px',
                        letterSpacing: '-1px',
                        verticalAlign: 'middle'
                      }}
                    >
                      Voor ouders
                    </p>
                    <p 
                      className="mt-1 max-w-[150px] text-black"
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '28.8px',
                        letterSpacing: '0%',
                        verticalAlign: 'middle'
                      }}
                    >
                      die voelen dat innerlijke kracht belangrijker is dan hoge cijfers.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={item} className="flex items-start gap-3 lg:pl-0">
                  <img src="/landingpage/pink-blob.svg" alt="" aria-hidden="true" />
                  <div>
                    <p 
                      className="text-black mt-4"
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 700,
                        fontSize: '20px',
                        lineHeight: '28px',
                        letterSpacing: '-1px',
                        verticalAlign: 'middle'
                      }}
                    >
                      Voor kinderen
                    </p>
                    <p 
                      className="mt-1 max-w-[180px] text-black"
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '28.8px',
                        letterSpacing: '0%',
                        verticalAlign: 'middle'
                      }}
                    >
                      die zelfstandig, sterk en nieuwsgierig de wereld in stappen.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Mobile Layout - Blobs & Phones */}
              <div className="md:hidden relative w-full h-[650px] mt-10 overflow-hidden">
                 {/* Group 1: Orange Blob (Icon) + Text (Below) */}
                 <div className="absolute top-0 left-[-0px] z-10 flex flex-col items-start max-w-[220px]">
                    <div className="relative mb-2">
                        <img src="/landingpage/orange-blob.svg" alt="" className="w-[65px] h-auto" />
                    </div>
                    
                    <div className="text-left">
                       <p className="text-black" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '18px', lineHeight: '1.2' }}>Voor ouders</p>
                       <p className="text-black mt-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '1.4' }}>die voelen dat innerlijke kracht belangrijker is dan hoge cijfers.</p>
                    </div>
                 </div>

                 {/* Phone 1 (Left) - Straight and aligned below text */}
                 <div className="absolute top-[150px] left-[-10px] z-20">
                     <img src="/assets/howitworks/phone-2.png" alt="" className="w-[190px] h-auto drop-shadow-2xl rotate-[0.1deg]" />
                 </div>

                 {/* Group 2: Pink Blob (Icon) + Text (Below) */}
                 <div className="absolute top-[150px] right-[-20px] z-10 flex flex-col items-start max-w-[220px] z-50">
                    <div className="relative mb-2">
                        <img src="/landingpage/pink-blob.svg" alt="" className="w-[65px] h-auto" />
                    </div>
                    
                    <div className="text-left pr-6 -mt-8 ml-16">
                       <p className="text-black" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '18px', lineHeight: '1.2' }}>Voor kinderen</p>
                       <p className="text-black mt-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '1.4' }}>die zelfstandig, sterk en nieuwsgierig de wereld in stappen.</p>
                    </div>
                 </div>

                 {/* Phone 2 (Right) */}
                 <div className="absolute top-[350px] right-[5px] z-20">
                     <img src="/assets/howitworks/phone-1.png" alt="" className="w-[150px] h-auto drop-shadow-2xl" />
                 </div>
              </div>
            </div>
            
            {/* Paragraph spanning both columns on PC */}
            <p 
              className="hidden md:block mt-4 sm:-mt-2 max-w-[700px] md:ml-[150px] md:col-span-2 md:max-w-none text-black"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '17px',
                lineHeight: '25.2px',
                letterSpacing: '0%',
                verticalAlign: 'middle'
              }}
            >
              Voor kinderen van 3-6 jaar: 10 minuten per dag samen lachen, leren <br /> en groeien. Speelse missies die jullie band versterken, schermvrij.
            </p>

          {/* Cards */}
          <div className="relative mt-20 sm:mt-10 md:mt-12 grid gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-0 lg:items-start md:col-span-2 w-full order-3 md:order-none">
            {/* Badge + arrow */}
            <motion.div
              variants={item}
              className="pointer-events-none absolute left-[55%] sm:left-1/2 -top-10 sm:-top-7 z-30 -translate-x-1/2 lg:left-[28%]"
              initial={false}
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={reduce ? { duration: 0 } : { duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative right-1/4">
                <div className="relative">
                  <img
                    src="/landingpage/yellow-form-blob.svg"
                    alt=""
                    className="h-auto w-[150px] sm:w-[130px]"
                  />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[13px] sm:text-xs font-bold sm:font-black tracking-wide text-black whitespace-nowrap">
                    NOG 3 PLEKKEN!
                  </span>
                </div>

                <img
                  src="/landingpage/Arrow.svg"
                  alt=""
                  className="absolute left-[140px] top-[15px] h-16 w-16 sm:h-24 sm:w-24 -translate-x-1/2"
                />
              </div>
            </motion.div>

            {/* Card 1 */}
            <motion.div
              variants={item}
              whileHover={reduce ? undefined : { y: -6, scale: 1.01 }}
              className="mx-auto w-[92%] sm:w-full max-w-none sm:max-w-[320px] md:max-w-[400px] lg:max-w-[408px] rounded-[22px] sm:rounded-[26px] bg-white/95 p-5 sm:p-6 md:p-8 shadow-[0_22px_55px_rgba(0,0,0,0.12)] ring-1 ring-black/5 transform-gpu"
            >
              <div className="flex flex-col items-center md:hidden mb-4">
                <Link
                  to="/word-testgezin"
                  className=" inline-flex items-center justify-center rounded-2xl px-8 py-4 mt-4 text-black ring-1 ring-black/10 transition bg-[rgba(134,255,186,1)] hover:bg-[rgba(90,200,150,1)]"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    verticalAlign: 'middle'
                  }}
                >
                  MELD JE AAN
                </Link>
                <p 
                  className="mt-3 text-center"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 300,
                    fontSize: '8.5px',
                    lineHeight: '12px',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    color: 'rgba(90, 90, 90, 1)'
                  }}
                >
                  Vragenlijst met voor/achternaam, leeftijd kind, ervaring
                </p>
              </div>

              <h2 
                className="text-black text-[33px] leading-[1.05] tracking-[-1.5px] md:text-[58px] md:leading-[52.2px] md:tracking-[-2.5px]"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  verticalAlign: 'middle'
                }}
              >
                Doe mee <br /> als testgezin
              </h2>

              <div className="mt-4 md:mt-8 h-[7px] w-[220px] md:w-20" style={{ backgroundColor: 'rgba(87, 146, 213, 1)' }} />

              <ul 
                className="mt-5 sm:mt-6 list-disc space-y-1 pl-5 text-black marker:text-black text-[13px] leading-[20px] font-light md:text-[16px] md:leading-[28.8px] md:font-normal"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}
              >
                <li>Levenslang gratis toegang</li>
                <li>Exclusieve toegang tot nieuwe features</li>
                <li>Direct contact met ontwikkelaars</li>
              </ul>

              <div className="hidden md:flex mt-6 sm:mt-7 flex-col items-center">
                <Link
                  to="/word-testgezin"
                  className="w-full sm:w-[255px] inline-flex items-center justify-center rounded-lg px-3 py-3 text-black shadow-[0_14px_22px_rgba(16,185,129,0.20)] ring-1 ring-black/10 transition bg-[rgba(134,255,186,1)] hover:bg-[rgba(90,200,150,1)]"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(14px, 4vw, 16px)',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    verticalAlign: 'middle'
                  }}
                >
                  MELD JE AAN
                </Link>

                <p 
                  className="mt-3 text-center"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 300,
                    fontSize: '10px',
                    lineHeight: '14px',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    color: 'rgba(90, 90, 90, 1)'
                  }}
                >
                  Vragenlijst met voor/achternaam, leeftijd kind, ervaring
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={item}
              whileHover={reduce ? undefined : { y: -6, scale: 1.01 }}
              className="mx-auto lg:mx-0 w-[92%] sm:w-full max-w-none sm:max-w-[380px] md:max-w-[420px] rounded-[22px] sm:rounded-[26px] bg-white/95 p-5 sm:p-6 md:p-8 shadow-[0_22px_55px_rgba(0,0,0,0.12)] ring-1 ring-black/5 transform-gpu mt-0 md:mt-8"
            >
              <h2 
                className="text-black text-[33px] leading-[1.05] tracking-[-1.5px] md:text-[58px] md:leading-[52.2px] md:tracking-[-2.5px]"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  verticalAlign: 'middle'
                }}
              >
                Preregistreer voor de app
              </h2>

              <div className="mt-4 md:mt-8 h-[7px] w-[220px] md:w-20" style={{ backgroundColor: 'rgba(87, 146, 213, 1)' }} />

              <ul 
                className="mt-5 sm:mt-6 list-disc space-y-1 pl-5 text-black marker:text-black text-[13px] leading-[20px] font-light md:text-[16px] md:leading-[28.8px] md:font-normal"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}
              >
                <li>Eerste maand 50% korting</li>
                <li>Ontvang nu onze best en meest beoordeelde oefening gratis</li>
                <li>Hoor als eerste wanneer we officieel lanceren</li>
              </ul>

              <div className="mt-5 sm:mt-6 flex flex-col items-center">
                <input
                  type="email"
                  placeholder="Vul je e-mailadres in"
                  className="h-11 w-full rounded-xl border border-black bg-white px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-black/60"
                />
                <p 
                  className="mt-2 text-center"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 300,
                    fontSize: '8.5px',
                    lineHeight: '12px',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    color: 'rgba(90, 90, 90, 1)'
                  }}
                >
                  Alleen je e-mailadres, meer niet
                </p>

                <Link
                  to="/preregistreer"
                  className="mt-6 inline-flex w-full sm:w-[255px] items-center justify-center rounded-lg px-3 py-3 text-black shadow-[0_14px_22px_rgba(16,185,129,0.20)] ring-1 ring-black/10 transition bg-[rgba(134,255,186,1)] hover:bg-[rgba(90,200,150,1)] mb-10"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(14px, 4vw, 16px)',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    verticalAlign: 'middle'
                  }}
                >
                  HOUD ME OP DE HOOGTE
                </Link>
              </div>
            </motion.div>
          </div>
          </div>



          <div className="h-2 sm:h-4" />
        </motion.div>
      </div>
    </section>
  );
}
