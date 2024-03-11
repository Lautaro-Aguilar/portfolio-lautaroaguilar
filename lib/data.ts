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

export const featuredProjectsData = [
  {
    title: "Place4Stream",
    description:
      "Developed Twitch clone with RTMP/WHIP streaming, authentication, real-time chat, follower system, live stats, blocking, streamer dashboard, and more.",
    tags: ["Next.js", "Prisma", "WebSockets", "MySQL", "Authentication"],
    imageUrl: "/place4stream.webp",
    href: "https://place4stream.vercel.app/",
    githubUrl: "https://github.com/Lautaro-Aguilar/place4stream",
  },
  {
    title: "Place4Notes",
    description:
      "Developed full-stack Trello clone with authentication, organizations, boards, lists, cards, activity logs, Unsplash integration, Stripe subscription, and MySQL database.",
    tags: ["Next.js", "MySQL", "Clerk", "Tailwind", "Prisma"],
    imageUrl: "/place4notes.webp",
    href: "https://place4notes.vercel.app/",
    githubUrl: "https://github.com/Lautaro-Aguilar/place4notes",
  },
  {
    title: "Next Auth v5",
    description:
      "Implemented robust user authentication system with 2FA, forgot password, email verification, OAuth login, roles, and user-friendly components for seamless user experience.",
    tags: ["Next.js", "RHF", "NextAuth", "Token", "Prisma"],
    imageUrl: "/nextauthv5.webp",
    href: "https://auth-lautaroaguilar.vercel.app/",
    githubUrl: "https://github.com/Lautaro-Aguilar/next-auth-v5",
  },
];

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
      "Developed a responsive web page with organized categories, detailed product info, and seamless Stripe-integrated checkout",
    tags: ["Next.js", "Zustand", "TailwindCSS", "Axios", "Stripe"],
    imageUrl: "/ecommercestore.webp",
    href: "https://ecommerce-store-zeta-eight.vercel.app/",
    githubUrl:
      "https://github.com/Lautaro-Aguilar/fullStack-ecommerce/tree/main/ecommerce-store",
  },
  {
    title: "Full Stack E-Commerce - Admin",
    description:
      "Admin dashboard, CMS, and store control, supporting multiple vendors and stores. Features category, product, filter, and billboard management, image uploads and analytics",
    tags: ["Next.js", "Clerk", "Prisma", "API", "Stripe"],
    imageUrl: "/ecommerceadmin.webp",
    href: "https://full-stack-ecommerce-kappa.vercel.app/",
    githubUrl:
      "https://github.com/Lautaro-Aguilar/fullStack-ecommerce/tree/main/ecommerce-admin",
  },
  {
    title: "Next Auth v5",
    description:
      "Implemented robust user authentication system with 2FA, forgot password, email verification, OAuth login, roles, and user-friendly components for seamless user experience.",
    tags: ["Next.js", "RHF", "NextAuth", "Token", "Prisma"],
    imageUrl: "/nextauthv5.webp",
    href: "https://auth-lautaroaguilar.vercel.app/",
    githubUrl: "https://github.com/Lautaro-Aguilar/next-auth-v5",
  },
  {
    title: "Place4Notes",
    description:
      "Developed full-stack Trello clone with authentication, organizations, boards, lists, cards, activity logs, Unsplash integration, Stripe subscription, and MySQL database.",
    tags: ["Next.js", "MySQL", "Clerk", "Tailwind", "Prisma"],
    imageUrl: "/place4notes.webp",
    href: "https://place4notes.vercel.app/",
    githubUrl: "https://github.com/Lautaro-Aguilar/place4notes",
  },
  {
    title: "Place4Form",
    description:
      "Built a responsive PageForm app with drag-and-drop designer, customizable fields, preview, shareable URL, and submission/validation features.",
    tags: ["Next.js", "Prisma", "ServerActions", "Dnd-kit", "Shadcn"],
    imageUrl: "/place4form.webp",
    href: "https://place4form.vercel.app/",
    githubUrl: "https://github.com/Lautaro-Aguilar/place4form",
  },
  {
    title: "Place4Clothes",
    description: "Online store to buy clothes with ordering system.",
    tags: ["Next.js", "Prisma", "ServerActions", "Stripe", "Zustand"],
    imageUrl: "/place4clothes.webp",
    href: "https://place4clothes.vercel.app/",
    githubUrl: "https://github.com/Lautaro-Aguilar/place4clothes",
  },
  {
    title: "Place4Stream",
    description:
      "Developed Twitch clone with RTMP/WHIP streaming, authentication, real-time chat, follower system, live stats, blocking, streamer dashboard, and more.",
    tags: ["Next.js", "Prisma", "WebSockets", "MySQL", "Authentication"],
    imageUrl: "/place4stream.webp",
    href: "https://place4stream.vercel.app/",
    githubUrl: "https://github.com/Lautaro-Aguilar/place4stream",
  },
] as const;

export const projectsHero = [
  {
    title: "Youtube Clon",
    thumbnail: "/ytclon.webp",
    link: "https://ytclonlautaroaguilar.netlify.app",
  },
  {
    title: "Full stack E-Commerce",
    thumbnail: "/ecommercesanity.webp",
    link: "https://ecommerce-nextjs-one-sable.vercel.app/",
  },
  {
    title: "Full Stack E-Commerce - Shop",
    thumbnail: "/ecommercestore.webp",
    link: "https://ecommerce-store-zeta-eight.vercel.app/",
  },
  {
    title: "Full Stack E-Commerce - Admin",
    thumbnail: "/ecommerceadmin.webp",
    link: "https://full-stack-ecommerce-kappa.vercel.app/",
  },
  {
    title: "Next Auth v5",
    thumbnail: "/nextauthv5.webp",
    link: "https://auth-lautaroaguilar.vercel.app/",
  },
  {
    title: "Place4Notes",
    thumbnail: "/place4notes.webp",
    link: "https://place4notes.vercel.app/",
  },
  {
    title: "Place4Form",
    thumbnail: "/place4form.webp",
    link: "https://place4form.vercel.app/",
  },
  {
    title: "Place4Clothes",
    thumbnail: "/place4clothes.webp",
    link: "https://place4clothes.vercel.app/",
  },
  {
    title: "Place4Stream",
    thumbnail: "/place4stream.webp",
    link: "https://place4stream.vercel.app/",
  },
];

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
    title: "Full-Stack Developer",
    location: "Gualeguaychú, Argentina",
    description:
      "Transformed e-commerce UI for optimal user experience. Integrated secure Stripe payments and automated order tracking. Created efficient custom API with Next.js. Achieved seamless mobile-desktop responsiveness, 20% conversion boost, and high-performance site. Collaborated in agile team for timely feature delivery. (Due to space constraints, detailed descriptions of additional projects are not included in this summary)",
    icon: CgWorkAlt,
    date: "2020 - 2024",
  },
  {
    title: "React Front-end Developer",
    location: "Entre Ríos, Argentina",
    description:
      "Transformed legacy .NET systems to React, boosting performance. Upgraded websites for SEO. Adept in agile methodologies. Successfully migrated outdated .NET program to a progressive web app. Demonstrated versatility in various projects.",
    icon: LuGraduationCap,
    date: "2020 - Present",
  },
  {
    title: "Full-Stack Developer",
    location: "Entre Ríos, Argentina",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: FaReact,
    date: "2020 - present",
  },
] as const;
