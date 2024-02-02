import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Test",
    description: "Test",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Test",
    description: "Test",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Test",
    description: "Test",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "https://via.placeholder.com/150",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Entre Ríos, Argentina",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: LuGraduationCap,
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Entre Ríos, Argentina",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: CgWorkAlt,
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Entre Ríos, Argentina",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: FaReact,
    date: "2021 - present",
  },
] as const;
