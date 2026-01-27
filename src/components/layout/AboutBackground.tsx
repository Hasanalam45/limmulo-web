import React from "react";

/**
 * About page background manager (same idea as LandingBackground).
 * Children order expected:
 * 0 Navbar
 * 1 AboutHeroSection
 * 2 WhatWeDoSection
 * 3 FamilySection
 * 4 WhyItMattersSection
 * 5 MissionVisionSection
 * 6 AboutFinalCtaSection
 * 7 Footer
 */

const aboutHeroBackground = [
  "radial-gradient(1200px 650px at 12% 12%, rgba(185,167,255,0.70) 0%, rgba(185,167,255,0) 60%)",
  "radial-gradient(1100px 650px at 92% 20%, rgba(255,154,117,0.55) 0%, rgba(255,154,117,0) 60%)",
  "linear-gradient(135deg, #B9A7FF 0%, #D78AD4 48%, #F29A7E 100%)",
].join(",");

const creamBackground = "linear-gradient(180deg, #FFFCFA 0%, #FFFCFA 100%)";

const aboutBottomBackground = [
  "radial-gradient(1100px 620px at 18% 22%, rgba(185,167,255,0.55) 0%, rgba(185,167,255,0) 62%)",
  "radial-gradient(1100px 620px at 86% 28%, rgba(255,154,117,0.50) 0%, rgba(255,154,117,0) 62%)",
  "linear-gradient(135deg, rgba(185,167,255,0.95) 0%, rgba(215,138,212,0.92) 48%, rgba(242,154,126,0.92) 100%)",
].join(",");

export default function AboutBackground({ children }: { children: React.ReactNode }) {
  const items = React.Children.toArray(children);
  const [navbar, hero, whatWeDo, familySection, whyItMatters, missionVision, finalCta, footer, ...rest] = items;

  return (
    <main className="min-h-screen bg-[#FFFCFA]">
      <div className="mx-auto">
        <div className="relative overflow-hidden rounded-[28px] shadow-[0_28px_70px_rgba(0,0,0,0.14)]">
          {/* HERO GRADIENT */}
          <section className="relative" style={{ background: aboutHeroBackground }}>
            <div className="relative z-10 px-6 pt-6 sm:px-10 sm:pt-7">{navbar}</div>

            <div className="relative z-10 px-6 pb-24 pt-6 sm:px-10 sm:pb-32 sm:pt-8">{hero}</div>
          </section>

          {/* MAIN CREAM AREA */}
          <section className="relative" style={{ background: creamBackground }}>
            <div className="relative z-10 px-6 pb-20 pt-14 sm:px-10 sm:pb-24 sm:pt-16">
              <div className="space-y-10 sm:space-y-14">
                {whatWeDo}
                {familySection}
                {whyItMatters}
                {missionVision}
              </div>
            </div>
          </section>

          {/* BOTTOM GRADIENT (final CTA + footer) */}
          <section className="relative" style={{ background: aboutBottomBackground }}>
            {/* ✅ IMPORTANT: you were missing px-6 + pb on mobile */}
            <div className="relative z-10 px-6 pb-16 pt-16 sm:px-10 sm:pb-20 sm:pt-20">
              {/* keep CTA aligned with page content width */}
              <div className="mx-auto max-w-[999px]">{finalCta}</div>

              {/* ✅ Footer should look like a clean panel on the gradient */}
              <div className="mt-14 sm:mt-16">
                <div className="mx-auto max-w-[1100px] overflow-hidden rounded-[26px] shadow-[0_22px_55px_rgba(0,0,0,0.14)] ring-1 ring-black/10">
                  {footer}
                </div>
              </div>

              {rest.length ? rest : null}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
