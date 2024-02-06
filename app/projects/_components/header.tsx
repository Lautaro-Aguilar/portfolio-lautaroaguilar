"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

import { Home } from "lucide-react";

export default function ProjectsHeader() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] sm:w-32 w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem]  sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.6rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[2.2rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-32 flex-wrap items-center justify-center gap-y-1 text-lg font-medium text-gray-500  sm:flex-nowrap sm:gap-5">
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              className={clsx(
                "flex w-full items-center justify-center  hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
              )}
              href="/"
            >
              <Home className="mr-2" size={18} />
              Home
            </Link>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}