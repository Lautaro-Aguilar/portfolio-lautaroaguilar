"use client";

import React from "react";
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import Project from "./project";

import { featuredProjectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "./ui/inifinite-moving-cards";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Featured Projects</SectionHeading>
      <InfiniteMovingCards />
      <Button
        variant="link"
        className="text-xl mx-auto mt-5 flex items-center justify-center"
      >
        <motion.a
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          href="/projects"
        >
          View all projects
        </motion.a>
      </Button>
    </section>
  );
}
