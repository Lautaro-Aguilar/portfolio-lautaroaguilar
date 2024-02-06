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
    title: "Youtube Clon",
    description:
      "Developed YouTube clone with a modern, responsive UI. Integrated RapidAPI for seamless channel search, real-time updates and video playback.",
    tags: ["React", "Vite", "Typescript", "RapidAPI", "TailwindCSS"],
    imageUrl: "/ytclon.webp",
    href: "https://ytclonlautaroaguilar.netlify.app",
    githubUrl: "https://github.com/Lautaro-Aguilar/youtube-clone",
  },
  {
    title: "Full stack E-Commerce",
    description:
      "Crafted a responsive ecommerce with modern design, CMS for on-the-go product management, advanced cart features, and crucial Stripe integration for real payments.",
    tags: ["React", "TypeScript", "Next.js", "Sanity", "Stripe"],
    imageUrl: "/ecommercesanity.webp",
    href: "https://ecommerce-nextjs-one-sable.vercel.app/",
    githubUrl: "https://github.com/Lautaro-Aguilar/ecommerce-nextjs",
  },
  {
    title: "Full Stack E-Commerce - Shop",
    description:
      "Crafted a responsive web page with organized categories, detailed product info, and seamless Stripe-integrated checkout",
    tags: ["Next.js", "Zustand", "TailwindCSS", "Axios", "Stripe"],
    imageUrl: "/ecommercestore.webp",
    href: "https://ecommerce-store-zeta-eight.vercel.app/",
    githubUrl:
      "https://github.com/Lautaro-Aguilar/fullStack-ecommerce/tree/main/ecommerce-store",
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
