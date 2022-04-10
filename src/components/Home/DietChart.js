import React, { useEffect } from "react";
import diet_chart_leaf from "../../Assets/svg/diet-chart-leaf.svg";
import citrusfruits from "../../Assets//citrusfruit.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const DietChart = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const textani = useAnimation();
  const paraani = useAnimation();

  useEffect(() => {
    if (inView) {
      paraani.start({
        x: 0,
        opacity: 1,

        transition: {
          ease: "easeInOut",
          duration: 0.5,
          bounce: 0.3,
        },
      });

      textani.start({
        x: 0,
        opacity: 1,

        transition: {
          ease: "easeInOut",

          duration: 0.5,
          bounce: 0.3,
        },
      });
    }
    // TO CHECK IF ITS NOT VIEW PORT TO REMOVE ANIMATION
    if (!inView) {
      paraani.start({
        x: -50,
        opacity: 0,
      });

      textani.start({
        x: 50,
        opacity: 0,
      });
    }
  }, [inView]);
  return (
    <section ref={ref} class="has-snap has-ani diet-chart bg-color-4">
      <img class="leaf" src={diet_chart_leaf} />
      <img class="img" src={citrusfruits} />
      <div class="wrapper">
        <div class="text">
          <motion.h1 animate={textani}>Your body is unique</motion.h1>
          <motion.p animate={paraani}>
            Your body is unique random diet plans from the internet won’t work
            for you. The winner of the Miss World 2000 pageant, Chopra is one of
            India's highest-paid and most popular entertainers. She has received
            numerous accolades, including two National Film Awards and five Film
            fare Awards.
          </motion.p>
          <Link to="/survey">
            <motion.button animate={textani} class="btn btn-toggle">
              Let’s find out what will work for you
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DietChart;
