import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/landing/HeroSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import StepsCtaSection from "../components/landing/StepsCtaSection";
import FundamentalsSection from "../components/landing/FundamentalsSection";
import LifeSkillsSection from "../components/landing/LifeSkillsSection";
import CenteredCopyCtaSection from "../components/landing/CenteredCopyCtaSection";
import Footer from "../components/layout/Footer";
import LandingBackground from "../components/layout/LandingBackground";

import { MotionConfig } from "framer-motion";
import SectionReveal from "../components/motion/SectionReveal";

export default function HomePage() {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ type: "spring", stiffness: 520, damping: 42 }}
    >
      <LandingBackground>
        {/* 1) Navbar slot */}
        <Navbar />

        {/* 2) Hero slot */}
        <SectionReveal>
          <HeroSection />
        </SectionReveal>

        {/* 3) How it works slot */}
        <SectionReveal>
          <HowItWorksSection />
        </SectionReveal>

        {/* 4) Steps slot */}
        <SectionReveal>
          <StepsCtaSection />
        </SectionReveal>

        {/* 5) Fundamentals slot */}
        <SectionReveal>
          <FundamentalsSection />
        </SectionReveal>

        {/* 6) Life Skills slot */}
        <SectionReveal>
          <LifeSkillsSection />
        </SectionReveal>

        {/* 7) Centered copy slot */}
        <SectionReveal>
          <CenteredCopyCtaSection />
        </SectionReveal>

        {/* 8) Stats slot */}
        {/* <SectionReveal>
          <StatsCtaSection />
        </SectionReveal> */}

        {/* 9) Footer slot */}
        <SectionReveal>
          <Footer />
        </SectionReveal>
      </LandingBackground>
    </MotionConfig>
  );
}
