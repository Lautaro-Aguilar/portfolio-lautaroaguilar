import { motion as m } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useTheme } from "next-themes";
import { Meteors } from "./meteors";

export default function ScrollCursor({
  active,
  animationVariant,
  zIndex,
}: {
  active: boolean;
  animationVariant: any;
  zIndex?: string;
}) {
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    //Move cursor
    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  }, []);

  return (
    <div className={`hidden lg:block`}>
      <m.div
        ref={cursor}
        className={`w-[80px] h-[80px] rounded-full 
        dark:bg-purple-950 bg-purple-300 text-primary transition-colors uppercase absolute ${
          zIndex || "z-30"
        } flex items-center justify-center text-[14px] font-medium pointer-events-none`}
        variants={animationVariant}
        initial="initial"
        animate={active ? "enter" : "closed"}
      />
      <m.div
        ref={cursorLabel}
        className={`dark:text-white text-purple-950 font-bold text-lg w-[80px] h-[80px] rounded-full bg-transparent uppercase absolute ${
          zIndex || "z-30"
        } flex items-center justify-center text-[12px] tracking-[0.84px] pointer-events-none`}
        variants={animationVariant}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        Scroll
      </m.div>
    </div>
  );
}
