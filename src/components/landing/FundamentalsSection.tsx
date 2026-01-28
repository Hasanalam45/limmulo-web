import React, { useMemo, useRef, useState } from "react";
// import { useTranslation } from "react-i18next"; // Commented out - using Dutch as default
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

/* doodle arrows like screenshot */
function DoodleArrowLeft({ className }: { className?: string }) {
  return (
    <svg
      width="87"
      height="117"
      viewBox="0 0 87 117"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={["pointer-events-none", className].filter(Boolean).join(" ")}
      style={{ transform: 'rotate(10deg) scaleX(-0.8)' }}
      aria-hidden="true"
    >
      <path d="M26.9218 116.721C18.5685 115.014 10.2736 113.029 2.0512 110.768C-0.081791 110.18 -0.83978 106.181 1.18225 105.019C10.1251 99.879 19.0748 94.6966 27.9744 89.4515C29.0121 88.8399 29.5282 91.0036 28.7325 91.5877C23.8158 95.1985 18.9146 98.8325 14.0238 102.477C32.4973 99.352 50.7946 92.8357 64.4618 79.6654C78.6285 66.0136 87.0135 45.6919 80.6382 26.3304C77.2346 15.9942 70.0381 6.90414 60.2996 1.89232C59.5193 1.49067 59.6912 -0.369518 60.7436 0.0655715C79.8205 7.94735 88.7965 30.7621 85.4177 50.2942C81.5788 72.4863 64.2701 90.2753 44.2636 99.3003C35.0382 103.462 25.2842 106.109 15.3326 107.628C19.2939 108.545 23.2413 109.522 27.1734 110.56C29.8369 111.263 30.0814 117.369 26.9218 116.721Z" fill="#242323"/>
    </svg>
  );
}
function DoodleArrowRight({ className }: { className?: string }) {
  return (
    <svg
      width="87"
      height="117"
      viewBox="0 0 87 117"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={["pointer-events-none", className].filter(Boolean).join(" ")}
      aria-hidden="true"
    >
      <path d="M26.9218 116.721C18.5685 115.014 10.2736 113.029 2.0512 110.768C-0.081791 110.18 -0.83978 106.181 1.18225 105.019C10.1251 99.879 19.0748 94.6966 27.9744 89.4515C29.0121 88.8399 29.5282 91.0036 28.7325 91.5877C23.8158 95.1985 18.9146 98.8325 14.0238 102.477C32.4973 99.352 50.7946 92.8357 64.4618 79.6654C78.6285 66.0136 87.0135 45.6919 80.6382 26.3304C77.2346 15.9942 70.0381 6.90414 60.2996 1.89232C59.5193 1.49067 59.6912 -0.369518 60.7436 0.0655715C79.8205 7.94735 88.7965 30.7621 85.4177 50.2942C81.5788 72.4863 64.2701 90.2753 44.2636 99.3003C35.0382 103.462 25.2842 106.109 15.3326 107.628C19.2939 108.545 23.2413 109.522 27.1734 110.56C29.8369 111.263 30.0814 117.369 26.9218 116.721Z" fill="#242323"/>
    </svg>
  );
}

/* icons (same look as your version) */
function HeartIcon() {
  return (
    <img 
      src="/landingpage/heart.svg" 
      alt="" 
      className="h-full w-full" 
      aria-hidden="true"
    />
  );
}
function ShieldIcon() {
  return (
    <img 
      src="/landingpage/veerkracht.svg" 
      alt="" 
      className="h-full w-full" 
      aria-hidden="true"
    />
  );
}
function SmileIcon() {
  return (
    <img 
      src="/landingpage/dankbaarheid.svg" 
      alt="" 
      className="h-full w-full" 
      aria-hidden="true"
    />
  );
}
function LeafIcon() {
  return (
    <img 
      src="/landingpage/zalfzorg.svg" 
      alt="" 
      className="h-full w-full" 
      aria-hidden="true"
    />
  );
}
function CoinIcon() {
  return (
    <img 
      src="/landingpage/geldwidjsheid.svg" 
      alt="" 
      className="h-full w-full" 
      aria-hidden="true"
    />
  );
}
function BriefcaseIcon() {
  return (
    <img 
      src="/landingpage/ondernemerschap.svg" 
      alt="" 
      className="h-full w-full" 
      aria-hidden="true"
    />
  );
}
function BulbIcon() {
  return (
    <img 
      src="/landingpage/anders-denken.svg" 
      alt="" 
      className="h-full w-full" 
      aria-hidden="true"
    />
  );
}

/* arrow icon from figma */
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="25"
      viewBox="0 0 14 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.20797 0L12.0745 10.877L12.0817 10.8718L13.2897 12.0797L13.284 12.0848L13.2878 12.0912L12.0799 13.2992L12.0762 13.2943L1.20797 24.165L0 22.9571L10.8667 12.0848L0 1.20797L1.20797 0Z"
        fill="black"
      />
    </svg>
  );
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
  const tailLeft = `${tailCommon} after:left-2.5 after:border-t-white`;
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
          "absolute rounded-lg bg-white px-4 pt-2 pb-3 text-[10px] font-extrabold leading-none tracking-normal text-center text-black shadow-[0_14px_28px_rgba(0,0,0,0.12)] flex items-center justify-center",
          tail === "left" ? tailLeft : "",
          tail === "right" ? tailRight : "",
          className,
        ].join(" ")}
        style={{ 
          border: `2px solid ${border}`,
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        {text.toUpperCase()}
      </div>
    </>
  );
}


/* tabs: neutral like screenshot (no colored borders) */
function TabButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-lg px-8 py-3 text-[10px] font-black tracking-wide uppercase whitespace-nowrap shadow-sm",
        active ? "bg-white text-black" : "bg-white/70 text-black/70 hover:bg-white/90",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

export default function FundamentalsSection() {
  // const { t } = useTranslation(); // Commented out - using Dutch as default
  const topics: Topic[] = useMemo(
    () => [
      {
        id: "emotionele_gezondheid",
        label: "Emotionele gezondheid",
        border: "#EF4444",
        icon: <HeartIcon />,
        title: "EMOTIONELE GEZONDHEID",
        description: "Herken wat je voelt en leer dat ook zeggen",
      },
      {
        id: "veerkracht",
        label: "Veerkracht",
        border: "#2563EB",
        icon: <ShieldIcon />,
        title: "VEERKRACHT",
        description: "Omgaan met tegenslag en weer opstaan",
      },
      {
        id: "dankbaarheid",
        label: "Dankbaarheid",
        border: "#F59E0B",
        icon: <SmileIcon />,
        title: "DANKBAARHEID",
        description: "Zie het goede en geniet van kleine momenten",
      },
      {
        id: "zelfzorg",
        label: "Zelfzorg",
        border: "#22C55E",
        icon: <LeafIcon />,
        title: "ZELFZORG",
        description: "Zorg goed voor jezelf – lichaam en hoofd",
      },
      {
        id: "geldwijsheid",
        label: "Geldwijsheid",
        border: "#7C3AED",
        icon: <CoinIcon />,
        title: "GELDWIJSHEID",
        description: "Slimme keuzes maken en begrijpen wat geld is",
      },
      {
        id: "ondernemerschap",
        label: "Ondernemerschap",
        border: "#F97316",
        icon: <BriefcaseIcon />,
        title: "ONDERNEMERSCHAP",
        description: "Ideeën bedenken, proberen en doorzetten",
      },
      {
        id: "anders_denken",
        label: "Anders denken",
        border: "#38BDF8",
        icon: <BulbIcon />,
        title: "ANDERS DENKEN",
        description: "Creatief denken en nieuwe oplossingen vinden",
      },
    ],
    []
  );

  const [active, setActive] = useState<TopicId>("emotionele_gezondheid");
  const activeTopic = topics.find((t) => t.id === active) ?? topics[0];
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  const scrollTabs = () => {
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative overflow-x-hidden">
      <div className="mx-auto max-w-[999px] px-4 sm:px-6">
        {/*  top sparkles (like screenshot) */}
        <img 
          src="/landingpage/big-star.svg" 
          alt="" 
          className="pointer-events-none absolute left-[380px] top-[10px] opacity-90" 
          style={{ width: '60px', height: '55px' }}
          aria-hidden="true"
        /> 
        {/*  Diagram artboard (fixed layout, scales down for small screens) */}
        <div className="relative mx-auto h-[176px] w-full sm:h-[273px] md:h-[420px]">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 origin-top scale-[0.55] sm:scale-[0.65] md:scale-100">
            <div className="relative h-[420px] w-[760px]">
              {/* Cloud SVG */}
              <div className="absolute left-1/2 -translate-x-1/2">
                <img 
                  src="/landingpage/cloud.svg" 
                  alt="7 fundamenten" 
                  className="h-auto w-[600px]"
                />
                {/* Center text overlay */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <p className="text-[11px] font-semibold leading-5 text-black/85" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    7 fundamenten voor<br />
                    een sterke start in<br />
                    de wereld<br />
                    van morgen.
                  </p>
                </div>
              </div>

              {/* Label bubbles (speech style) */}
              <LabelBubble
                text="Emotionele gezondheid"
                border="#BF0808"
                tail="left"
                className="left-[455px] top-[16px] -translate-x-1/2 bg-[#FFECEC]"
              />
              <LabelBubble text="Veerkracht" border="#2C5CE5" tail="left" className="left-[480px] top-[93px] bg-[#E6F0FF]" />
              <LabelBubble text="Dankbaarheid" border="#C9881C" tail="left" className="left-[530px] top-[185px] bg-[#FDFFC9]" />
              <LabelBubble text="Zelfzorg" border="#27A367" tail="left" className="left-[483px] top-[300px] bg-[#D9FFDA]" />

              <LabelBubble text="Anders denken" border="#1B94BB" tail="left" className="left-[142px] top-[108px] bg-[#CFF9FF]" />
              <LabelBubble text="Ondernemerschap" border="#DA5522" tail="left" className="left-[80px] top-[220px] bg-[#FFEED7]" />
              <LabelBubble text="Geldwijsheid" border="#7927DD" tail="left" className="left-[140px] top-[320px] bg-[#F0E9FF]" />

              {/* CTA */}
              <div className="absolute left-1/2 top-[400px] -translate-x-1/2">
                <Link
                  to="/preregistreer"
                  className="inline-flex items-center justify-center rounded-xl bg-[rgba(134,255,186,1)] px-10 py-3 text-[11px] font-black tracking-wide text-black shadow-[0_14px_24px_rgba(16,185,129,0.20)] ring-1 ring-black/10 transition hover:bg-[rgba(90,200,150,1)]"
                >
                  PREREGISTREER HIER
                </Link>
              </div>

              {/* doodle arrows */}
              <DoodleArrowLeft className="pointer-events-none absolute left-[140px] top-[450px] h-16 w-20 opacity-90" />
              <DoodleArrowRight className="pointer-events-none absolute right-[200px] top-[360px] h-16 w-20 opacity-90" />

              {/* sparkles near CTA (right) */}
              <img 
                src="/landingpage/big-star.svg" 
                alt="" 
                className="pointer-events-none absolute right-[180px] top-[430px] opacity-90" 
                style={{ width: '60px', height: '55px' }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/*  Tabs + content block (like screenshot) */}
        <div className="mx-auto mt-[110px] max-w-[600px] md:mt-[100px]">
          <div className="relative">
            {/* Arrow button above tabs */}
            <button
              type="button"
              onClick={scrollTabs}
              className="absolute right-0 top-[17px] z-10 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Scroll tabs"
            >
              <ArrowIcon className="h-[15px] w-[15px]" />
            </button>

            <div 
              ref={tabsContainerRef}
              className="flex gap-1 overflow-x-auto rounded-t-2xl py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <TabButton label="Emotionele gezondheid" active={active === "emotionele_gezondheid"} onClick={() => setActive("emotionele_gezondheid")} />
              <TabButton label="Veerkracht" active={active === "veerkracht"} onClick={() => setActive("veerkracht")} />
              <TabButton label="Dankbaarheid" active={active === "dankbaarheid"} onClick={() => setActive("dankbaarheid")} />
              <TabButton label="Zelfzorg" active={active === "zelfzorg"} onClick={() => setActive("zelfzorg")} />
              <TabButton label="Geldwijsheid" active={active === "geldwijsheid"} onClick={() => setActive("geldwijsheid")} />
              <TabButton label="Ondernemerschap" active={active === "ondernemerschap"} onClick={() => setActive("ondernemerschap")} />
              <TabButton label="Anders denken" active={active === "anders_denken"} onClick={() => setActive("anders_denken")} />
            </div>

            <div className="rounded-xl bg-white px-6 py-5">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center">
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
            Geen lesstof.<br />Levensstof.
          </h3>

        <img 
          src="/landingpage/big-star.svg" 
          alt="" 
          className="pointer-events-none absolute right-[260px] -top-[10px] opacity-90" 
          style={{ width: '60px', height: '55px' }}
          aria-hidden="true"
        /> 
        </div>
      </div>
    </section>
  );
}
