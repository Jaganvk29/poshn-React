import React, { useContext, useEffect } from "react";
import silver from "../../Assets/package_img/silver.png";
import gold from "../../Assets/package_img/gold.png";
import diamond from "../../Assets/package_img/Diamond.png";
import platinum from "../../Assets/package_img/platinum.png";
import diab from "../../Assets/package_img/diab.png";
import nut from "../../Assets/package_img/nut.png";
import PoshContext from "../../PoshContext";
import Consultation from "../Shared/Consultation";
import PlanCard from "./PlanCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PlanHeader from "./PlanHeader";

const Plan = () => {
  const { isOpen, modalHandler } = useContext(PoshContext);

  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  const photoani = useAnimation();

  useEffect(() => {
    // TO CHECK IF ITS VIEW PORT TO START ANIMATION
    if (inView) {
      photoani.start({
        ease: "easeInOut",
        y: 0,
        opacity: 1,

        transition: {
          duration: 0.7,
          bounce: 0.3,
        },
      });
    }
    // TO CHECK IF ITS NOT VIEW PORT TO REMOVE ANIMATION
    if (!inView) {
      photoani.start({
        y: 100,
        opacity: 0,
      });
    }
  }, [inView]);
  const buttonClick = () => {
    modalHandler(true);
  };

  return (
    <div>
      <div className="plan-container">
        {/* HERO FOR PLAN SECTION  */}
        <PlanHeader />

        <div className="wrapper">
          <div ref={ref} className="plan">
            <h1 className="color-7">
              All sessions are virtual via Zoom, WhatsApp or Phone Call
            </h1>

            <motion.div animate={photoani} className="plan-card-container">
              <PlanCard
                planimg={silver}
                planTitle="Silver Package"
                plancontent="Includes Initial Nutrition Assessment (Up to 75 minutes) and one
                follow up session (30 minutes)"
                planbtnname="Book free consultation"
                onPress={buttonClick}
              />

              <PlanCard
                planimg={gold}
                planTitle="Gold Package"
                plancontent="Includes Initial Nutrition Assessment (Up to 75 minutes) and 2 follow up session (30minutes)"
                planbtnname="Book free consultation"
                onPress={buttonClick}
              />

              <PlanCard
                planimg={diamond}
                planTitle="Diamond Package"
                plancontent="Includes Initial Nutrition Assessment (Up to 75 minutes) and 4 follow up session (30minutes)"
                planbtnname="Book free consultation"
                onPress={buttonClick}
              />

              <PlanCard
                planimg={platinum}
                planTitle="Platinum Package"
                plancontent="Includes Initial Nutrition Assessment (Up to 75 minutes) and one
                follow up session (30 minutes)"
                planbtnname="Book free consultation"
                onPress={buttonClick}
              />

              <PlanCard
                planimg={diab}
                planTitle="Diabetes nutrition coaching package"
                plancontent="Includes Initial Nutrition Assessment (Up to 75 minutes)and 2 follow up sessions (45 minutes each). Also includes one grocery store tour of client’s choice and 1session of Pantry Reorganization."
                planbtnname="Book free consultation"
                onPress={buttonClick}
              />

              <PlanCard
                planimg={nut}
                planTitle="Fit bride(wedding package)"
                plancontent="4/8/12 week consultation for weight management as well as vibrantand glowing skin. This package is especially curated for Bride. Bundle pricing for family/Bridesmaidsavailable."
                planbtnname="Book free consultation"
                onPress={buttonClick}
              />
            </motion.div>
          </div>
        </div>
        <Consultation
          title="I will help you to achieve your health goals"
          btntext="Book Free Consultation"
        />
      </div>
    </div>
  );
};

export default Plan;
