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

const linkBase = "text-slate-900 transition";

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink to={to} className={linkBase}>
      {({ isActive }) => (
        <motion.span
          className="relative inline-flex items-center py-1.5"
          initial={false}
          whileHover={isActive ? undefined : { backgroundColor: 'rgba(134, 255, 186, 1)' }}
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '100%',
            letterSpacing: '-1px',
            verticalAlign: 'middle'
          }}
        >
          <span className="relative z-10">{children}</span>
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
    ? "ring-1 ring-black/10"
    : "ring-1 ring-black/5";

  const header = (
    <motion.header
      className="absolute md:fixed inset-x-0 top-0 z-[2147483640] isolate flex justify-start px-0 pt-0"
      initial={false}
      animate={{
        y: (typeof window !== 'undefined' && window.innerWidth < 768) ? 0 : (hidden ? -120 : 0),
        opacity: (typeof window !== 'undefined' && window.innerWidth < 768) ? 1 : (hidden ? 0 : 1),
      }}
      transition={transition}
      style={{ 
        pointerEvents: "auto",
        zIndex: (typeof window !== 'undefined' && window.innerWidth >= 768) ? 2147483647 : 2147483640 
      }}
    >
      {/* Full-width background container restored for PC */}
      <div
        className={[
          "flex w-full items-center justify-center rounded-none px-0 py-0",
          shellClass,
        ].join(" ")}
        style={{ 
          backgroundColor: 'rgba(255, 252, 250, 1)'
        }}
      >
        {/* Inner content container with max-width for PC content alignment */}
        <div className="flex w-full max-w-full md:max-w-[990px] items-center justify-between px-6 py-2 min-h-[75px] md:min-h-0">
          <Link to="/" className="flex items-center gap-0 md:ml-0 lg:py-1.5 lg:mt-2">
            <LuumiloLogo size={50} className="h-[50px] w-auto" />
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
            className="group hidden relative transition md:block md:mr-8"
            style={{ width: '196px', height: '45px' }}
          >
            <svg 
              width="196" 
              height="45" 
              viewBox="0 0 196 45" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 transition-colors"
            >
              <path 
                d="M179.528 45H16.4716C7.46554 45 0 40.6338 0 35.2113V9.78873C0 4.43662 7.34704 0 16.4716 0H179.528C188.534 0 196 4.3662 196 9.78873V35.2113C196 40.6338 188.534 45 179.528 45Z" 
                fill="#86FFBA"
                className="transition-colors group-hover:fill-[#5AC896]"
              />
            </svg>
            <span
              className="absolute inset-0 flex items-center justify-center text-slate-900"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '100%',
                letterSpacing: '-1px',
              }}
            >
              Preregistreer hier!
            </span>
          </Link>
        </div>
      </div>
    </motion.header>
  );

  const mobileMenu = (
    <motion.div
      className="fixed inset-0 z-[2147483646] md:hidden"
      initial="closed"
      animate={mobileMenuOpen ? "open" : "closed"}
      variants={{
        closed: { opacity: 0, pointerEvents: "none" },
        open: { opacity: 1, pointerEvents: "auto" },
      }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={() => setMobileMenuOpen(false)}
        variants={{ closed: { opacity: 0 }, open: { opacity: 1 } }}
      />
      
      {/* Drawer */}
      <motion.div
        className="absolute inset-y-0 right-0 w-[80%] max-w-[320px] h-screen bg-white shadow-xl flex flex-col items-center pt-10"
        variants={{
          closed: { x: "100%" },
          open: { x: "0%" },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
          {/* Spacer where logo used to be (optional) or just start menu */}
          <div className="mt-12 w-full"></div>

          {/* Menu Items */}
          <nav className="flex flex-col items-end w-full pr-10 space-y-6">
             <NavLink 
               to="/" 
               onClick={() => setMobileMenuOpen(false)}
               className={({ isActive }) => `text-[22px] font-medium ${isActive ? 'text-[#C084FC]' : 'text-black'}`}
               style={{ fontFamily: 'Poppins, sans-serif' }}
             >
               Home
             </NavLink>
             <NavLink 
               to="/over-ons" 
               onClick={() => setMobileMenuOpen(false)} 
               className="text-[22px] font-medium text-black"
               style={{ fontFamily: 'Poppins, sans-serif' }}
             >
               Over ons
             </NavLink>
             <NavLink 
               to="/over-de-app" 
               onClick={() => setMobileMenuOpen(false)} 
               className="text-[22px] font-medium text-black"
               style={{ fontFamily: 'Poppins, sans-serif' }}
             >
               Over de app
             </NavLink>
             <NavLink 
               to="/word-testgezin" 
               onClick={() => setMobileMenuOpen(false)} 
               className="text-[22px] font-medium text-black"
               style={{ fontFamily: 'Poppins, sans-serif' }}
             >
               Word testgezin
             </NavLink>
             
             <Link 
               to="/preregistreer" 
               onClick={() => setMobileMenuOpen(false)} 
               className="text-[22px] font-medium text-black mt-4"
               style={{ fontFamily: 'Poppins, sans-serif' }}
             >
               Preregistreer hier!
             </Link>
          </nav>
      </motion.div>
    </motion.div>
  );

  return (
    <>
      {/* Spacer so content doesn't jump because navbar is fixed */}
      <div className="h-[86px] sm:h-[92px]" aria-hidden="true" />

      {/* ✅ Portals: ensure elements are on top of other content */}
      {createPortal(header, document.body)}
      {createPortal(mobileMenu, document.body)}

      {/* Sticky Mobile Menu Button - Floating outside navbar */}
      {createPortal(
        <div className="fixed top-6 right-6 z-[2147483647] md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col gap-1.5 p-2 transition-transform active:scale-95"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <>
                <motion.span
                  className="h-0.5 w-6 rounded-full bg-slate-900"
                  animate={{ rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="h-0.5 w-6 rounded-full bg-slate-900"
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="h-0.5 w-6 rounded-full bg-slate-900"
                  animate={{ rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </>
            )}
          </button>
        </div>,
        document.body
      )}
    </>
  );
}

