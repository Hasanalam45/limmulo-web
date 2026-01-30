import React from "react";

const heroBackground = [
  "radial-gradient(76.37% 67.92% at 48.9% 49.52%, rgba(255, 252, 250, 0.2) 0%, rgba(255, 252, 250, 0.1) 50%, rgba(255, 252, 250, 0) 100%)",
  "radial-gradient(83.09% 73.9% at 42.48% 46.67%, rgba(196, 140, 209, 0.65) 0%, rgba(196, 140, 209, 0.5) 43.67%, rgba(196, 140, 209, 0) 71%)",
  "radial-gradient(99.52% 88.52% at 76.46% 43.33%, #FAAA63 0%, rgba(250, 170, 99, 0.85) 26.5%, rgba(250, 170, 99, 0) 53%)",
  "radial-gradient(105.71% 94.02% at 63.12% 75.42%, #FBC3D4 0%, rgba(251, 195, 212, 0.7) 17.5%, rgba(251, 195, 212, 0) 35%)",
  "radial-gradient(137.51% 122.3% at 20.83% 100%, rgba(246, 86, 55, 0.75) 0%, rgba(246, 86, 55, 0.5) 33.44%, rgba(246, 86, 55, 0) 55%)",
].join(",");

const howItWorksBackground =
  "linear-gradient(180deg, #FFFCFA 0%, #FFFCFA 100%)";

const stepsBackground = [
  "radial-gradient(60.44% 94.5% at 48.9% 49.52%, rgba(255, 252, 250, 0.1) 0%, rgba(255, 252, 250, 0.05) 50%, rgba(255, 252, 250, 0) 100%)",
  "radial-gradient(97.37% 152.24% at 15.42% 75.42%, rgba(207, 163, 247, 0.85) 0%, rgba(207, 163, 247, 0.6) 17.35%, rgba(207, 163, 247, 0) 36%)",
  "radial-gradient(80.76% 126.28% at 67.92% 68.33%, rgba(239, 112, 43, 1) 0%, rgba(239, 112, 43, 0.75) 22.5%, rgba(239, 112, 43, 0) 45%)",
  "radial-gradient(78.35% 122.5% at 40.21% 79.17%, #EB4677 0%, rgba(235, 70, 119, 0.75) 22.25%, rgba(235, 70, 119, 0) 54%)",
  "radial-gradient(63.1% 98.66% at 47.08% 46.25%, rgba(186, 218, 85, 0.85) 0%, rgba(186, 218, 85, 0.6) 21%, rgba(186, 218, 85, 0) 42%)",
  "radial-gradient(85.98% 134.43% at 21.67% 44.58%, rgba(61, 155, 233, 0.7) 0%, rgba(61, 155, 233, 0.5) 20.9%, rgba(61, 155, 233, 0) 44%)",
].join(",");

const fundamentalsBackground = [
  "radial-gradient(76.03% 68.17% at 48.9% 49.52%, rgba(255, 252, 250, 0.15) 0%, rgba(255, 252, 250, 0.08) 50%, rgba(255, 252, 250, 0) 100%)",
  "radial-gradient(112.63% 100.99% at 51.12% 89.99%, #93C3FF 0%, rgba(147, 195, 255, 0.75) 42%, rgba(147, 195, 255, 0) 70%)",
  "radial-gradient(111.84% 100.28% at 43.79% 13.31%, rgba(214, 222, 72, 0.7) 0%, rgba(214, 222, 72, 0.35) 25%, rgba(214, 222, 72, 0) 50%)",
  "radial-gradient(142.14% 127.44% at 4.74% 94.58%, rgba(109, 255, 194, 0.6) 0%, rgba(109, 255, 194, 0.3) 29.9%, rgba(109, 255, 194, 0) 65%)",
  "radial-gradient(136.59% 122.47% at 93.14% 89.58%, #A6A1FF 0%, rgba(166, 161, 255, 0.75) 34.1%, rgba(166, 161, 255, 0) 55%)",
  "radial-gradient(86.17% 77.27% at 62.26% 53.42%, rgba(250, 170, 99, 0.95) 0%, rgba(250, 170, 99, 0.5) 28%, rgba(250, 170, 99, 0) 56%)",
].join(",");

const whiteBackground = "linear-gradient(180deg, #FFFCFA 0%, #FFFCFA 100%)";

const bottomBackground = [
  // "radial-gradient(900px 520px at 20% 10%, rgba(200,186,255,0.8) 0%, rgba(200,186,255,0) 70%)",
  // "radial-gradient(900px 520px at 80% 20%, rgba(165,200,255,0.7) 0%, rgba(165,200,255,0) 70%)",
  // "linear-gradient(180deg, #EDE7FF 0%, #CBB3FF 50%, #AFA0FF 100%)",
].join(",");

export default function LandingBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const items = React.Children.toArray(children);
  const [
    navbar,
    hero,
    howItWorks,
    steps,
    fundamentals,
    lifeSkills,
    centeredCopy,
    stats,
    footer,
    ...rest
  ] = items;

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto">
        <div className="relative overflow-visible rounded-[28px] shadow-[0_28px_70px_rgba(0,0,0,0.14)]">
          {/* HERO */}
          <section className="relative min-h-[800px] sm:min-h-[900px] overflow-visible" style={{ background: heroBackground }}>
            <div className="relative z-10 px-6 pb-20 pt-6 sm:px-10 sm:pt-7 sm:pb-40">
              {navbar}
              {hero}
            </div>
            
            {/* SVG Separator - positioned at the end to cover gradient */}
            <svg
              className="pointer-events-none absolute bottom-0 left-0 h-[131px] w-full"
              viewBox="0 0 1440 131"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1938 121.775C1578 121.775 1578 0.274902 1218 0.274902C858 0.274902 858 121.775 498 121.775V131H1938V121.775Z"
                fill="#FFFCFA"
              />
              <path
                d="M498 121.756C138 121.756 138 0 -222 0C-582 0 -582 121.756 -942 121.756V131H498V121.756Z"
                fill="#FFFCFA"
              />
            </svg>
          </section>

          {/* HOW IT WORKS */}
          <section
            className="relative overflow-visible"
            style={{ background: howItWorksBackground }}
          >
            {/* spacing like screenshot: lots of white before the wave */}
            <div className="relative z-10 px-6 pt-6 pb-8 sm:px-10 sm:pt-8 sm:pb-10">
              {howItWorks}
            </div>
          </section>

          {/* STEPS (gradient area like screenshot) */}
          <section
            className="relative overflow-hidden"
            style={{ background: stepsBackground }}
          >
            {/* TOP curve */}
            <svg
              className="pointer-events-none absolute inset-x-0 top-0 h-[101px] w-full"
              viewBox="0 0 1440 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <g clipPath="url(#stepsTopCurveClip)">
                <path d="M2023 6.56281C1697.25 6.56281 1697.25 93 1371.5 93C1045.75 93 1045.75 6.56281 720 6.56281V-7.62939e-06H2023V6.56281Z" fill="#FFFCFA"/>
                <path d="M720 7.12736C394.25 7.12736 394.25 101 68.5 101C-257.25 101 -257.25 7.12736 -583 7.12736V0H720V7.12736Z" fill="#FFFCFA"/>
              </g>
              <defs>
                <clipPath id="stepsTopCurveClip">
                  <rect width="1440" height="101" fill="white"/>
                </clipPath>
              </defs>
            </svg>

            {/* BOTTOM curve */}
            <svg
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[75px] w-full"
              viewBox="0 0 1440 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              aria-hidden="true"
              style={{ marginBottom: '-1px' }}
            >
              <path d="M1440 71.7703C1242.6 28.0622 992.475 0 720 0C447.525 0 196.875 28.0622 0 71.7703V75H1440V71.7703Z" fill="#FFFCFA"/>
            </svg>

            {/* Reduced padding */}
            <div className="relative z-10 px-4 pt-8 pb-20 sm:px-6 sm:pt-10 sm:pb-32">
              {steps}
            </div>
          </section>

          {/* TESTIMONIAL SECTION (white background) */}
          <section className="relative bg-[#FFFCFA] -mt-px">
            <div className="relative z-10 px-4 py-12 text-center sm:px-6 sm:py-16">
              <p 
                className="mx-auto max-w-[560px] text-black/50"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 300,
                  fontSize: 'clamp(16px, 4.5vw, 18px)',
                  lineHeight: '26px',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  verticalAlign: 'middle'
                }}
              >
                "Mijn kind heeft faalangst, maar de 'zelfliefde' <br /> oefening deed hem enorm goed."
              </p>
              <div className="mt-5 flex items-center justify-center gap-2" aria-label="carousel indicators">
                <span className="h-1 w-1 rounded-full border border-black/40 bg-transparent" />
                <span className="h-1 w-1 rounded-full bg-black/50" />
                <span className="h-1 w-1 rounded-full bg-black/50" />
                <span className="h-1 w-1 rounded-full bg-black/50" />
                <span className="h-1 w-1 rounded-full bg-black/50" />
                <span className="h-1 w-1 rounded-full bg-black/50" />
                <span className="h-1 w-1 rounded-full bg-black/50" />
                <span className="h-1 w-1 rounded-full bg-black/50" />
                <span className="h-1 w-1 rounded-full bg-black/50" />
                <span className="h-1 w-1 rounded-full bg-black/50" />
              </div>
            </div>
          </section>

          {/* FUNDAMENTALS */}
          <section
            className="relative overflow-x-visible overflow-y-hidden"
            style={{ background: fundamentalsBackground }}
          >
            {/* BOTTOM curve */}
            <svg
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[40px] w-full"
              viewBox="0 0 1440 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              aria-hidden="true"
              style={{ marginBottom: '-1px' }}
            >
              <path d="M1440 39.2345C1242.6 15.3407 992.475 0 720 0C447.525 0 196.875 15.3407 0 39.2345V41H1440V39.2345Z" fill="#FFFCFA"/>
            </svg>

            <div className="relative z-10 px-4 pt-6 pb-28 sm:px-10 sm:pt-12 sm:pb-32">
              {fundamentals}
            </div>
          </section>

          {/* LIFE SKILLS SECTION */}
          <section className="relative" style={{ background: whiteBackground }}>
            <div className="relative z-10">
              {lifeSkills}
            </div>
          </section>

          {/* CENTERED COPY */}
          <section className="relative" style={{ background: whiteBackground }}>
            <div className="relative z-10  pb-8 pt-16 sm:pt-20">
              {centeredCopy}
            </div>
          </section>

          {/* BOTTOM */}
          <section className="relative" style={{ background: bottomBackground }}>
            <div className="relative z-10  pt-8  sm:pt-10">
              {stats}
              {footer}
              {rest.length > 0 ? rest : null}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
