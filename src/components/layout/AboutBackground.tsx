import React from "react";

/**
 * About page background manager (same idea as LandingBackground).
 * Children order expected:
 * 0 Navbar
 * 1 AboutHeroSection
 * 2 WhatWeDoSection
 * 3 FamilySection
 * 4 MissionVisionSection
 * 5 WhyItMattersSection
 * 6 AboutFinalCtaSection
 * 7 Footer
 */

const aboutHeroBackground = "radial-gradient(circle at 66.08333587646484% 16.99999968210856%, rgba(182, 89, 203, 0.53) 0%, 17.5%, rgba(182, 89, 203, 0) 35%), radial-gradient(circle at 31.25% 37.166665395100914%, rgba(255, 64, 64, 0.4) 0%, 28.5%, rgba(255, 64, 64, 0) 57%), radial-gradient(circle at 80.2916653951009% 40.375000635782875%, rgba(255, 117, 81, 0.86) 0%, 33.44%, rgba(255, 117, 81, 0) 55%), radial-gradient(circle at 65.16666412353516% 2.791666587193807%, #B659CB 0%, 38.5%, rgba(182, 89, 203, 0) 77%), radial-gradient(circle at 78.91666412353516% 18.374999364217125%, #5792D5 0%, 30.5%, rgba(87, 146, 213, 0) 61%), radial-gradient(circle at 23.68749936421712% 49.083334604899086%, rgba(69, 93, 255, 0.74) 0%, 34.1%, rgba(69, 93, 255, 0) 55%), radial-gradient(circle at 48.9013671875% 49.521484375%, #FFFCFA 0%, 100%, rgba(255, 252, 250, 0) 100%)";

const creamBackground = "linear-gradient(180deg, #FFFCFA 0%, #FFFCFA 100%)";

export default function AboutBackground({ children }: { children: React.ReactNode }) {
  const items = React.Children.toArray(children);
  // Since finalCta is commented out, footer is at index 6 instead of 7
  const [navbar, hero, whatWeDo, familySection, missionVision, whyItMatters, footer, ...rest] = items;

  return (
    <main className="min-h-screen bg-[#FFFCFA]">
      <div className="mx-auto">
        <div className="relative overflow-hidden rounded-[28px] shadow-[0_28px_70px_rgba(0,0,0,0.14)]">
          {/* HERO GRADIENT */}
          <section className="relative" style={{ background: aboutHeroBackground }}>
            <div className="relative z-10 px-6 pt-6 sm:px-10 sm:pt-7">{navbar}</div>

            <div className="relative z-10 px-6 pb-24 pt-6 sm:px-10 sm:pb-32 sm:pt-8">{hero}</div>
            
            {/* SVG Separator - positioned at the end to cover gradient */}
            <svg
              className="pointer-events-none absolute bottom-0 left-0 h-[131px] w-full"
              viewBox="0 0 1440 131"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              shapeRendering="geometricPrecision"
              style={{ marginBottom: '-1px' }}
            >
              <g clipPath="url(#aboutHeroTopCurveClip)">
                <path
                  d="M1938 121.775C1578 121.775 1578 0.274902 1218 0.274902C858 0.274902 858 121.775 498 121.775V131H1938V121.775Z"
                  fill="#FFFCFA"
                  shapeRendering="geometricPrecision"
                />
                <path
                  d="M498 121.775C138 121.775 138 0 -222 0C-582 0 -582 121.775 -942 121.775V131H498V121.775Z"
                  fill="#FFFCFA"
                  shapeRendering="geometricPrecision"
                />
              </g>
              <defs>
                <clipPath id="aboutHeroTopCurveClip">
                  <rect width="1440" height="131" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </section>

          {/* MAIN CREAM AREA */}
          <section className="relative" style={{ background: creamBackground }}>
            <div className="relative z-10 px-6 pb-20 pt-14 sm:px-10 sm:pb-24 sm:pt-16">
              <div className="space-y-10 sm:space-y-14">
                {whatWeDo}
                {familySection}
              </div>
            </div>
            {/* Mission/Vision section - full width, no side padding */}
            <div className="relative z-10">
              {missionVision}
            </div>
            <div className="relative z-10 px-6 pb-20 pt-14 sm:px-10 sm:pb-24 sm:pt-16">
              <div className="space-y-10 sm:space-y-14">
                {whyItMatters}
              </div>
            </div>
          </section>

          {/* BOTTOM (footer - same as home page) */}
          <section className="relative" style={{ background: "" }}>
            <div className="relative z-10 pt-8 sm:pt-10">
              {footer}
              {rest.length ? rest : null}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
