"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "next-themes";
import { useIsClient } from "usehooks-ts";
import { Skeleton } from "./ui/skeleton";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const isClient = useIsClient();

  if (!isClient) {
    return (
      <div className="h-[700px] w-full mt-8 relative ">
        <Skeleton className="h-full bg-black/30 z-[1] w-[.5rem] mx-auto" />

        <Skeleton className="absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[5rem] h-[5rem] rounded-full z-20 bg-black/30" />
        <Skeleton className="absolute top-[15%] left-[54%] w-[460px] h-[175px] bg-black/30 transform  -translate-y-1/2" />

        <Skeleton className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[5rem] h-[5rem] rounded-full z-20  bg-black/30" />
        <Skeleton className="absolute top-1/2 right-[54%] w-[460px] h-[175px] bg-black/30 transform  -translate-y-1/2" />

        <Skeleton className="absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[5rem] h-[5rem] rounded-full z-20 bg-black/30" />
        <Skeleton className="absolute top-[85%] left-[54%] w-[460px] h-[175px] bg-black/30 transform  -translate-y-1/2" />
      </div>
    );
  }

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "#9ca3af" : "#9ca3af"}>
        {experiencesData.map(
          ({ date, description, icon: Icon, location, title }, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={date}
                icon={<Icon />}
                iconStyle={{
                  background: theme === "light" ? "white" : "rgb(17, 24, 39)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{title}</h3>
                <p className="font-normal !mt-0">{location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          )
        )}
      </VerticalTimeline>
    </section>
  );
}
