import React from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  type Variants,
  AnimatePresence,
} from "framer-motion";
import {
  FiCornerDownRight,
  FiArrowRight,
  FiArrowLeft,
  FiSend,
  FiCheck,
} from "react-icons/fi";

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

function StepDot({ active, done }: { active: boolean; done: boolean }) {
  return (
    <div
      className={[
        "grid h-8 w-8 place-items-center rounded-full ring-1 ring-black/10",
        done ? "bg-emerald-200" : active ? "bg-white" : "bg-white/60",
      ].join(" ")}
      aria-hidden="true"
    >
      {done ? <FiCheck className="h-4 w-4 text-black" /> : <span className="h-1.5 w-1.5 rounded-full bg-black/50" />}
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[10px] font-black tracking-wide text-black/70 uppercase">
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

export default function TestFamilyPage() {
  const reduce = useReducedMotion();
  const [step, setStep] = React.useState<1 | 2 | 3>(1);
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

  const StepPanel = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      key={`step-${step}`}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
      animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      exit={reduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
      transition={reduce ? { duration: 0 } : { duration: 0.25 }}
      className="space-y-4"
    >
      {children}
    </motion.div>
  );

  return (
    <SectionShell>
      <section
        className="relative"
        style={{
          background: [
            "radial-gradient(1200px 650px at 12% 12%, rgba(185,167,255,0.70) 0%, rgba(185,167,255,0) 60%)",
            "radial-gradient(1100px 650px at 92% 20%, rgba(255,154,117,0.55) 0%, rgba(255,154,117,0) 60%)",
            "linear-gradient(135deg, rgba(185,167,255,0.85) 0%, rgba(215,138,212,0.78) 48%, rgba(242,154,126,0.78) 100%)",
          ].join(","),
        }}
      >
        <div className="relative z-10 px-6 pt-6 sm:px-10 sm:pt-7">
          <Navbar />
        </div>

        <motion.div
          className="relative z-10 mx-auto max-w-[1040px] px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Header */}
          <motion.div variants={item} className="max-w-[860px]">
            <h1 className="text-[44px] sm:text-[56px] lg:text-[64px] font-black leading-[0.95] tracking-tight text-black">
              Word
              <br />
              testgezin
            </h1>

            <p className="mt-5 max-w-[680px] text-[12px] sm:text-[13px] font-medium leading-6 text-black/80">
              Help ons Luumilo perfect maken. Je krijgt vroege toegang, invloed op nieuwe features en wij leren van jouw
              feedback.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white/70 px-4 py-3 text-[11px] font-semibold text-black/70 ring-1 ring-black/10 backdrop-blur">
              <FiCornerDownRight className="h-4 w-4 text-black" />
              <span>We verzamelen testgezinnen voor de eerste Speelweken. (Launch very soon)</span>
            </div>
          </motion.div>

          {/* Wizard layout */}
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
            {/* Left: Wizard Card */}
            <motion.div
              variants={item}
              className="rounded-[26px] bg-white/92 p-6 sm:p-8 shadow-[0_22px_55px_rgba(0,0,0,0.12)] ring-1 ring-black/5 backdrop-blur"
            >
              {/* Stepper */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <StepDot active={step === 1} done={step > 1} />
                  <div className="h-[2px] w-10 rounded-full bg-black/10" />
                  <StepDot active={step === 2} done={step > 2} />
                  <div className="h-[2px] w-10 rounded-full bg-black/10" />
                  <StepDot active={step === 3} done={false} />
                </div>

                <p className="text-[10px] font-black tracking-wide text-black/60 uppercase">
                  stap {step} / 3
                </p>
              </div>

              <div className="mt-6">
                <p className="text-[16px] sm:text-[18px] font-black tracking-tight text-black">
                  Aanmelden als testgezin
                </p>
                <p className="mt-1 text-[11px] sm:text-[12px] font-medium leading-6 text-black/60">
                  Snelle aanvraag. We gebruiken dit alleen om je te contacteren.
                </p>
              </div>

              <form
                className="mt-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  // TODO: connect to backend later
                  setSubmitted(true);
                }}
              >
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="done"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="rounded-2xl bg-black/5 px-5 py-6 text-center"
                    >
                      <p className="text-[14px] font-black text-black">
                        ✅ Aanmelding ontvangen!
                      </p>
                      <p className="mx-auto mt-2 max-w-[460px] text-[11px] font-medium leading-6 text-black/60">
                        We nemen contact op zodra de testfase start.
                      </p>

                      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <Link
                          to="/preregistreer"
                          className="inline-flex items-center justify-center rounded-xl bg-emerald-200 px-6 py-3 text-[11px] font-black tracking-wide text-black ring-1 ring-black/10 transition hover:bg-emerald-300"
                        >
                          GA NAAR PREREGISTRATIE
                        </Link>
                        <button
                          type="button"
                          onClick={() => {
                            setSubmitted(false);
                            setStep(1);
                          }}
                          className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-[11px] font-black tracking-wide text-black ring-1 ring-black/15 hover:bg-black/5"
                        >
                          NIEUW FORMULIER
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <>
                      {step === 1 && (
                        <StepPanel>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <Field label="Voornaam">
                              <input
                                className="h-12 w-full rounded-xl border border-black/30 bg-white px-4 text-sm outline-none focus:border-black/60"
                                name="firstName"
                                autoComplete="given-name"
                                required
                                placeholder="Voornaam"
                              />
                            </Field>

                            <Field label="Achternaam">
                              <input
                                className="h-12 w-full rounded-xl border border-black/30 bg-white px-4 text-sm outline-none focus:border-black/60"
                                name="lastName"
                                autoComplete="family-name"
                                required
                                placeholder="Achternaam"
                              />
                            </Field>
                          </div>

                          <Field label="E-mailadres">
                            <input
                              className="h-12 w-full rounded-xl border border-black/30 bg-white px-4 text-sm outline-none focus:border-black/60"
                              name="email"
                              autoComplete="email"
                              required
                              placeholder="E-mailadres"
                              type="email"
                            />
                          </Field>

                          <div className="mt-6 flex justify-end">
                            <motion.button
                              type="button"
                              whileHover={reduce ? undefined : { y: -2 }}
                              whileTap={reduce ? undefined : { scale: 0.98 }}
                              onClick={() => setStep(2)}
                              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-200 px-6 py-3 text-[11px] font-black tracking-wide text-black shadow-[0_14px_24px_rgba(16,185,129,0.20)] ring-1 ring-black/10 hover:bg-emerald-300"
                            >
                              VOLGENDE
                              <FiArrowRight className="h-4 w-4" />
                            </motion.button>
                          </div>
                        </StepPanel>
                      )}

                      {step === 2 && (
                        <StepPanel>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <Field label="Leeftijd kind (3–6)">
                              <input
                                className="h-12 w-full rounded-xl border border-black/30 bg-white px-4 text-sm outline-none focus:border-black/60"
                                name="childAge"
                                inputMode="numeric"
                                placeholder="bijv. 4"
                              />
                            </Field>

                            <Field label="Stad (optioneel)">
                              <input
                                className="h-12 w-full rounded-xl border border-black/30 bg-white px-4 text-sm outline-none focus:border-black/60"
                                name="city"
                                autoComplete="address-level2"
                                placeholder="bijv. Utrecht"
                              />
                            </Field>
                          </div>

                          <Field label="Wat verwacht je van Luumilo? (optioneel)">
                            <textarea
                              className="min-h-[120px] w-full rounded-xl border border-black/30 bg-white px-4 py-3 text-sm outline-none focus:border-black/60"
                              name="expectations"
                              placeholder="Bijv. meer rust, meer verbinding, zelfvertrouwen..."
                            />
                          </Field>

                          <div className="mt-6 flex items-center justify-between">
                            <button
                              type="button"
                              onClick={() => setStep(1)}
                              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-[11px] font-black tracking-wide text-black ring-1 ring-black/15 hover:bg-black/5"
                            >
                              <FiArrowLeft className="h-4 w-4" />
                              TERUG
                            </button>

                            <motion.button
                              type="button"
                              whileHover={reduce ? undefined : { y: -2 }}
                              whileTap={reduce ? undefined : { scale: 0.98 }}
                              onClick={() => setStep(3)}
                              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-200 px-6 py-3 text-[11px] font-black tracking-wide text-black shadow-[0_14px_24px_rgba(16,185,129,0.20)] ring-1 ring-black/10 hover:bg-emerald-300"
                            >
                              VOLGENDE
                              <FiArrowRight className="h-4 w-4" />
                            </motion.button>
                          </div>
                        </StepPanel>
                      )}

                      {step === 3 && (
                        <StepPanel>
                          <Field label="Waarom wil je testgezin worden? (optioneel)">
                            <textarea
                              className="min-h-[140px] w-full rounded-xl border border-black/30 bg-white px-4 py-3 text-sm outline-none focus:border-black/60"
                              name="message"
                              placeholder="Vertel kort waarom je mee wilt doen…"
                            />
                          </Field>

                          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <button
                              type="button"
                              onClick={() => setStep(2)}
                              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-[11px] font-black tracking-wide text-black ring-1 ring-black/15 hover:bg-black/5"
                            >
                              <FiArrowLeft className="h-4 w-4" />
                              TERUG
                            </button>

                            <motion.button
                              type="submit"
                              whileHover={reduce ? undefined : { y: -2 }}
                              whileTap={reduce ? undefined : { scale: 0.98 }}
                              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-200 px-6 py-3 text-[11px] font-black tracking-wide text-black shadow-[0_14px_24px_rgba(16,185,129,0.20)] ring-1 ring-black/10 hover:bg-emerald-300"
                            >
                              <FiSend className="h-4 w-4" />
                              VERSTUUR AANMELDING
                            </motion.button>
                          </div>

                          <p className="mt-3 text-center text-[10px] font-medium text-black/40">
                            Door te versturen ga je akkoord dat we je mogen mailen over de testfase.
                          </p>
                        </StepPanel>
                      )}
                    </>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>

            {/* Right: Benefits + quota (different look) */}
            <motion.aside
              variants={item}
              className="rounded-[26px] bg-white/85 p-6 sm:p-8 shadow-[0_22px_55px_rgba(0,0,0,0.10)] ring-1 ring-black/5 backdrop-blur lg:sticky lg:top-8"
            >
              <div className="inline-flex items-center rounded-[12px] bg-yellow-300 px-3 py-2 text-[10px] font-black tracking-wide text-black shadow-[0_14px_25px_rgba(0,0,0,0.12)]">
                NOG 3 PLEKKEN (voorbeeld)
              </div>

              <h3 className="mt-5 text-[18px] sm:text-[20px] font-black tracking-tight text-black">
                Wat je krijgt
              </h3>

              <ul className="mt-5 space-y-3 text-[11px] sm:text-[12px] font-medium text-black/60">
                {[
                  "Vroege toegang tot Speelweken",
                  "Direct contact met de makers",
                  "Invloed op nieuwe oefeningen & features",
                  "Gratis toegang tijdens de testfase",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-[2px] grid h-5 w-5 place-items-center rounded-full bg-black/5">
                      <FiCheck className="h-4 w-4 text-black" />
                    </span>
                    <span className="leading-6">{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 rounded-2xl bg-white px-4 py-4 ring-1 ring-black/10">
                <p className="text-[11px] font-semibold text-black/70 leading-6">
                  Liever alleen updates ontvangen?
                </p>
                <Link
                  to="/preregistreer"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-emerald-200 px-4 py-3 text-[11px] font-black tracking-wide text-black ring-1 ring-black/10 transition hover:bg-emerald-300"
                >
                  GA NAAR PREREGISTRATIE
                </Link>
              </div>
            </motion.aside>
          </div>
        </motion.div>
      </section>

      <section style={{ background: "linear-gradient(180deg, #FFFCFA 0%, #FFFCFA 100%)" }}>
        <Footer />
      </section>
    </SectionShell>
  );
}
