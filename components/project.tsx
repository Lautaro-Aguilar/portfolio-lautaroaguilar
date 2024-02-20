import Image from "next/image";
import { featuredProjectsData } from "@/lib/data";

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, Tv } from "lucide-react";

type ProjectProps = (typeof featuredProjectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  href,
}: ProjectProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-purple-800/[0.5] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] min-h-[450px] rounded-xl p-6 border flex flex-col ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 min-h-[80px]"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full h-52 mt-4 relative">
          <Image
            src={imageUrl}
            fill
            sizes="100%"
            className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-auto">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl  text-primary-foreground bg-primary  text-xs font-semibold  flex items-center gap-x-2"
          >
            Code
            <FaGithub />
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold  flex items-center gap-x-2"
          >
            Demo
            <ExternalLink size={16} />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
