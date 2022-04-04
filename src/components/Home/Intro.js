import React, { useEffect } from "react";
import heroimg from "../../Assets/cute-asian.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Intro = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const textani = useAnimation();
  const photoani = useAnimation();

  useEffect(() => {
    // TO CHECK IF ITS VIEW PORT TO START ANIMATION
    if (inView) {
      textani.start({
        x: 0,
        opacity: 1,

        transition: {
          ease: "easeInOut",
          duration: 0.7,
          bounce: 0.3,
        },
      });

      photoani.start({
        ease: "easeInOut",
        x: 0,
        opacity: 1,

        transition: {
          duration: 0.7,
          bounce: 0.3,
        },
      });
    }
    // TO CHECK IF ITS NOT VIEW PORT TO REMOVE ANIMATION
    if (!inView) {
      textani.start({
        x: -200,
        opacity: 0,
      });

      photoani.start({
        x: 200,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="intro-section has-ani flex flex-jc-c bg-color-3"
    >
      <div className="leaf-1"></div>
      <div className="leaf-2"></div>
      <div className="wrapper">
        <motion.div animate={textani} className="text flex flex-col flex-jc-c">
          <h1>Balanced nutrition for a lean & fit body</h1>
          <p>
            Because here's the thing: It doesn't deserve you. And it can
            seriously damage your body. Let's build habits that love you back
            instead.
          </p>
          <div>
            <button className="btn btn-dark">Let's get healthy</button>
          </div>
        </motion.div>
        <motion.div animate={photoani} className="img-container">
          <img className="img" src={heroimg} />
          <div className="fruit fruit-ani-2"></div>
          <div className="leaf-3"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
