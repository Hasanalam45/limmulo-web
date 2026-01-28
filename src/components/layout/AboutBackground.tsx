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

const aboutHeroBackground = [
  "radial-gradient(1200px 650px at 12% 12%, rgba(185,167,255,0.70) 0%, rgba(185,167,255,0) 60%)",
  "radial-gradient(1100px 650px at 92% 20%, rgba(255,154,117,0.55) 0%, rgba(255,154,117,0) 60%)",
  "linear-gradient(135deg, #B9A7FF 0%, #D78AD4 48%, #F29A7E 100%)",
].join(",");

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
