"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { projectsData } from "@/lib/data";
import { PinContainer } from "@/components/ui/3d-pin";

type ProjectProps = (typeof projectsData)[number];

export const ProjectCard = ({
  description,
  githubUrl,
  href,
  imageUrl,
  tags,
  title,
}: ProjectProps) => {
  return (
    <article className="w-full h-[400px]">
      <PinContainer title={title} href={href} className="w">
        <div className="flex basis-full flex-col p-2 gap-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[300px] md:w-[350px] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-primary">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-primary/80 ">{description}</span>
          </div>
          <div className="relative h-[300px] w-full ">
            <Image
              fill
              className="object-cover object-center rounded-t-lg group-hover:brightness-50 transition"
              alt="project image"
              src={imageUrl}
            />
          </div>
        </div>
        <Button variant="outline" className="w-full p-2">
          <FaGithub className="mr-2 " size={18} />
          <Link href={githubUrl} target="_blank">
            View code
          </Link>
        </Button>
      </PinContainer>
    </article>
  );
};

{
  /* <div className="relative h-[300px] ">
        <Image
          fill
          className="object-cover object-center rounded-t-lg group-hover:brightness-50 transition hidden sm:block"
          alt="project image"
          src={imageUrl}
        />
      </div>
      <motion.div
        className="bg-gray-50 w-full absolute bottom-0 rounded-t-xl p-4 rounded-b-lg overflow-hidden shadow-2xl !min-h-[270px] sm:!min-h-[100px] dark:text-white dark:bg-gray-900/90 "
        initial={{
          height: "100px",
        }}
        whileHover={{
          height: "270px",
        }}
      >
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
          {description}
        </p>
        <ul className="flex-wrap py-2 gap-2 sm:mt-auto hidden sm:flex">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="py-2 sm:py-0 flex items-center self-end">
          <Button variant="outline" className="w-full rounded-r-none">
            <FaGithub className="mr-2 " size={18} />
            <Link href={githubUrl} target="_blank">
              View code
            </Link>
          </Button>
          <Button variant="outline" className="w-full rounded-l-none">
            <ExternalLink className="mr-2 " size={18} />
            <Link href={href} target="_blank">
              Live preview
            </Link>
          </Button>
        </div>
      </motion.div> */
}
