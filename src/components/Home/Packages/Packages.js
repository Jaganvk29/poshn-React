import React from "react";
import hand from "../../../Assets/Package_Icon/Hand.png";
import shoe from "../../../Assets/Package_Icon/SHOE.png";
import banana from "../../../Assets/Package_Icon/Banana.png";
import bottle from "../../../Assets/Package_Icon/Bottle.png";
import apple from "../../../Assets/Package_Icon/Apple.png";
import juice from "../../../Assets/Package_Icon/Juice.png";

import CardPackage from "./CardPackage";

const Packages = () => {
  return (
    <div>
      <div className=" packages">
        <div className=" packages-title-container flex bg-color-7">
          <div className=" wrapper flex packages-title">
            <h1>Let’s plan what’s work best for you</h1>
          </div>
        </div>

        <div className="wrapper package-Details-container">
          <div className="package-Details">
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
          </div>
        </div>
        <p className="package-tc">
          Insurances accepted (Kentucky Residents Only) | Private Pay Accepted
        </p>
      </div>
    </div>
  );
};

export default Packages;
