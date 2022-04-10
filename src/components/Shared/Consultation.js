import React, { useEffect, useContext } from "react";
import ModalContact from "../Home/Modal/ModalContact";
import PoshContext from "../../PoshContext";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Consultation = (props) => {
  const { isOpen, modalHandler } = useContext(PoshContext);

  //  MODAL BUTTON HANDLER POPUP
  const buttonClick = () => {
    console.log("CLICKED");
    modalHandler(true);
  };

  // FRAMER MOTION ANIMATION
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const textani = useAnimation();
  const paraani = useAnimation();

  useEffect(() => {
    if (inView) {
      paraani.start({
        y: 0,

        opacity: 1,

        transition: {
          ease: "easeInOut",
          duration: 0.5,
          bounce: 0.3,
        },
      });

      textani.start({
        opacity: 1,
        scale: 1,
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
        y: 100,
        opacity: 0,
      });

      textani.start({
        scale: 0.3,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      class="has-snap has-ani consultation flex flex-ai-c flex-jc-c"
    >
      <div class="wrapper">
        <div class="text">
          <motion.h1 animate={textani}>{props.title}</motion.h1>

          <motion.button
            animate={paraani}
            onClick={buttonClick}
            class="btn btn-dark contact-us-btn"
          >
            {props.btntext}
          </motion.button>
        </div>
      </div>
      <ModalContact open={isOpen}></ModalContact>
    </section>
  );
};

export default Consultation;
