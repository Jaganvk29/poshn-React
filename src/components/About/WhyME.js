import React, { useEffect } from "react";
import whymeimg from "../../Assets/Why me_.png";
import food from "../../Assets/food.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyME = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const textani = useAnimation();

  useEffect(() => {
    // TO CHECK IF ITS VIEW PORT TO START ANIMATION
    if (inView) {
      textani.start({
        ease: "easeInOut",
        y: 0,
        opacity: 1,

        transition: {
          duration: 0.5,
          bounce: 0.3,
        },
      });
    }
    // TO CHECK IF ITS NOT VIEW PORT TO REMOVE ANIMATION
    if (!inView) {
      textani.start({
        y: 100,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <section ref={ref} className="why-me">
      <div className="wrapper">
        <div className="content">
          <motion.img animate={textani} className="img-title" src={whymeimg} />
          <div className="text mx-auto">
            <img className="border-1 shadow-1" src={food} />
            <h1>I can help you to achieve goals</h1>
            <p>
              Mudita is an Indian diet specialist, singer, and film producer.
              The winner of the Miss World 2000 pageant, Chopra is one of
              India's highest-paid and most popular entertainers. She has
              received numerous accolades, including two national film awards
              and five film fare awards. Mudita is an Indian diet specialist,
              singer, and film producer. The winner of the Miss World 2000
              pageant, Chopra is one of India's highest-paid and most popular
              entertainers. She has received numerous accolades, including two
              national Film awards and five film fare awards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyME;
