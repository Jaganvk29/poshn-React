import React, { useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import person from "../../Assets/person.jpg";
import "../../CSS/main.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const paramlins = useParams();
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
      <h1 className="title">About me</h1>
      <div className="wrapper">
        <motion.img animate={photoani} className="img" src={person} />
        <motion.div animate={textani} className="text">
          <h1>Hello, I’m Mudita</h1>
          <p>
            Mudita is an Indian diet specialist, singer, and film producer. The
            winner of the Miss World 2000 pageant, Chopra is one of India's
            highest-paid and most popular entertainers. She has received
            numerous accolades, including two National Film Awards and five Film
            fare Awards.
          </p>
          <button className="btn btn-toggle">
            <Link to={"/about"}>Read more</Link>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
