import React from "react";
// import { useTranslation } from "react-i18next"; // Commented out - using Dutch as default
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";

function BlobIcon({
  variant,
}: {
  variant: "yellow" | "pink";
}) {
  const src = variant === "yellow" 
    ? "/landingpage/aboutPage/yellow-blob.svg"
    : "/landingpage/aboutPage/purple-blob.svg";

  return (
    <span className="relative shrink-0">
      <img
        src={src}
        alt=""
        className="h-32 w-32 sm:h-20 sm:w-20 lg:h-28 lg:w-28 drop-shadow-[0_18px_40px_rgba(0,0,0,0.10)]"
        aria-hidden="true"
      />
    </span>
  );
}

function Card({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-full rounded-[18px] bg-white px-5 py-8 sm:px-7 md:px-8 sm:py-9 shadow-[0_22px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
      {/* soft inner gloss */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[18px] opacity-[0.28]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.55), rgba(255,255,255,0))",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-center">
          {icon}
          <h3 
            className="text-black mt-3"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(32px, 8vw, 40px)',
              lineHeight: '36px',
              letterSpacing: '-2px',
              verticalAlign: 'middle'
            }}
          >
            {title}
          </h3>
        </div>

        <div 
          className="mt-5 space-y-4 text-black"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(14px, 4vw, 16px)',
            lineHeight: '28.8px',
            letterSpacing: '0%',
            verticalAlign: 'middle'
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function MissionVisionSection() {
  // const { t } = useTranslation(); // Commented out - using Dutch as default
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.35, once: true });

  const container: Variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: reduce ? { duration: 0 } : { staggerChildren: 0.1, delayChildren: 0.06 },
    },
  };

  const item: Variants = {
    hidden: reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 18, scale: 0.99 },
    show: reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-[#FFFCFA] pt-16 pb-[400px] sm:pt-20 sm:pb-40 lg:pt-24 lg:pb-48"
    >
      {/* ✅ Background gradient - extended on mobile */}
      <div
        className="pointer-events-none absolute inset-0 bottom-[-300px] sm:bottom-0"
        style={{
          background: [
            "radial-gradient(800px 600px at 0% 0%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 50%)",
            "radial-gradient(1200px 700px at 10% 15%, rgba(180,130,180,0.90) 0%, rgba(180,130,180,0) 60%)",
            "radial-gradient(1000px 600px at 50% 50%, rgba(255,100,160,0.85) 0%, rgba(255,100,160,0) 65%)",
            "radial-gradient(1100px 650px at 75% 40%, rgba(255,150,110,0.80) 0%, rgba(255,150,110,0) 60%)",
            "radial-gradient(900px 500px at 95% 50%, rgba(255,200,170,0.70) 0%, rgba(255,200,170,0) 55%)",
            "linear-gradient(135deg, rgba(220,170,200,0.60) 0%, rgba(255,170,150,0.55) 50%, rgba(255,220,200,0.50) 100%)",
          ].join(","),
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1040px] px-2 sm:px-6">
        {/* ✅ cards centered + responsive spacing */}
        <motion.div
          className="mx-auto grid w-full px-4 max-w-[760px] md:max-w-[900px] gap-8 sm:gap-10 md:grid-cols-2 md:items-stretch"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {/* Missie */}
          <motion.div
            variants={item}
            whileHover={reduce ? undefined : { y: -4 }}
            className="transform-gpu h-full flex"
          >
            <Card
              title="Missie"
              icon={<BlobIcon variant="yellow" />}
            >
              <p>
                Bij Luumilo helpen we jou als ouder om op een eenvoudige en inspirerende manier thuis te bouwen aan de innerlijke kracht van je kind.
              </p>

              <p>
                Met ons leerplatform ondersteun je je kind (3–6) in het ontwikkelen van veerkracht, dankbaarheid, zelfzorg en essentiële levensvaardigheden – via kleine, haalbare stappen die passen in jullie dagelijks leven. Zonder extra stress en vrij van schermtijd.
              </p>
            </Card>
          </motion.div>

          {/* Visie */}
          <motion.div
            variants={item}
            whileHover={reduce ? undefined : { y: -4 }}
            className="transform-gpu h-full flex"
          >
            <Card
              title="Visie"
              icon={<BlobIcon variant="pink" />}
            >
              <p>
                Wij geloven dat kinderen die stevig in hun schoenen staan, klaar zijn voor de toekomst.
              </p>

              <p>
                In een wereld vol prikkels, prestatiedruk en constante veranderingen, bieden wij jou een toegankelijke, unieke en speelse methode om je kind een sterke basis te leggen: met aandacht en intentie, passend in jullie gezinsleven.
              </p>

              <p>
                Ons doel is om samen met miljoenen ouders zoals jij een krachtiger, betekenisvoller begin te bouwen in de belangrijkste en meest vormende jaren van jullie kinderen.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      {/* ✅ Bottom curve - positioned lower on mobile to allow gradient extension */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-[-300px] sm:bottom-0 h-[88px] w-full"
        viewBox="0 0 1440 88"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ marginBottom: '-1px' }}
      >
        <path
          d="M1440 84.2105C1242.6 32.9263 992.475 0 720 0C447.525 0 196.875 32.9263 0 84.2105V88H1440V84.2105Z"
          fill="#FFFCFA"
        />
      </svg>
    </section>
  );
}
