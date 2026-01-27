import React, { useMemo, useState } from "react";
import { FaHeart, FaLeaf, FaLightbulb, FaStar } from "react-icons/fa";
import {
  FiArrowDownLeft,
  FiArrowDownRight,
  FiBriefcase,
  FiDollarSign,
  FiShield,
  FiSmile,
} from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type TopicId =
  | "emotionele_gezondheid"
  | "veerkracht"
  | "dankbaarheid"
  | "zelfzorg"
  | "geldwijsheid"
  | "ondernemerschap"
  | "anders_denken";

type Topic = {
  id: TopicId;
  label: string;
  border: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

function Sparkle({ className }: { className?: string }) {
  return (
    <FaStar
      className={["text-white", className].filter(Boolean).join(" ")}
      aria-hidden="true"
    />
  );
}

/* doodle arrows like screenshot */
function DoodleArrowLeft({ className }: { className?: string }) {
  return (
    <FiArrowDownLeft
      className={["text-black", className].filter(Boolean).join(" ")}
      aria-hidden="true"
    />
  );
}
function DoodleArrowRight({ className }: { className?: string }) {
  return (
    <FiArrowDownRight
      className={["text-black", className].filter(Boolean).join(" ")}
      aria-hidden="true"
    />
  );
}

/* icons (same look as your version) */
function HeartIcon() {
  return <FaHeart className="h-[18px] w-[18px] text-[#E11D48]" aria-hidden="true" />;
}
function ShieldIcon() {
  return <FiShield className="h-[18px] w-[18px] text-[#2563EB]" aria-hidden="true" />;
}
function SmileIcon() {
  return <FiSmile className="h-[18px] w-[18px] text-[#F59E0B]" aria-hidden="true" />;
}
function LeafIcon() {
  return <FaLeaf className="h-[18px] w-[18px] text-[#22C55E]" aria-hidden="true" />;
}
function CoinIcon() {
  return <FiDollarSign className="h-[18px] w-[18px] text-[#7C3AED]" aria-hidden="true" />;
}
function BriefcaseIcon() {
  return <FiBriefcase className="h-[18px] w-[18px] text-[#F97316]" aria-hidden="true" />;
}
function BulbIcon() {
  return <FaLightbulb className="h-[18px] w-[18px] text-[#38BDF8]" aria-hidden="true" />;
}

/* speech pill with small tail (matches screenshot) */
function LabelBubble({
  text,
  border,
  tail,
  className,
}: {
  text: string;
  border: string;
  tail: "left" | "right" | "none";
  className: string;
}) {
  const tailCommon =
    "after:content-[''] after:absolute after:bottom-[-8px] after:border-[8px] after:border-b-0 after:border-x-transparent";
  const tailLeft = `${tailCommon} after:left-6 after:border-t-white`;
  const tailRight = `${tailCommon} after:right-6 after:border-t-white`;

  const uniqueId = `bubble-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <>
      <style>{`
        #${uniqueId}::after {
          border-top-color: ${border} !important;
        }
      `}</style>
      <div
        id={uniqueId}
        className={[
          "absolute rounded-xl bg-white px-4 py-2 text-[10px] font-black tracking-wide text-black shadow-[0_14px_28px_rgba(0,0,0,0.12)]",
          tail === "left" ? tailLeft : "",
          tail === "right" ? tailRight : "",
          className,
        ].join(" ")}
        style={{ border: `2px solid ${border}` }}
      >
        {text.toUpperCase()}
      </div>
    </>
  );
}

function IconNode({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div
      className={[
        "absolute grid h-12 w-12 place-items-center rounded-full bg-white shadow-[0_16px_30px_rgba(0,0,0,0.10)] ring-1 ring-black/5",
        className,
      ].join(" ")}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

/* tabs: neutral like screenshot (no colored borders) */
function TabButton({
  label,
  active,
  onClick,
  hasDivider,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  hasDivider?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "min-w-[150px] flex-1 px-4 py-3 text-[10px] font-black tracking-wide uppercase",
        active ? "bg-white text-black" : "bg-white/70 text-black/70 hover:bg-white/90",
        hasDivider ? "border-r border-black/10" : "",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

export default function FundamentalsSection() {
  const { t } = useTranslation();
  const topics: Topic[] = useMemo(
    () => [
      {
        id: "emotionele_gezondheid",
        label: t('fundamentals.topics.emotionele_gezondheid.label'),
        border: "#EF4444",
        icon: <HeartIcon />,
        title: t('fundamentals.topics.emotionele_gezondheid.title'),
        description: t('fundamentals.topics.emotionele_gezondheid.description'),
      },
      {
        id: "veerkracht",
        label: t('fundamentals.topics.veerkracht.label'),
        border: "#2563EB",
        icon: <ShieldIcon />,
        title: t('fundamentals.topics.veerkracht.title'),
        description: t('fundamentals.topics.veerkracht.description'),
      },
      {
        id: "dankbaarheid",
        label: t('fundamentals.topics.dankbaarheid.label'),
        border: "#F59E0B",
        icon: <SmileIcon />,
        title: t('fundamentals.topics.dankbaarheid.title'),
        description: t('fundamentals.topics.dankbaarheid.description'),
      },
      {
        id: "zelfzorg",
        label: t('fundamentals.topics.zelfzorg.label'),
        border: "#22C55E",
        icon: <LeafIcon />,
        title: t('fundamentals.topics.zelfzorg.title'),
        description: t('fundamentals.topics.zelfzorg.description'),
      },
      {
        id: "geldwijsheid",
        label: t('fundamentals.topics.geldwijsheid.label'),
        border: "#7C3AED",
        icon: <CoinIcon />,
        title: t('fundamentals.topics.geldwijsheid.title'),
        description: t('fundamentals.topics.geldwijsheid.description'),
      },
      {
        id: "ondernemerschap",
        label: t('fundamentals.topics.ondernemerschap.label'),
        border: "#F97316",
        icon: <BriefcaseIcon />,
        title: t('fundamentals.topics.ondernemerschap.title'),
        description: t('fundamentals.topics.ondernemerschap.description'),
      },
      {
        id: "anders_denken",
        label: t('fundamentals.topics.anders_denken.label'),
        border: "#38BDF8",
        icon: <BulbIcon />,
        title: t('fundamentals.topics.anders_denken.title'),
        description: t('fundamentals.topics.anders_denken.description'),
      },
    ],
    [t]
  );

  const [active, setActive] = useState<TopicId>("emotionele_gezondheid");
  const activeTopic = topics.find((t) => t.id === active) ?? topics[0];

  return (
    <section className="relative">
      <div className="mx-auto max-w-[999px] px-4 sm:px-6">
        {/*  top sparkles (like screenshot) */}
        <Sparkle className="pointer-events-none absolute left-[90px] top-[20px] h-4 w-4 opacity-90" />
        <Sparkle className="pointer-events-none absolute left-[110px] top-[4px] h-3.5 w-3.5 opacity-85" />

        {/*  Diagram artboard (fixed layout, scales down for small screens) */}
        <div className="relative mx-auto h-[176px] w-full sm:h-[273px] md:h-[420px]">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 origin-top scale-[0.42] sm:scale-[0.65] md:scale-100">
            <div className="relative h-[420px] w-[760px]">
              {/* Cloud */}
              <div className="absolute left-1/2 top-[70px] h-[230px] w-[360px] -translate-x-1/2">
                <div className="absolute inset-0 rounded-[999px] bg-white/90 shadow-[0_22px_50px_rgba(0,0,0,0.10)] ring-1 ring-black/5" />
                <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-white/90 ring-1 ring-black/5" />
                <div className="absolute left-12 -top-6 h-32 w-32 rounded-full bg-white/90 ring-1 ring-black/5" />
                <div className="absolute right-10 -top-10 h-36 w-36 rounded-full bg-white/90 ring-1 ring-black/5" />
                <div className="absolute -right-10 top-14 h-28 w-28 rounded-full bg-white/90 ring-1 ring-black/5" />

                <div className="absolute inset-0 grid place-items-center text-center">
                  <p className="text-[11px] font-semibold leading-5 text-black/65">
                    {t('fundamentals.title')}
                  </p>
                </div>
              </div>

              {/* Icon nodes (positions like screenshot) */}
              <IconNode className="left-[356px] top-[88px]">{/* heart */}
                <HeartIcon />
              </IconNode>
              <IconNode className="left-[520px] top-[118px]">{/* shield */}
                <ShieldIcon />
              </IconNode>
              <IconNode className="left-[555px] top-[190px]">{/* smile */}
                <SmileIcon />
              </IconNode>
              <IconNode className="left-[520px] top-[260px]">{/* leaf */}
                <LeafIcon />
              </IconNode>
              <IconNode className="left-[232px] top-[265px]">{/* coin */}
                <CoinIcon />
              </IconNode>
              <IconNode className="left-[197px] top-[193px]">{/* briefcase */}
                <BriefcaseIcon />
              </IconNode>
              <IconNode className="left-[185px] top-[120px]">{/* bulb */}
                <BulbIcon />
              </IconNode>

              {/* Label bubbles (speech style) */}
              <LabelBubble
                text={t('fundamentals.topics.emotionele_gezondheid.label')}
                border="#EF4444"
                tail="none"
                className="left-1/2 top-[46px] -translate-x-1/2"
              />
              <LabelBubble text={t('fundamentals.topics.veerkracht.label')} border="#2563EB" tail="left" className="left-[560px] top-[100px]" />
              <LabelBubble text={t('fundamentals.topics.dankbaarheid.label')} border="#F59E0B" tail="left" className="left-[600px] top-[172px]" />
              <LabelBubble text={t('fundamentals.topics.zelfzorg.label')} border="#22C55E" tail="left" className="left-[565px] top-[242px]" />

              <LabelBubble text={t('fundamentals.topics.anders_denken.label')} border="#38BDF8" tail="right" className="left-[70px] top-[100px]" />
              <LabelBubble text={t('fundamentals.topics.ondernemerschap.label')} border="#F97316" tail="right" className="left-[28px] top-[172px]" />
              <LabelBubble text={t('fundamentals.topics.geldwijsheid.label')} border="#7C3AED" tail="right" className="left-[62px] top-[242px]" />

              {/* CTA */}
              <div className="absolute left-1/2 top-[322px] -translate-x-1/2">
                <Link
                  to="/preregistreer"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-200 px-10 py-3 text-[11px] font-black tracking-wide text-black shadow-[0_14px_24px_rgba(16,185,129,0.20)] ring-1 ring-black/10 transition hover:bg-emerald-300"
                >
                  {t('fundamentals.cta')}
                </Link>
              </div>

              {/* doodle arrows */}
              <DoodleArrowLeft className="pointer-events-none absolute left-[150px] top-[310px] h-24 w-28 opacity-90" />
              <DoodleArrowRight className="pointer-events-none absolute right-[150px] top-[304px] h-24 w-28 opacity-90" />

              {/* sparkles near CTA (right) */}
              <Sparkle className="pointer-events-none absolute right-[230px] top-[340px] h-4 w-4 opacity-90" />
              <Sparkle className="pointer-events-none absolute right-[252px] top-[362px] h-3.5 w-3.5 opacity-85" />
            </div>
          </div>
        </div>

        {/*  Tabs + content block (like screenshot) */}
        <div className="mx-auto mt-12 max-w-[860px] md:mt-12">
          <div className="rounded-2xl bg-white/85 shadow-[0_18px_50px_rgba(0,0,0,0.10)] ring-2 ring-black/5 backdrop-blur">
            <div className="flex overflow-x-auto rounded-t-2xl bg-white/80 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <TabButton label={t('fundamentals.topics.emotionele_gezondheid.label')} active={active === "emotionele_gezondheid"} onClick={() => setActive("emotionele_gezondheid")} hasDivider />
              <TabButton label={t('fundamentals.topics.veerkracht.label')} active={active === "veerkracht"} onClick={() => setActive("veerkracht")} hasDivider />
              <TabButton label={t('fundamentals.topics.dankbaarheid.label')} active={active === "dankbaarheid"} onClick={() => setActive("dankbaarheid")} hasDivider />
              <TabButton label={t('fundamentals.topics.zelfzorg.label')} active={active === "zelfzorg"} onClick={() => setActive("zelfzorg")} />
              <TabButton label={t('fundamentals.topics.geldwijsheid.label')} active={active === "geldwijsheid"} onClick={() => setActive("geldwijsheid")} />
              <TabButton label={t('fundamentals.topics.ondernemerschap.label')} active={active === "ondernemerschap"} onClick={() => setActive("ondernemerschap")} />
              <TabButton label={t('fundamentals.topics.anders_denken.label')} active={active === "anders_denken"} onClick={() => setActive("anders_denken")} />
            </div>

            <div className="rounded-b-2xl bg-white px-6 py-5">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-black/5">
                  {activeTopic.icon}
                </div>
                <div>
                  <p className="text-xs font-black tracking-wide text-black">{activeTopic.title}</p>
                  <p className="mt-1 text-[11px] font-medium leading-5 text-black/55">
                    {activeTopic.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Bottom headline (like screenshot) */}
        <div className="relative mt-16 flex items-center justify-center pb-6">
          <h3 className="text-center text-[44px] font-black leading-[0.95] tracking-tight text-black">
            {t('fundamentals.noLesson')}
          </h3>

          <Sparkle className="pointer-events-none absolute right-[40%] top-[8px] h-4 w-4 opacity-85" />
          <Sparkle className="pointer-events-none absolute right-[36%] top-[32px] h-3.5 w-3.5 opacity-80" />
        </div>
      </div>
    </section>
  );
}
