import React from "react";
import { useTranslation } from "react-i18next";
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
        className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 drop-shadow-[0_18px_40px_rgba(0,0,0,0.10)]"
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
    <div className="relative flex flex-col rounded-[18px] bg-white px-7 py-8 sm:px-8 sm:py-9 shadow-[0_22px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
      {/* soft inner gloss */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[18px] opacity-[0.28]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.55), rgba(255,255,255,0))",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-1 flex-col justify-center">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-black tracking-tight text-black">
            {title}
          </h3>
        </div>

        <div className="mt-5 space-y-4 text-[11px] sm:text-[12px] lg:text-[13px] font-medium leading-6 sm:leading-6 lg:leading-7 text-black/60">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function MissionVisionSection() {
  const { t } = useTranslation();
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
      className="relative overflow-hidden bg-[#FFFCFA] py-16 sm:py-20 lg:py-24"
    >
      {/* ✅ Background gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0"
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
        initial={false}
        animate={
          reduce
            ? undefined
            : { x: [0, -12, 0], y: [0, 10, 0], scale: [1, 1.01, 1] }
        }
        transition={reduce ? { duration: 0 } : { duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-[1040px] px-4 sm:px-6">
        {/* ✅ cards centered + responsive spacing */}
        <motion.div
          className="mx-auto grid max-w-[760px] gap-8 sm:gap-10 md:grid-cols-2"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {/* Missie */}
          <motion.div
            variants={item}
            whileHover={reduce ? undefined : { y: -4 }}
            className="transform-gpu"
          >
            <Card
              title={t('about.missionVision.mission.title')}
              icon={<BlobIcon variant="yellow" />}
            >
              <p>
                {t('about.missionVision.mission.p1')}
              </p>

              <p>
                {t('about.missionVision.mission.p2')}
              </p>
            </Card>
          </motion.div>

          {/* Visie */}
          <motion.div
            variants={item}
            whileHover={reduce ? undefined : { y: -4 }}
            className="transform-gpu"
          >
            <Card
              title={t('about.missionVision.vision.title')}
              icon={<BlobIcon variant="pink" />}
            >
              <p>
                {t('about.missionVision.vision.p1')}
              </p>

              <p>
                {t('about.missionVision.vision.p2')}
              </p>

              <p>
                {t('about.missionVision.vision.p3')}
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      {/* ✅ Bottom wave */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[140px] sm:h-[170px] w-full"
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,165 C260,230 520,250 760,220 C1040,185 1240,135 1440,170 V240 H0 Z"
          fill="#ffffff"
        />
      </svg>
    </section>
  );
}
