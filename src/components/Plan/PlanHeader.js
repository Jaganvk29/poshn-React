import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PlanHeader = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const leftani = useAnimation();
  const rightani = useAnimation();

  useEffect(() => {
    // TO CHECK IF ITS VIEW PORT TO START ANIMATION
    if (inView) {
      rightani.start({
        x: 0,
        opacity: 1,

        transition: {
          ease: "easeInOut",
          duration: 0.5,
        },
      });

      leftani.start({
        ease: "easeInOut",
        x: 0,
        opacity: 1,

        transition: {
          duration: 0.5,
        },
      });
    }
    // TO CHECK IF ITS NOT VIEW PORT TO REMOVE ANIMATION
    if (!inView) {
      rightani.start({
        x: -100,
        opacity: 0,
      });

      leftani.start({
        x: 100,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className="plan-img">
      <div className="flex">
        <span>
          <motion.h1 animate={leftani}>PACKAGE</motion.h1>
        </span>
        <span>
          <h1> /</h1>
        </span>
        <span>
          <motion.h1 animate={rightani}>PLAN</motion.h1>
        </span>
      </div>
    </div>
  );
};

export default PlanHeader;
