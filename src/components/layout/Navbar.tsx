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

export default function Navbar() {
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
      className="fixed inset-x-0 top-0 z-[2147483647] isolate flex justify-center px-4"
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
          "flex w-full max-w-full md:max-w-[990px] items-center justify-between rounded-xl px-4 py-1.5",
          shellClass,
        ].join(" ")}
        style={{ backgroundColor: 'rgba(255, 252, 250, 1)' }}
      >
        <Link to="/" className="flex items-center gap-0 md:ml-0">
          <LuumiloLogo size={50} className="h-18 w-auto" />
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

  const mobileMenu = (
    <motion.div
      className="fixed inset-0 z-[2147483648] md:hidden"
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
         {/* Close Button Top Right */}
         <div className="absolute top-6 right-6">
            <button
             type="button"
             onClick={() => setMobileMenuOpen(false)}
             className="p-2"
             aria-label="Close menu"
            >
             <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M18 6L6 18" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               <path d="M6 6L18 18" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
            </button>
         </div>

          {/* Spacer where logo used to be (optional) or just start menu */}
          <div className="mt-12 w-full"></div>

          {/* Menu Items */}
          <nav className="flex flex-col items-end w-full pr-10 space-y-6">
             <NavLink 
               to="/" 
               onClick={() => setMobileMenuOpen(false)}
               className={({ isActive }) => `text-[22px] font-medium ${isActive ? 'text-[#C084FC]' : 'text-black'}`} // Purple if active
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

          {/* Bottom Info (like Company & Socials in image) - Adding placeholders to match layout */}
          <div className="mt-auto w-full pl-8 pb-10 text-xs text-gray-400">
             {/* Matching the screenshot vibe if needed, but for now just the nav items */}
          </div>
      </motion.div>
    </motion.div>
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
