import React, { useMemo, useRef, useState, useEffect } from "react";
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
function ArrowIcon({ className, direction = "right" }: { className?: string; direction?: "left" | "right" }) {
  return (
    <svg
      width="14"
      height="25"
      viewBox="0 0 14 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={direction === "left" ? { transform: "scaleX(-1)" } : {}}
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
  description,
  border,
  tail,
  className,
  width,
  height,
}: {
  text: string;
  description?: string;
  border: string;
  tail: "left" | "right" | "none";
  className: string;
  width?: string;
  height?: string;
}) {
  const tailCommon =
    "after:content-[''] after:absolute after:bottom-[-6px] after:border-[6px] after:border-b-0 after:border-x-transparent";
  const tailLeft = `${tailCommon} after:left-2.5 after:border-t-white`;
  const tailRight = `${tailCommon} after:right-6 after:border-t-white`;

  const uniqueId = `bubble-${Math.random().toString(36).substr(2, 9)}`;
  
  // Extract background color class and responsive width/height from className
  const bgClassMatch = className.match(/bg-\[[^\]]+\]/);
  const bgClass = bgClassMatch ? bgClassMatch[0] : '';
  const lgWidthMatch = className.match(/lg:w-\[(\d+)px\]/);
  const lgHeightMatch = className.match(/lg:h-\[(\d+)px\]/);
  const lgWidth = lgWidthMatch ? lgWidthMatch[1] + 'px' : null;
  const lgHeight = lgHeightMatch ? lgHeightMatch[1] + 'px' : null;
  const positionClasses = className.replace(/bg-\[[^\]]+\]/g, '').replace(/lg:w-\[[^\]]+\]/g, '').replace(/lg:h-\[[^\]]+\]/g, '').trim();
  
  // Also update minWidth and minHeight for lg screens if description exists
  const lgMinWidth = lgWidth;
  const lgMinHeight = lgHeight;
  
  return (
    <>
      <style>{`
        #${uniqueId}::after {
          border-top-color: ${border} !important;
        }
        ${lgWidth || lgHeight ? `
        @media (min-width: 1024px) {
          #${uniqueId} {
            ${lgWidth ? `width: ${lgWidth} !important;` : ''}
            ${lgHeight ? `height: ${lgHeight} !important;` : ''}
            ${description && lgMinWidth ? `min-width: ${lgMinWidth} !important;` : ''}
            ${description && lgMinHeight ? `min-height: ${lgMinHeight} !important;` : ''}
          }
        }
        ` : ''}
      `}</style>
      <div className={["absolute group", positionClasses].join(" ")}>
        {/* Heading that moves above container on hover */}
        {description && (
          <div 
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] lg:text-[10.5px] font-extrabold text-black opacity-0 group-hover:opacity-100 group-hover:-translate-y-[calc(100%+32px)] transition-all duration-700 ease-out pointer-events-none z-10"
            style={{
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            {text.toUpperCase()}
          </div>
        )}
        
        {/* Fixed size bubble container */}
        <div
          id={uniqueId}
          className={[
            "relative rounded-[6px] lg:rounded-[9px] px-3 lg:px-3.5 pt-1.5 lg:pt-2 pb-2 lg:pb-2.5 text-center text-black shadow-[0_14px_28px_rgba(0,0,0,0.12)] flex items-center justify-center transition-all duration-300",
            bgClass,
            tail === "left" ? tailLeft : "",
            tail === "right" ? tailRight : "",
          ].join(" ")}
          style={{ 
            border: `1px solid ${border}`,
            fontFamily: 'Poppins, sans-serif',
            ...(width && { width }),
            ...(height && { height }),
            ...(description && { minWidth: width || 'auto', minHeight: height || 'auto' }),
          }}
        >
          {/* Heading inside container (hidden on hover if description exists) */}
          <div 
            className={description ? "group-hover:opacity-0 transition-opacity duration-300 whitespace-nowrap text-[10px] lg:text-[10.5px] font-extrabold leading-tight tracking-normal" : "text-[10px] lg:text-[12px] font-extrabold leading-tight tracking-normal"}
            style={{
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            {text.toUpperCase()}
          </div>
          
          {/* Description inside container (shown on hover) */}
          {description && (
            <div 
              className="absolute inset-0 flex items-center justify-center px-3 lg:px-3.5 pt-1.5 lg:pt-2 pb-2 lg:pb-2.5 text-[9px] lg:text-[8px] font-medium leading-[1.3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black text-center pointer-events-none"
              style={{
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              {description}
            </div>
          )}
        </div>
      </div>
    </>
  );
}


/* tabs: white with green hover */
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
        "rounded-[15px] px-8 lg:px-16 py-3 lg:py-5 text-[14px] lg:text-[16px] uppercase whitespace-nowrap shadow-sm transition-colors",
        active ? "bg-white text-black hover:bg-[rgba(134,255,186,1)]" : "bg-white text-black hover:bg-[rgba(134,255,186,1)] hover:text-black",
      ].join(" ")}
      style={{
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: '100%',
        letterSpacing: '0%',
        textTransform: 'uppercase',
        verticalAlign: 'middle'
      }}
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
        title: "EMOTIONELE GEZODHEID",
        description: "Gevoelens herkennen, benoemen en ermee leren omgaan.",
      },
      {
        id: "veerkracht",
        label: "Veerkracht",
        border: "#2563EB",
        icon: <ShieldIcon />,
        title: "VEERKRACHT",
        description: "Omgaan met tegenslag, doorzetten en opnieuw proberen.",
      },
      {
        id: "dankbaarheid",
        label: "Dankbaarheid",
        border: "#F59E0B",
        icon: <SmileIcon />,
        title: "DANKBAARHEID",
        description: "Stilstaan bij wat er al is en dat bewust ervaren.",
      },
      {
        id: "zelfzorg",
        label: "Zelfzorg",
        border: "#22C55E",
        icon: <LeafIcon />,
        title: "ZELFZORG",
        description: "Luisteren naar het lichaam en ruimte maken voor rust en herstel.",
      },
      {
        id: "geldwijsheid",
        label: "Geldwijsheid",
        border: "#7C3AED",
        icon: <CoinIcon />,
        title: "GELDWIJSHEID",
        description: "Bewust omgaan met geld, spullen en waarde.",
      },
      {
        id: "ondernemerschap",
        label: "Ondernemerschap",
        border: "#F97316",
        icon: <BriefcaseIcon />,
        title: "ONDERNEMERSCHAP",
        description: "Initiatief nemen, proberen en zelf oplossingen bedenken.",
      },
      {
        id: "anders_denken",
        label: "Anders denken",
        border: "#38BDF8",
        icon: <BulbIcon />,
        title: "ANDERS DENKEN",
        description: "Vrij kijken, creatief denken en eigen ideeën volgen.",
      },
    ],
    []
  );

  const [active, setActive] = useState<TopicId>("emotionele_gezondheid");
  const activeTopic = topics.find((t) => t.id === active) ?? topics[0];
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (tabsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const container = tabsContainerRef.current;
    if (container) {
      checkScrollPosition();
      container.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);
      return () => {
        container.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, []);

  const scrollTabsRight = () => {
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  const scrollTabsLeft = () => {
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative overflow-x-hidden pb-20 lg:pb-0">
      <div className="mx-auto max-w-[999px] px-4 sm:px-6">
        {/*  top sparkles (like screenshot) */}
        <img 
          src="/landingpage/big-star.svg" 
          alt="" 
          className="pointer-events-none absolute left-[380px] top-[10px] opacity-90" 
          style={{ width: '60px', height: '55px' }}
          aria-hidden="true"
        /> 
        
        {/* ✅ Mobile Headline (Top) */}
        <div className="relative mt-20 mb-4 flex items-center justify-center lg:hidden">
          <h3 
            className="text-center text-black"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(40px, 10vw, 48px)',
              lineHeight: '1.1',
              letterSpacing: '-1px',
              textAlign: 'center',
            }}
          >
            Geen lesstof.<br />Levensstof.
          </h3>
        </div>
        {/*  Diagram artboard (fixed layout, scales down for small screens) */}
        <div className="relative mx-auto h-[400px] w-full sm:h-[400px] md:h-[420px] lg:h-[756px] mt-4 lg:mt-8">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 origin-top scale-[1.0] sm:scale-[0.9] md:scale-100 lg:scale-[1.7]">
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
                  <p 
                    className="text-[14px] lg:text-[12px] text-black"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      lineHeight: '22px',
                      letterSpacing: '0%',
                      textAlign: 'center',
                      verticalAlign: 'middle'
                    }}
                  >
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
                description="Gevoelens herkennen, benoemen en ermee leren omgaan."
                border="#BF0808"
                tail="left"
                width="179px"
                height="37px"
                className="hidden lg:flex left-[455px] top-[12px] -translate-x-1/2 bg-[#FFECEC] lg:w-[165px] lg:h-[33px]"
              />
              <LabelBubble 
                text="Veerkracht" 
                description="Omgaan met tegenslag, doorzetten en opnieuw proberen."
                border="#2C5CE5" 
                tail="left"
                width="180px"
                height="35px"
                className="hidden lg:flex left-[480px] top-[93px] bg-[#E6F0FF] lg:w-[165px] lg:h-[35px]" 
              />
              <LabelBubble 
                text="Dankbaarheid" 
                description="Stilstaan bij wat er al is en dat bewust ervaren."
                border="#C9881C" 
                tail="left"
                width="150px"
                height="35px"
                className="hidden lg:flex left-[530px] top-[185px] bg-[#FDFFC9] lg:w-[150px] lg:h-[33px]" 
              />
              <LabelBubble 
                text="Zelfzorg" 
                description="Luisteren naar het lichaam en ruimte maken voor rust en herstel."
                border="#27A367" 
                tail="left"
                width="180px"
                height="35px"
                className="hidden lg:flex left-[483px] top-[310px] bg-[#D9FFDA] lg:w-[174px] lg:h-[33px]" 
              />

              <LabelBubble 
                text="Anders denken" 
                description="Vrij kijken, creatief denken en eigen ideeën volgen."
                border="#1B94BB" 
                tail="left"
                width="144px"
                height="35px"
                className="hidden lg:flex left-[120px] top-[108px] bg-[#CFF9FF] lg:w-[147px] lg:h-[35px]" 
              />
              <LabelBubble 
                text="Ondernemerschap" 
                description="Initiatief nemen, proberen en zelf oplossingen bedenken."
                border="#DA5522" 
                tail="left"
                width="144px"
                height="41px"
                className="hidden lg:flex left-[83px] top-[220px] bg-[#FFEED7] lg:w-[147px] lg:h-[38px]" 
              />
              <LabelBubble 
                text="Geldwijsheid" 
                description="Bewust omgaan met geld, spullen en waarde."
                border="#7927DD" 
                tail="left"
                width="145px"
                height="35px"
                className="hidden lg:flex left-[128px] top-[314px] bg-[#F0E9FF] lg:w-[150px] lg:h-[33px]" 
              />

              <div className="absolute left-1/2 top-[390px] lg:top-[420px] -translate-x-1/2">
                <Link
                  to="/preregistreer"
                  className="inline-flex items-center justify-center rounded-[8px] bg-[rgba(134,255,186,1)] px-6 lg:px-12 py-3 text-[14px] lg:text-[11px] font-black tracking-wide text-black shadow-[0_14px_24px_rgba(16,185,129,0.20)] ring-1 ring-black/10 transition hover:bg-[rgba(90,200,150,1)]"
                  style={{
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  PREREGISTREER HIER
                </Link>
              </div>

              {/* doodle arrows */}
              <DoodleArrowLeft className="pointer-events-none absolute left-[230px] top-[350px] lg:left-[140px] lg:top-[455px] h-12 w-14 lg:h-20 lg:w-20 opacity-90" />
              <DoodleArrowRight className="pointer-events-none absolute right-[230px] top-[410px] lg:top-[380px] h-12 w-14 lg:h-16 lg:w-20 rotate-12 lg:rotate-0 opacity-90" />

              {/* sparkles near CTA (right) */}
              <img 
                src="/landingpage/big-star.svg" 
                alt="" 
                className="pointer-events-none absolute right-[220px] top-[360px] lg:right-[180px] lg:top-[430px] opacity-90" 
                style={{ width: '60px', height: '55px' }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/*  Tabs + content block (like screenshot) */}
        <div className="mx-auto mt-[110px] max-w-[600px] lg:max-w-[1000px] md:mt-[100px] lg:mt-[180px]">
          <div className="relative">
            {/* Left arrow button */}
            {canScrollLeft && (
              <button
                type="button"
                onClick={scrollTabsLeft}
                className="absolute left-0 top-[17px] lg:top-[28px] z-10 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                aria-label="Scroll tabs left"
              >
                <ArrowIcon direction="left" className="h-[15px] w-[15px] lg:h-[22px] lg:w-[22px]" />
              </button>
            )}

            {/* Right arrow button */}
            {canScrollRight && (
              <button
                type="button"
                onClick={scrollTabsRight}
                className="absolute right-0 top-[17px] lg:top-[28px] z-10 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                aria-label="Scroll tabs right"
              >
                <ArrowIcon direction="right" className="h-[15px] w-[15px] lg:h-[22px] lg:w-[22px]" />
              </button>
            )}

            <div 
              ref={tabsContainerRef}
              className="flex gap-1 overflow-x-auto rounded-t-2xl py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              onScroll={checkScrollPosition}
            >
              <TabButton label="Emotionele gezondheid" active={active === "emotionele_gezondheid"} onClick={() => setActive("emotionele_gezondheid")} />
              <TabButton label="Veerkracht" active={active === "veerkracht"} onClick={() => setActive("veerkracht")} />
              <TabButton label="Dankbaarheid" active={active === "dankbaarheid"} onClick={() => setActive("dankbaarheid")} />
              <TabButton label="Zelfzorg" active={active === "zelfzorg"} onClick={() => setActive("zelfzorg")} />
              <TabButton label="Geldwijsheid" active={active === "geldwijsheid"} onClick={() => setActive("geldwijsheid")} />
              <TabButton label="Ondernemerschap" active={active === "ondernemerschap"} onClick={() => setActive("ondernemerschap")} />
              <TabButton label="Anders denken" active={active === "anders_denken"} onClick={() => setActive("anders_denken")} />
            </div>

            <div className="rounded-[15px] bg-white px-6 lg:px-10 py-5 lg:py-10">
              <div className="flex items-center gap-4 lg:gap-8">
                <div className="grid h-10 w-10 lg:h-20 lg:w-20 place-items-center flex-shrink-0">
                  {activeTopic.icon}
                </div>
                <div>
                  <p 
                    className="text-[16px] lg:text-[20px] text-black"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 700,
                      fontStyle: 'normal',
                      lineHeight: '24px',
                      letterSpacing: '-1px',
                    }}
                  >
                    {activeTopic.title}
                  </p>
                  <p 
                    className="mt-1 lg:mt-1 text-[14px] lg:text-[16px] text-black"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      lineHeight: '22px',
                      letterSpacing: '0%',
                      verticalAlign: 'middle'
                    }}
                  >
                    {activeTopic.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Bottom headline (Desktop) */}
        <div className="relative mt-16 hidden lg:flex items-center justify-center pb-6">
          <h3 
            className="text-center text-black"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(40px, 10vw, 62px)',
              lineHeight: '55.8px',
              letterSpacing: '-3.1px',
              textAlign: 'center',
              verticalAlign: 'middle'
            }}
          >
            Geen lesstof.<br />Levensstof.
          </h3>

        <img 
          src="/landingpage/big-star.svg" 
          alt="" 
          className="pointer-events-none absolute right-[210px] -top-[10px] opacity-90" 
          style={{ width: '60px', height: '55px' }}
          aria-hidden="true"
        /> 
        </div>

        {/* ✅ Mobile Star at the end - Centered */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center lg:hidden">
          <img 
            src="/landingpage/big-star.svg" 
            alt="" 
            className="pointer-events-none opacity-90" 
            style={{ width: '60px', height: '55px' }}
            aria-hidden="true"
          /> 
        </div>
      </div>
    </section>
  );
}
