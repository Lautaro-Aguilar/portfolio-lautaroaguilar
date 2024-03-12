"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Download, ExternalLink } from "lucide-react";
import { Dictionary } from "@/lib/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { redirect } from "next/navigation";
import { useIsClient } from "usehooks-ts";
import { Skeleton } from "./skeleton";

export const HeroParallax = ({
  products,
  dictionary,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
  dictionary: Dictionary;
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header dictionary={dictionary} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 -mt-60 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.length === 5
            ? thirdRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateX}
                  key={product.title}
                />
              ))
            : firstRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateX}
                  key={product.title}
                />
              ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = ({ dictionary }: { dictionary: Dictionary }) => {
  const isClient = useIsClient();
  return (
    <div className="!z-50">
      <CardContainer className="py-20 inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black/80 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[50rem] h-auto rounded-xl py-2 px-6 border  ">
          <CardItem
            translateZ="40"
            className=" mt-4 flex items-center space-x-2.5 justify-between w-full"
          >
            <div className="flex items-center gap-2">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/avatar.webp" />
                <AvatarFallback>LA</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-xl font-bold text-neutral-600 dark:text-white">
                  Lautaro Aguilar
                </p>
                <p className="text-neutral-500 text-sm max-w-sm dark:text-neutral-300">
                  Frontend Developer
                </p>
                <p className="text-xs font-medium leading-none mt-1 underline underline-offset-2">
                  <a href="mailto:aguilarlautaroexequiel867@gmail.com">
                    aguilarlautaroexequiel867@gmail.com
                  </a>
                </p>
              </div>
            </div>
            {isClient ? (
              <Select
                onValueChange={(value) => redirect(`/${value}`)}
                defaultValue={dictionary.lang}
              >
                <SelectTrigger className="w-[65px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="es">ES</SelectItem>
                  <SelectItem value="en">EN</SelectItem>
                </SelectContent>
              </Select>
            ) : (
              <Skeleton className="w-16 h-10" />
            )}
          </CardItem>
          <CardItem translateZ="30" className="w-full mt-4">
            <p className="mb-3">
              {dictionary.about.title}{" "}
              <span className="font-medium inline-flex gap-x-1 items-center">
                Argentina
                <Image
                  src="arflag.svg"
                  alt="Argentinian Flag"
                  className="w-4 h-3"
                  width={16}
                  height={12}
                />
              </span>
            </p>
            <p>
              {dictionary.about.stack}
              <span className="font-medium">
                React, Next.js, Node.js, {dictionary.words.and} MongoDB
              </span>
              . {dictionary.about.familiar}{" "}
              <span className="font-medium inline-flex gap-x-1 items-center">
                Testing
              </span>{" "}
              {dictionary.about.reactTesting}
              <span className="font-medium inline-flex gap-x-1 items-center">
                ORM&apos;s
              </span>{" "}
              {dictionary.words.as}{" "}
              <span className="font-medium inline-flex gap-x-1 items-center">
                Prisma {dictionary.words.and} Drizzle
              </span>
              . {dictionary.about.looking}
              <span className="font-medium underline underline-offset-[3px]">
                {dictionary.about.position}
              </span>{" "}
              <span className="font-medium inline-flex gap-x-1 items-center">
                {dictionary.about.job}
              </span>
              .
            </p>
          </CardItem>
          <div className="flex justify-between items-center my-4">
            <CardItem translateZ={20} as="button" className="space-x-2">
              <Link
                href="https://www.linkedin.com/in/lautaro-aguilar-201b7b22b/"
                target="_blank"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 "
              >
                <BsLinkedin className="h-4 w-4 mr-2" /> LinkedIn
              </Link>
              <Link
                href="https://github.com/Lautaro-Aguilar"
                target="_blank"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 "
              >
                <BsGithub className="h-4 w-4 mr-2" /> GitHub
              </Link>
            </CardItem>
            {
              <CardItem translateZ={20} as="button" className="space-x-2">
                <a
                  href="/Curriculum-Lautaro-Aguilar.pdf"
                  download
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  <Download className="h-4 w-4 mr-2" /> {dictionary.buttons.cv}
                </a>

                <Link
                  href="mailto:aguilarlautaroexequiel867@gmail.com"
                  target="_blank"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {dictionary.buttons.contact}
                </Link>
              </CardItem>
            }
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
        target="_blank"
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
