import * as React from "react";
import { createPortal } from "react-dom";
import { Link, NavLink } from "react-router-dom";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  type Transition,
} from "framer-motion";
// import { useTranslation } from "react-i18next"; // Commented out - using Dutch as default
import LuumiloLogo from "../brand/LuumiloLogo";

const linkBase = "text-lg font-bold text-slate-900/90 transition";

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink to={to} className={linkBase}>
      {({ isActive }) => (
        <motion.span
          className="relative inline-flex items-center"
          initial={false}
          animate={isActive ? "hover" : "rest"}
          whileHover="hover"
        >
          <span className="relative z-10">{children}</span>

          {/* animated underline */}
          <motion.span
            className="absolute left-0 -bottom-[6px] h-[2px] w-full rounded-full bg-slate-900"
            style={{ originX: 0 }}
            variants={{
              rest: { scaleX: 0 },
              hover: { scaleX: 1 },
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          />
        </motion.span>
      )}
    </NavLink>
  );
}

export default function AboutNavbar() {
  // const { t } = useTranslation(); // Commented out - using Dutch as default
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  const [hidden, setHidden] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? latest;
    const diff = latest - prev;

    // track scrolled state for background
    setScrolled(latest > 16);

    // always show near top
    if (latest < 80) {
      setHidden(false);
      return;
    }

    // small threshold to avoid flicker
    if (diff > 6) {
      setHidden(true); // scrolling down
      setMobileMenuOpen(false); // close mobile menu when navbar hides
    }
    if (diff < -6) setHidden(false); // scrolling up
  });

  const transition: Transition = reduce
    ? { duration: 0 }
    : { type: "spring", stiffness: 520, damping: 42 };

  // ✅ Stronger background so it doesn't look "washed" on gradients
  const shellClass = scrolled
    ? "bg-white/92 shadow-[0_18px_40px_rgba(0,0,0,0.14)] ring-1 ring-black/10"
    : "bg-white/80 shadow-[0_14px_30px_rgba(0,0,0,0.10)] ring-1 ring-black/5";

  const header = (
    <motion.header
      className="fixed inset-x-0 top-0 z-[2147483647] isolate flex justify-start px-0 pt-0"
      initial={false}
      animate={{
        y: hidden ? -120 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={transition}
      style={{ pointerEvents: "auto" }}
    >
      <div
        className={[
          "flex w-full max-w-full items-center justify-between rounded-none px-6 py-3 backdrop-blur-md",
          shellClass,
        ].join(" ")}
      >
        <Link to="/" className="flex items-center gap-2 md:ml-8">
          <LuumiloLogo size={42} className="h-14 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/over-ons">Over ons</NavItem>
          <NavItem to="/over-de-app">Over de app</NavItem>
          <NavItem to="/word-testgezin">Word testgezin</NavItem>
        </nav>

        {/* Desktop Preregister Button */}
        <Link
          to="/preregistreer"
          className="hidden rounded-lg bg-[rgba(134,255,186,1)] px-4 py-2 text-xs font-extrabold text-slate-900 shadow-[0_10px_18px_rgba(16,185,129,0.25)] ring-1 ring-black/10 transition hover:bg-[rgba(90,200,150,1)] md:block md:mr-8"
        >
          Preregistreer hier!
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <motion.span
            className="h-0.5 w-6 rounded-full bg-slate-900"
            animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="h-0.5 w-6 rounded-full bg-slate-900"
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="h-0.5 w-6 rounded-full bg-slate-900"
            animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>
    </motion.header>
  );

  // Mobile menu items component
  const MobileNavItem = ({ to, children }: { to: string; children: React.ReactNode }) => {
    return (
      <NavLink
        to={to}
        onClick={() => setMobileMenuOpen(false)}
        className={({ isActive }) =>
          `block px-4 py-3 text-base font-semibold text-slate-900 transition ${
            isActive ? "bg-slate-100" : "hover:bg-slate-50"
          }`
        }
      >
        {children}
      </NavLink>
    );
  };

  const mobileMenu = (
    <>
      {/* Backdrop overlay */}
      <motion.div
        className="fixed inset-0 z-[2147483645] bg-black/20 backdrop-blur-sm md:hidden"
        initial={false}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.2 }}
        onClick={() => setMobileMenuOpen(false)}
      />
      
      {/* Mobile menu dropdown */}
      <motion.div
        className="fixed inset-x-0 top-[86px] z-[2147483646] md:hidden"
        initial={false}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="mx-4 rounded-xl bg-white/95 shadow-[0_18px_40px_rgba(0,0,0,0.14)] ring-1 ring-black/10 backdrop-blur-md"
          initial={false}
          animate={{
            y: mobileMenuOpen ? 0 : -20,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <nav className="flex flex-col py-2">
            <MobileNavItem to="/">Home</MobileNavItem>
            <MobileNavItem to="/over-ons">Over ons</MobileNavItem>
            <MobileNavItem to="/over-de-app">Over de app</MobileNavItem>
            <MobileNavItem to="/word-testgezin">Word testgezin</MobileNavItem>
            <div className="border-t border-slate-200 px-4 py-3">
              <Link
                to="/preregistreer"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full rounded-lg bg-[rgba(134,255,186,1)] px-4 py-2.5 text-center text-xs font-extrabold text-slate-900 shadow-[0_10px_18px_rgba(16,185,129,0.25)] ring-1 ring-black/10 transition hover:bg-[rgba(90,200,150,1)]"
              >
                Preregistreer hier!
              </Link>
            </div>
          </nav>
        </motion.div>
      </motion.div>
    </>
  );

  return (
    <>
      {/* Spacer so content doesn't jump because navbar is fixed */}
      <div className="h-[86px] sm:h-[92px]" aria-hidden="true" />

      {/* ✅ Portal: ensures navbar is never behind LandingBackground stacking contexts */}
      {createPortal(header, document.body)}
      {createPortal(mobileMenu, document.body)}
    </>
  );
}

