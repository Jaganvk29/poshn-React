import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../CSS/main.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AboutData } from "../About/AboutData";

const AboutMe = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const textani = useAnimation();
  const photoani = useAnimation();

  useEffect(() => {
    // TO CHECK IF ITS VIEW PORT TO START ANIMATION
    if (inView) {
      photoani.start({
        x: 0,
        opacity: 1,

        transition: {
          ease: "easeInOut",
          duration: 0.5,
          bounce: 0.3,
        },
      });

      textani.start({
        ease: "easeInOut",
        x: 0,
        opacity: 1,

        transition: {
          duration: 0.5,
          bounce: 0.3,
        },
      });
    }
    // TO CHECK IF ITS NOT VIEW PORT TO REMOVE ANIMATION
    if (!inView) {
      photoani.start({
        x: -100,
        opacity: 0,
      });

      textani.start({
        x: 100,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <section ref={ref} className="has-snap has-ani about-me-section">
      {props.header && <h1 className="title">About me</h1>}
      <div className="wrapper">
        <motion.img
          animate={photoani}
          className="img"
          src={AboutData[0].aboutprof}
        />
        <motion.div animate={textani} className="text">
          <h1>Hello, I’m Mudita</h1>
          <p>{AboutData[0].aboutdesc}</p>
          {props.readmorebtn && (
            <Link to={"/about"}>
              <button className="btn btn-toggle">Read more</button>
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
