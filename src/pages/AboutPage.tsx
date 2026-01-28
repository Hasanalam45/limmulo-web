import AboutNavbar from "../components/layout/AboutNavbar";
import AboutFooter from "../components/layout/AboutFooter";

import AboutHeroSection from "../components/about/AboutHeroSection";
import WhatWeDoSection from "../components/about/WhatWeDoSection";
import FamilySection from "../components/about/FamilySection";
import WhyItMattersSection from "../components/about/WhyItMattersSection";
import MissionVisionSection from "../components/about/MissionVisionSection";
// import AboutFinalCtaSection from "../components/about/AboutFinalCtaSection";

import AboutBackground from "../components/layout/AboutBackground";

import { MotionConfig } from "framer-motion";
import SectionReveal from "../components/motion/SectionReveal";

export default function AboutPage() {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ type: "spring", stiffness: 520, damping: 42 }}
    >
      <AboutBackground>
        {/* 1) Navbar slot (keep unwrapped) */}
        <AboutNavbar />

        {/* 2) About hero slot */}
        <SectionReveal>
          <AboutHeroSection />
        </SectionReveal>

        {/* 3) What we do slot */}
        <SectionReveal>
          <WhatWeDoSection />
        </SectionReveal>

        {/* 4) Family section slot */}
        <SectionReveal>
          <FamilySection />
        </SectionReveal>

        {/* 5) Mission / Vision slot */}
        <SectionReveal>
          <MissionVisionSection />
        </SectionReveal>

        {/* 6) Why it matters slot */}
        <SectionReveal>
          <WhyItMattersSection />
        </SectionReveal>

        {/* 7) Final CTA slot */}
        {/* <SectionReveal>
          <AboutFinalCtaSection />
        </SectionReveal> */}

        {/* 8) Footer slot */}
        <SectionReveal>
          <AboutFooter />
        </SectionReveal>
      </AboutBackground>
    </MotionConfig>
  );
}
