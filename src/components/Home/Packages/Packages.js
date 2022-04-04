import React, { useEffect } from "react";
import hand from "../../../Assets/Package_Icon/Hand.png";
import shoe from "../../../Assets/Package_Icon/SHOE.png";
import banana from "../../../Assets/Package_Icon/Banana.png";
import bottle from "../../../Assets/Package_Icon/Bottle.png";
import apple from "../../../Assets/Package_Icon/Apple.png";
import juice from "../../../Assets/Package_Icon/Juice.png";
import CardPackage from "./CardPackage";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Packages = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
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
    <div>
      <div ref={ref} className=" packages">
        <div className=" packages-title-container flex bg-color-7">
          <div className=" wrapper flex packages-title">
            <motion.h1 animate={textani}>
              Let’s plan what’s work best for you
            </motion.h1>
          </div>
        </div>

        <div className="wrapper package-Details-container">
          <motion.div animate={paraani} className="package-Details">
            <CardPackage
              img={hand}
              titleText={"Discovery call"}
              subTitle={"Up to 15 minutes"}
              btnText={"Select discovery call"}
            />

            <CardPackage
              img={shoe}
              titleText={"Silver package"}
              subTitle={
                "Includes Initial Nutrition Assessment (Up to 75 minutes) and one follow up session (30 minutes)"
              }
              btnText={"Select Silver Package"}
            />

            <CardPackage
              img={banana}
              titleText={"Gold package"}
              subTitle={
                "Includes Initial Nutrition Assessment (Up to 75 minutes) and 2 follow up sessions (30 minutes each)"
              }
              btnText={"Select Gold Package"}
            />

            <CardPackage
              img={bottle}
              titleText={"Platinum package"}
              subTitle={
                "Includes Initial Nutrition Assessment (Up to 75 minutes) and 4 follow up sessions (30 minutes each)"
              }
              btnText={"Select Platinum package"}
            />
            <CardPackage
              img={apple}
              titleText={"Dimond package"}
              subTitle={
                "Includes Initial Nutrition Assessment (Up to 75 minutes) and one follow up session (30 minutes)"
              }
              btnText={"Select Dimond package"}
            />
            <CardPackage
              img={juice}
              titleText={"Other services"}
              subTitle={
                "Meal Planning; Pantry Reorganization; Refrigerator/Freezer and Kitchen Reorganization; Specialty Grocery Store Tours"
              }
              btnText={"Select Gold Package"}
            />
          </motion.div>
        </div>
        <motion.p animate={textani} className="package-tc">
          Insurances accepted (Kentucky Residents Only) | Private Pay Accepted
        </motion.p>
      </div>
    </div>
  );
};

export default Packages;
