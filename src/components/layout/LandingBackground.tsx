import React from "react";
import WaveSeparator from "../ui/WaveSeparator";

const heroBackground = [
  // Top-left: bright white to pale lavender
  "radial-gradient(1600px 1000px at 0% 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 8%, rgba(230,210,245,0.9) 25%, rgba(225,205,240,0.8) 45%, rgba(225,205,240,0.5) 65%, rgba(225,205,240,0) 85%)",
  // Top-right: white to darker orange/peach
  "radial-gradient(1600px 1000px at 100% 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 8%, rgba(255,200,170,0.9) 25%, rgba(255,190,160,0.8) 45%, rgba(255,190,160,0.5) 65%, rgba(255,190,160,0) 85%)",
  // Mid-left: pale lavender transitioning into darker rose pink
  "radial-gradient(1400px 900px at 15% 45%, rgba(240,220,250,0.95) 0%, rgba(245,210,240,0.9) 20%, rgba(250,180,220,0.85) 40%, rgba(255,160,200,0.75) 60%, rgba(255,160,200,0.5) 75%, rgba(255,160,200,0) 90%)",
  // Mid-center: blend of lavender, darker rose pink, and peach
  "radial-gradient(1800px 1200px at 50% 50%, rgba(245,220,240,0.85) 0%, rgba(250,200,230,0.8) 25%, rgba(255,180,220,0.75) 45%, rgba(255,170,210,0.6) 65%, rgba(255,170,210,0.3) 80%, rgba(255,170,210,0) 95%)",
  // Mid-right: darker orange/peach extending down
  "radial-gradient(1400px 1000px at 80% 40%, rgba(255,200,170,0.9) 0%, rgba(255,190,160,0.85) 25%, rgba(255,180,150,0.8) 45%, rgba(255,170,140,0.65) 65%, rgba(255,170,140,0.35) 80%, rgba(255,170,140,0) 95%)",
  // Bottom-left: darker rose pink to darker coral/salmon red
  "radial-gradient(1500px 800px at 8% 100%, rgba(255,140,180,0.9) 0%, rgba(255,130,170,0.85) 25%, rgba(255,120,160,0.8) 45%, rgba(255,110,150,0.7) 60%, rgba(255,100,140,0.5) 75%, rgba(255,100,140,0) 90%)",
  // Bottom-right: darker rose pink blending with darker peach
  "radial-gradient(1400px 800px at 92% 100%, rgba(255,170,190,0.85) 0%, rgba(255,160,180,0.8) 25%, rgba(255,150,170,0.75) 45%, rgba(255,140,160,0.6) 65%, rgba(255,140,160,0.3) 80%, rgba(255,140,160,0) 95%)",
].join(",");

const howItWorksBackground =
  "linear-gradient(180deg, #FFFCFA 0%, #FFFCFA 100%)";

const stepsBackground = [
  // Top-left: light blue-grey (lighter)
  "radial-gradient(1200px 800px at 0% 0%, rgba(190,200,210,1) 0%, rgba(190,200,210,0.98) 20%, rgba(190,200,210,0.92) 40%, rgba(190,200,210,0.8) 60%, rgba(190,200,210,0.5) 80%, rgba(190,200,210,0) 95%)",
  // Top-middle: pale yellowish-green (slightly darker)
  "radial-gradient(1000px 700px at 35% 10%, rgba(180,200,160,1) 0%, rgba(180,200,160,0.95) 20%, rgba(180,200,160,0.88) 40%, rgba(180,200,160,0.75) 60%, rgba(180,200,160,0.5) 80%, rgba(180,200,160,0) 95%)",
  // Middle-right: soft warm orange/peach (slightly darker)
  "radial-gradient(1100px 900px at 75% 35%, rgba(235,160,120,1) 0%, rgba(235,160,120,0.98) 15%, rgba(235,160,120,0.95) 30%, rgba(235,160,120,0.88) 50%, rgba(235,160,120,0.7) 70%, rgba(235,160,120,0.4) 85%, rgba(235,160,120,0) 95%)",
  // Bottom-left: light lavender/purple (darker pinkish)
  "radial-gradient(1000px 800px at 10% 80%, rgba(150,130,170,1) 0%, rgba(150,130,170,0.98) 20%, rgba(150,130,170,0.92) 40%, rgba(150,130,170,0.8) 60%, rgba(150,130,170,0.55) 80%, rgba(150,130,170,0) 95%)",
  // Bottom-center: darker pinkish purple
  "radial-gradient(1000px 800px at 50% 85%, rgba(130,110,150,0.9) 0%, rgba(130,110,150,0.85) 20%, rgba(130,110,150,0.75) 40%, rgba(130,110,150,0.6) 60%, rgba(130,110,150,0.4) 80%, rgba(130,110,150,0) 95%)",
  // Right side: white/light (slightly darker)
  "radial-gradient(1400px 1000px at 100% 50%, rgba(240,240,240,0.95) 0%, rgba(240,240,240,0.85) 20%, rgba(240,240,240,0.6) 40%, rgba(240,240,240,0.3) 60%, rgba(240,240,240,0) 80%)",
  // Base gradient overlay (slightly darker)
  "linear-gradient(180deg, rgba(190,200,210,0.85) 0%, rgba(180,200,160,0.8) 20%, rgba(235,160,120,0.9) 50%, rgba(130,110,150,0.85) 70%, rgba(240,240,240,0.4) 100%)",
].join(",");

const fundamentalsBackground = [
  "radial-gradient(1100px 560px at 55% 0%, rgba(255,247,179,0.95) 0%, rgba(255,247,179,0) 62%)",
  "radial-gradient(900px 520px at 12% 72%, rgba(142,255,236,0.70) 0%, rgba(142,255,236,0) 62%)",
  "radial-gradient(900px 520px at 62% 58%, rgba(255,176,134,0.65) 0%, rgba(255,176,134,0) 62%)",
  "radial-gradient(1000px 560px at 92% 78%, rgba(165,160,255,0.78) 0%, rgba(165,160,255,0) 62%)",
  "linear-gradient(180deg, #FFFCFA 0%, #F6FFD9 18%, #F7B194 58%, #9AA6FF 100%)",
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
    centeredCopy,
    stats,
    footer,
    ...rest
  ] = items;

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto">
        <div className="relative overflow-hidden rounded-[28px] shadow-[0_28px_70px_rgba(0,0,0,0.14)]">
          {/* HERO */}
          <section className="relative" style={{ background: heroBackground }}>
            <div className="relative z-10 px-6 pb-16 pt-6 sm:px-10 sm:pt-7">
              {navbar}
              {hero}
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section
            className="relative"
            style={{ background: howItWorksBackground }}
          >
            {/* Top wave from hero into white */}
            <WaveSeparator
              className="absolute left-0 top-0 h-[120px] w-full -translate-y-full"
              fill="#FFFCFA"
              position="top"
            />

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
            {/* TOP big white curve */}
            <svg
              className="pointer-events-none absolute inset-x-0 top-0 h-[220px] w-full"
              viewBox="0 0 1440 240"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0,0 H1440 V92
         C1120,232 320,232 0,92
         Z"
                fill="#FFFCFA"
              />
            </svg>

            {/* BOTTOM big white curve */}
            <svg
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[260px] w-full"
              viewBox="0 0 1440 260"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0,165
         C320,30 1120,30 1440,165
         V260 H0 Z"
                fill="#FFFCFA"
              />
            </svg>

            {/*  Important: large padding so testimonial lands in the white area */}
            <div className="relative z-10 px-6 pt-[200px] pb-[210px] sm:px-10 sm:pt-[190px] sm:pb-[240px]">
              {steps}
            </div>
          </section>

          {/* FUNDAMENTALS */}
          <section
            className="relative overflow-x-visible overflow-y-hidden"
            style={{ background: fundamentalsBackground }}
          >
            <div className="relative z-10 px-6 pt-16 pb-28 sm:px-10 sm:pt-20 sm:pb-32">
              {fundamentals}
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
