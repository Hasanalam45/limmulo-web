import React from "react";
import { FaCircle } from "react-icons/fa";
import {
  FiHeart,
  FiShield,
  FiSmile,
  FiFeather,
  FiDollarSign,
  FiBriefcase,
  FiZap,
  FiHelpCircle,
} from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type Item = {
  title: string;
  desc: string;
  bg: string;     // icon circle background
  color: string;  // icon color
  Icon: React.ElementType;
};

function DoodleArrow({ className }: { className?: string }) {
  return (
    <img
      src="/landingpage/aboutPage/about-arrow.svg"
      alt=""
      className={className}
      aria-hidden="true"
    />
  );
}

function PurpleIcon() {
  return (
    <div className="relative shrink-0">
      <FaCircle
        className="h-14 w-14 sm:h-16 sm:w-16 text-[#B46AE6] drop-shadow-[0_18px_40px_rgba(0,0,0,0.14)]"
        aria-hidden="true"
      />

      <span className="absolute left-1/2 top-1/2 grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-black/10">
        <FiHelpCircle className="h-4 w-4 text-black" />
      </span>
    </div>
  );
}

function ItemRow({ item }: { item: Item }) {
  const { Icon } = item;

  return (
    <div className="flex items-start gap-4 py-4">
      <div
        className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-black/5 shrink-0"
        style={{ background: item.bg }}
        aria-hidden="true"
      >
        <Icon className={`h-5 w-5 ${item.color}`} />
      </div>

      <div className="pt-0.5">
        <p className="text-[12px] sm:text-[12.5px] font-black tracking-tight text-black uppercase">
          {item.title}
        </p>
        <p className="mt-1 text-[11px] sm:text-[12px] leading-5 text-black/55">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function WhatWeDoSection() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: reduce
        ? { duration: 0 }
        : { staggerChildren: 0.08, delayChildren: 0.06 },
    },
  };

  const itemV: Variants = {
    hidden: reduce
      ? { opacity: 1, y: 0, scale: 1 }
      : { opacity: 0, y: 16, scale: 0.99 },
    show: reduce
      ? { opacity: 1, y: 0, scale: 1 }
      : { opacity: 1, y: 0, scale: 1 },
  };

  const items: Item[] = [
    {
      title: t('about.whatWeDo.items.emotionele_gezondheid.title'),
      desc: t('about.whatWeDo.items.emotionele_gezondheid.desc'),
      bg: "rgba(239, 68, 68, 0.14)",
      color: "text-rose-600",
      Icon: FiHeart,
    },
    {
      title: t('about.whatWeDo.items.veerkracht.title'),
      desc: t('about.whatWeDo.items.veerkracht.desc'),
      bg: "rgba(37, 99, 235, 0.14)",
      color: "text-blue-600",
      Icon: FiShield,
    },
    {
      title: t('about.whatWeDo.items.dankbaarheid.title'),
      desc: t('about.whatWeDo.items.dankbaarheid.desc'),
      bg: "rgba(245, 158, 11, 0.16)",
      color: "text-amber-600",
      Icon: FiSmile,
    },
    {
      title: t('about.whatWeDo.items.zelfzorg.title'),
      desc: t('about.whatWeDo.items.zelfzorg.desc'),
      bg: "rgba(34, 197, 94, 0.14)",
      color: "text-green-600",
      Icon: FiFeather,
    },
    {
      title: t('about.whatWeDo.items.geldwijsheid.title'),
      desc: t('about.whatWeDo.items.geldwijsheid.desc'),
      bg: "rgba(124, 58, 237, 0.14)",
      color: "text-violet-600",
      Icon: FiDollarSign,
    },
    {
      title: t('about.whatWeDo.items.ondernemerschap.title'),
      desc: t('about.whatWeDo.items.ondernemerschap.desc'),
      bg: "rgba(249, 115, 22, 0.14)",
      color: "text-orange-600",
      Icon: FiBriefcase,
    },
    {
      title: t('about.whatWeDo.items.anders_denken.title'),
      desc: t('about.whatWeDo.items.anders_denken.desc'),
      bg: "rgba(56, 189, 248, 0.16)",
      color: "text-sky-600",
      Icon: FiZap,
    },
  ];

  return (
    <section className="relative bg-[#FFFCFA] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1040px] px-4 sm:px-6">
        <div className="grid items-start gap-10 lg:gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT */}
          <motion.div
            className="pt-2 sm:pt-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.35, once: true }}
          >
            <motion.div variants={itemV} className="flex items-center gap-4 sm:gap-5">
              <PurpleIcon />
              <h2
                className="
                  font-black leading-[0.95] tracking-tight text-black
                  text-[40px] xs:text-[44px] sm:text-[54px] md:text-[58px]
                "
              >
                {t('about.whatWeDo.title')}
              </h2>
            </motion.div>

            <motion.p
              variants={itemV}
              className="
                mt-6 max-w-[460px] text-black/65 font-medium
                text-[11px] sm:text-[12px] lg:text-[13px]
                leading-6 sm:leading-7
              "
            >
              {t('about.whatWeDo.description')}
            </motion.p>

            <motion.div
              variants={itemV}
              className="mt-8"
              initial={false}
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={reduce ? { duration: 0 } : { duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <DoodleArrow className="pointer-events-none h-10 w-56 opacity-95" />
            </motion.div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            className="relative"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.35, once: true }}
          >
            <motion.div
              variants={itemV}
              whileHover={reduce ? undefined : { y: -6 }}
              className="relative rounded-[20px] bg-white px-6 py-6 sm:px-8 sm:py-7 shadow-[0_24px_70px_rgba(0,0,0,0.10)] transform-gpu"
            >
              {/* pink outline + soft glow */}
              <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-2 ring-pink-400/70 shadow-[0_0_0_10px_rgba(236,72,153,0.10)]" />

              <div className="relative divide-y divide-black/5">
                {items.map((it) => (
                  <motion.div key={it.title} variants={itemV}>
                    {/* slight delay feel via stagger on parent */}
                    <ItemRow item={it} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
