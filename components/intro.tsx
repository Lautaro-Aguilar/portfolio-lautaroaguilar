"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionStore } from "@/store/use-active-section";
import { LampContainer } from "./ui/lamp";
import { useEffect, useState } from "react";
import ScrollCursor from "./ui/scroll-cursor";
import { cursorAnimation } from "@/lib/animations";
import { useMediaQuery } from "usehooks-ts";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionStore(
    (state) => state
  );
  const [isCursorActive, setIsCursorActive] = useState(false);

  const isMatch = useMediaQuery("(min-width: 768px)");

  return (
    <section
      ref={ref}
      id="home"
      className="w-screen text-center sm:mb-0 scroll-mt-[100rem] relative"
      onMouseEnter={() => setIsCursorActive(true)}
      onMouseLeave={() => setIsCursorActive(false)}
    >
      <ScrollCursor
        active={isCursorActive}
        animationVariant={cursorAnimation}
      />
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: isMatch ? 100 : 100 }}
          whileInView={{ opacity: 1, y: isMatch ? 0 : 250 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-b max-w-[60rem]  from-black to-gray-700 dark:from-white dark:to-gray-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl"
        >
          <span className="font-bold bg-gradient-to-t from-purple-950 dark:from-purple-700 via-purple-500 dark:via-purple-500 to-purple-700 dark:to-white drop-shadow-2xl bg-clip-text text-transparent">
            Hello, I&apos;m Lautaro,
          </span>{" "}
          a{" "}
          <span className="font-bold bg-gradient-to-t from-purple-950 dark:from-purple-700 via-purple-500 dark:via-purple-500 to-purple-700 dark:to-white drop-shadow-2xl bg-clip-text text-transparent">
            front-end developer
          </span>{" "}
          with{" "}
          <span className="font-bold bg-gradient-to-t from-purple-950 dark:from-purple-700 via-purple-500 dark:via-purple-500 to-purple-700 dark:to-white drop-shadow-2xl bg-clip-text text-transparent">
            2 years
          </span>{" "}
          of experience. I take pleasure in constructing{" "}
          <span className="italic">websites & apps,</span> with a primary focus
          on{" "}
          <span className="underline font-bold bg-gradient-to-t from-purple-950 dark:from-purple-700 via-purple-500 dark:via-purple-500 to-purple-700 dark:to-white drop-shadow-2xl bg-clip-text text-transparent">
            React (Next.js)
          </span>
          .
        </motion.h1>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 mt-4 text-lg font-medium"
          initial={{ opacity: 0.5, y: isMatch ? 100 : 100 }}
          whileInView={{ opacity: 1, y: isMatch ? 0 : 260 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <Link
            href="#contact"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            <button className="relative inline-flex p-0.5 h-16 overflow-hidden rounded-full focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-200 dark:bg-slate-950 px-3 py-1 text-sm font-medium text-primary backdrop-blur-3xl ">
                Contact me here
              </span>
            </button>
          </Link>

          <button className="relative inline-flex p-0.5 h-16 overflow-hidden rounded-full  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-200 dark:bg-slate-950 px-6 py-1 text-sm font-medium text-primary backdrop-blur-3xl ">
              Download CV
              <HiDownload className="opacity-80 ml-2 group-hover:translate-y-1 transition" />
            </span>
          </button>

          <div className="flex items-center justify-center gap-4">
            <a href="https://github.com" target="_blank">
              <button className="relative inline-flex p-0.5 h-16 overflow-hidden rounded-full  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-200 dark:bg-slate-950 px-5 py-1 text-sm font-medium text-primary backdrop-blur-3xl ">
                  <FaGithubSquare size={18} />
                </span>
              </button>
            </a>
            <a href="https://linkedin.com" target="_blank">
              <button className="relative inline-flex p-0.5 h-16 overflow-hidden rounded-full  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-200 dark:bg-slate-950 px-5 py-1 text-sm font-medium text-primary backdrop-blur-3xl ">
                  <BsLinkedin size={18} />
                </span>
              </button>
            </a>
          </div>
        </motion.div>
      </LampContainer>
    </section>
  );
}
