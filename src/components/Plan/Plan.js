import React from "react";
import silver from "../../Assets/package_img/silver.png";
import gold from "../../Assets/package_img/gold.png";
import diamond from "../../Assets/package_img/Diamond.png";
import platinum from "../../Assets/package_img/platinum.png";
import diab from "../../Assets/package_img/diab.png";
import nut from "../../Assets/package_img/nut.png";

import Consultation from "../Shared/Consultation";
import Footer from "../Footer/Footer";
import PlanCard from "./PlanCard";

const Plan = () => {
  return (
    <div className="plan-container">
      <div className="plan-img">
        <h1>PACKAGE / PLAN</h1>
      </div>
      <div className="wrapper">
        <div className="plan">
          <h1 className="color-7">
            All sessions are virtual via Zoom, WhatsApp or Phone Call
          </h1>

          <div className="plan-card-container">
            <PlanCard
              planimg={silver}
              planTitle="Silver Package"
              plancontent="Includes Initial Nutrition Assessment (Up to 75 minutes) and one
                follow up session (30 minutes)"
              planbtnname="Book free consultation"
            />
            <PlanCard
              planimg={gold}
              planTitle="Gold Package"
              plancontent="Includes Initial Nutrition Assessment (Up to 75 minutes) and 2 follow up session (30minutes)"
              planbtnname="Book free consultation"
            />

            <PlanCard
              planimg={diamond}
              planTitle="Diamond Package"
              plancontent="Includes Initial Nutrition Assessment (Up to 75 minutes) and 4 follow up session (30minutes)"
              planbtnname="Book free consultation"
            />

            <PlanCard
              planimg={platinum}
              planTitle="Platinum Package"
              plancontent="Includes Initial Nutrition Assessment (Up to 75 minutes) and one
                follow up session (30 minutes)"
              planbtnname="Book free consultation"
            />

            <PlanCard
              planimg={diab}
              planTitle="Diabetes nutrition coaching package"
              plancontent="Includes Initial Nutrition Assessment (Up to 75 minutes)and 2 follow up sessions (45 minutes each). Also includes one grocery store tour of client’s choice and 1session of Pantry Reorganization."
              planbtnname="Book free consultation"
            />

            <PlanCard
              planimg={nut}
              planTitle="Fit bride(wedding package)"
              plancontent="4/8/12 week consultation for weight management as well as vibrantand glowing skin. This package is especially curated for Bride. Bundle pricing for family/Bridesmaidsavailable."
              planbtnname="Book free consultation"
            />
          </div>
        </div>
      </div>
      <Consultation
        title="I will help you to achieve your health goals"
        btntext="Book Free Consultation"
      />
    </div>
  );
};

export default Plan;
