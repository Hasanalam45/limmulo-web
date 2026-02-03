import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FiClock, FiShield, FiSmile, FiStar, FiArrowRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Sparkle({ className }: { className?: string }) {
  return <FaStar className={["text-white", className].filter(Boolean).join(" ")} aria-hidden="true" />;
}

function SectionShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto">
        <div className="relative overflow-hidden rounded-[28px] shadow-[0_28px_70px_rgba(0,0,0,0.14)]">
          {children}
        </div>
      </div>
    </main>
  );
}

function InfoCard({
  title,
  desc,
  Icon,
  accent,
}: {
  title: string;
  desc: string;
  Icon: React.ElementType;
  accent: string;
}) {
  return (
    <div className="rounded-[22px] bg-white/92 p-6 sm:p-7 shadow-[0_22px_55px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
      <div className="flex items-start gap-3">
        <span
          className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-black/5 shrink-0"
          style={{ background: accent }}
          aria-hidden="true"
        >
          <Icon className="h-5 w-5 text-black" />
        </span>

        <div>
          <p className="text-[13px] sm:text-[14px] font-extrabold text-black">{title}</p>
          <p className="mt-1 text-[11px] sm:text-[12px] font-medium leading-6 text-black/60">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function AppInfoPage() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: reduce ? { duration: 0 } : { staggerChildren: 0.08, delayChildren: 0.06 },
    },
  };

  const item: Variants = {
    hidden: reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.99 },
    show: reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <SectionShell>
      {/* HERO */}
      <section
        className="relative"
        style={{
          background: [
            "radial-gradient(1200px 720px at 16% 8%, rgba(244,221,242,0.95) 0%, rgba(244,221,242,0) 65%)",
            "radial-gradient(1200px 740px at 92% 12%, rgba(252,222,196,0.95) 0%, rgba(252,222,196,0) 65%)",
            "radial-gradient(1100px 640px at 50% 95%, rgba(248,170,200,0.85) 0%, rgba(248,170,200,0) 70%)",
            "linear-gradient(180deg, #FFFCFA 0%, #FFFCFA 100%)",
          ].join(","),
        }}
      >
        <div className="relative z-10 px-6 pt-6 sm:px-10 sm:pt-7">
          <Navbar />
        </div>

        {/* sparkles */}
        <Sparkle className="pointer-events-none absolute left-[10%] top-[14%] h-4 w-4 opacity-90" />
        <Sparkle className="pointer-events-none absolute left-[12%] top-[18%] h-3.5 w-3.5 opacity-85" />
        <Sparkle className="pointer-events-none absolute right-[14%] top-[56%] h-4 w-4 opacity-85" />
        <Sparkle className="pointer-events-none absolute right-[16%] top-[60%] h-3.5 w-3.5 opacity-80" />

        <motion.div
          className="relative z-10 mx-auto max-w-[1040px] px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="max-w-[760px]">
            <h1 className="text-[42px] sm:text-[56px] lg:text-[64px] font-black leading-[0.95] tracking-tight text-black">
              Over
              <br />
              de app
            </h1>

            <p className="mt-5 max-w-[650px] text-[12px] sm:text-[13px] font-medium leading-6 text-black/75">
              Luumilo maakt dagelijks oefenen makkelijk: korte, speelse missies voor kinderen van 3–6 jaar die jullie
              band versterken — zonder schermtijd.
            </p>

            {/* "launch soon" pill */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white/70 px-4 py-3 text-[11px] font-semibold text-black/70 ring-1 ring-black/10 backdrop-blur">
              <FiStar className="h-4 w-4 text-black" />
              <span>We lanceren heel snel. Preregistreer om als eerste toegang te krijgen.</span>
            </div>
          </motion.div>

          {/* CONTENT */}
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            {/* Left: feature cards */}
            <motion.div variants={item} className="grid gap-5">
              <InfoCard
                title="5–15 minuten per dag"
                desc="Past in elk dagritme. Eén missie per dag is genoeg voor echte vooruitgang."
                Icon={FiClock}
                accent="rgba(255, 200, 90, 1)"
              />
              <InfoCard
                title="Sterke basis: hoofd, hart, handen"
                desc="Activiteiten bouwen aan emotionele, sociale én praktische vaardigheden."
                Icon={FiShield}
                accent="rgba(180, 220, 255, 1)"
              />
              <InfoCard
                title="Schermvrij & samen"
                desc="Geen scrollen. Wel verbinding, lachen en leren — samen als gezin."
                Icon={FiSmile}
                accent="rgba(134,255,186,1)"
              />
            </motion.div>

            {/* Right: CTA card */}
            <motion.div
              variants={item}
              className="rounded-[24px] bg-white/92 p-6 sm:p-8 shadow-[0_22px_55px_rgba(0,0,0,0.12)] ring-1 ring-black/5"
            >
              <h2 className="text-[20px] sm:text-[22px] font-black tracking-tight text-black">
                Krijg early access
              </h2>

              <p className="mt-2 text-[11px] sm:text-[12px] font-medium leading-6 text-black/60">
                Preregistreer en we sturen je direct een seintje zodra we live zijn.
              </p>

              <div className="mt-6 space-y-3">
                <Link
                  to="/preregistreer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[rgba(134,255,186,1)] px-4 py-3 text-[11px] font-black tracking-wide text-black shadow-[0_14px_24px_rgba(16,185,129,0.20)] ring-1 ring-black/10 transition hover:bg-[rgba(90,200,150,1)]"
                >
                  <FiArrowRight className="h-4 w-4" />
                  PREREGISTREER HIER
                </Link>

                <Link
                  to="/word-testgezin"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-[11px] font-black tracking-wide text-black ring-1 ring-black/15 transition hover:bg-white/90"
                >
                  WORD TESTGEZIN
                </Link>
              </div>

              <p className="mt-4 text-center text-[10px] font-medium text-black/40">
                Geen spam. Alleen launch-updates.
              </p>
            </motion.div>
          </div>

          {/* Bottom mini navigation */}
          <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-3">
            <Link
              to="/over-ons"
              className="inline-flex items-center justify-center rounded-xl bg-white/70 px-4 py-2 text-[10px] font-black tracking-wide text-black/75 ring-1 ring-black/10 transition hover:bg-white/90"
            >
              OVER ONS
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl bg-white/70 px-4 py-2 text-[10px] font-black tracking-wide text-black/75 ring-1 ring-black/10 transition hover:bg-white/90"
            >
              TERUG NAAR HOME
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <section style={{ background: "linear-gradient(180deg, #FFFCFA 0%, #FFFCFA 100%)" }}>
        <Footer />
      </section>
    </SectionShell>
  );
}
