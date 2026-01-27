import React from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  type Variants,
  AnimatePresence,
} from "framer-motion";
import { FiMail, FiArrowRight, FiCheck, FiCornerDownRight } from "react-icons/fi";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

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

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-2 text-[10px] font-semibold text-black/70 ring-1 ring-black/10 backdrop-blur">
      <FiCheck className="h-4 w-4 text-black/80" />
      {children}
    </span>
  );
}

export default function PreRegisterPage() {
  const reduce = useReducedMotion();
  const [submitted, setSubmitted] = React.useState(false);

  const container: Variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: reduce
        ? { duration: 0 }
        : { staggerChildren: 0.08, delayChildren: 0.06 },
    },
  };

  const item: Variants = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    show: reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 },
  };

  return (
    <SectionShell>
      <section
        className="relative"
        style={{
          background: [
            "radial-gradient(1200px 720px at 16% 10%, rgba(244,221,242,0.95) 0%, rgba(244,221,242,0) 65%)",
            "radial-gradient(1200px 740px at 92% 18%, rgba(252,222,196,0.90) 0%, rgba(252,222,196,0) 65%)",
            "radial-gradient(1100px 640px at 50% 92%, rgba(248,170,200,0.75) 0%, rgba(248,170,200,0) 70%)",
            "linear-gradient(180deg, #FFFCFA 0%, #FFFCFA 100%)",
          ].join(","),
        }}
      >
        {/* floating blobs */}
        <motion.div
          className="pointer-events-none absolute left-1/2 top-10 h-[240px] w-[min(92vw,720px)] -translate-x-1/2 rounded-[999px] opacity-[0.45]"
          style={{ background: "#B9A7FF" }}
          initial={false}
          animate={
            reduce
              ? undefined
              : { y: [0, -10, 0], scale: [1, 1.02, 1], rotate: [0, 0.6, 0] }
          }
          transition={
            reduce
              ? { duration: 0 }
              : { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }
          aria-hidden="true"
        />
        <motion.div
          className="pointer-events-none absolute left-[14%] top-[42%] h-[180px] w-[260px] rounded-[999px] opacity-[0.22]"
          style={{ background: "#FF8A5B" }}
          initial={false}
          animate={reduce ? undefined : { y: [0, 12, 0], scale: [1, 1.03, 1] }}
          transition={
            reduce
              ? { duration: 0 }
              : { duration: 12, repeat: Infinity, ease: "easeInOut" }
          }
          aria-hidden="true"
        />

        {/* Navbar */}
        <div className="relative z-10 px-6 pt-6 sm:px-10 sm:pt-7">
          <Navbar />
        </div>

        <motion.div
          className="relative z-10 mx-auto max-w-[1040px] px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* HERO (minimal) */}
          <motion.div variants={item} className="mx-auto max-w-[860px] text-center">
            <h1 className="text-[40px] sm:text-[56px] lg:text-[68px] font-black leading-[0.95] tracking-tight text-black">
              We lanceren
              <br />
              heel snel.
            </h1>

            <p className="mx-auto mt-5 max-w-[680px] text-[12px] sm:text-[13px] font-medium leading-6 text-black/75">
              Laat je e-mailadres achter en krijg als eerste bericht wanneer Luumilo live gaat + een kleine early-access
              bonus.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2">
              <Chip>Geen spam</Chip>
              <Chip>1–2 updates</Chip>
              <Chip>Early access</Chip>
            </div>

            <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-2xl bg-white/70 px-4 py-3 text-[11px] font-semibold text-black/70 ring-1 ring-black/10 backdrop-blur">
              <FiCornerDownRight className="h-4 w-4 text-black" />
              <span>Je kunt ook meedoen als testgezin — dan krijg je eerder toegang.</span>
            </div>
          </motion.div>

          {/* SINGLE CARD (center) */}
          <motion.div
            variants={item}
            className="mx-auto mt-10 max-w-[720px] rounded-[26px] bg-white/92 p-6 sm:p-8 shadow-[0_22px_55px_rgba(0,0,0,0.12)] ring-1 ring-black/5 backdrop-blur"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[14px] sm:text-[16px] font-black tracking-tight text-black">
                  Preregistreer voor Luumilo
                </p>
                <p className="mt-1 text-[11px] sm:text-[12px] font-medium leading-6 text-black/60">
                  Alleen je e-mail. Klaar.
                </p>
              </div>

              <Link
                to="/word-testgezin"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-200 px-4 py-3 text-[11px] font-black tracking-wide text-black ring-1 ring-black/10 transition hover:bg-emerald-300"
              >
                WORD TESTGEZIN
              </Link>
            </div>

            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: connect email signup later
                setSubmitted(true);
              }}
            >
              <div className="relative">
                <FiMail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />
                <input
                  className="h-12 w-full rounded-xl border border-black/30 bg-white pl-11 pr-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-black/60"
                  placeholder="Vul je e-mailadres in"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-200 px-4 py-3 text-[11px] font-black tracking-wide text-black shadow-[0_14px_24px_rgba(16,185,129,0.20)] ring-1 ring-black/10 transition hover:bg-emerald-300"
              >
                <FiArrowRight className="h-4 w-4" />
                INSCHRIJVEN
              </motion.button>

              <AnimatePresence>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="rounded-2xl bg-black/5 px-4 py-3 text-center text-[11px] font-semibold text-black/70"
                  >
                    ✅ Gelukt! We mailen je zodra we live gaan.
                  </motion.div>
                ) : (
                  <motion.p
                    initial={{ opacity: 0.9 }}
                    animate={{ opacity: 0.9 }}
                    className="text-center text-[10px] font-medium text-black/40"
                  >
                    Door te registreren ga je akkoord dat we je mogen mailen over de launch.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </motion.div>
      </section>

      <section style={{ background: "linear-gradient(180deg, #FFFCFA 0%, #FFFCFA 100%)" }}>
        <Footer />
      </section>
    </SectionShell>
  );
}
