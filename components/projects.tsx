"use client";

import React from "react";
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import Project from "./project";

import { featuredProjectsData, projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "./ui/inifinite-moving-cards";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Featured Projects</SectionHeading>
      {/* <InfiniteMovingCards /> */}
      <BentoGrid className="max-w-4xl mx-auto">
        {projectsData.map((item, i) => {
          console.log(i === 3);
          return (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.title}
              icon={item.tags[0]}
              imageUrl={item.imageUrl}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          );
        })}
      </BentoGrid>
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
