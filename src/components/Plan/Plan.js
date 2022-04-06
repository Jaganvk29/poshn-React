import React from "react";
import silver from "../../Assets/package_img/silver.png";
import Consultation from "../Home/Consultation";
import Footer from "../Footer/Footer";

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
            <div className="plan-card">
              <img src={silver} />
              <h2>Silver Package</h2>
              <p>
                Includes Initial Nutrition Assessment (Up to 75 minutes) and one
                follow up session (30 minutes)
              </p>
              <button className="btn btn-dark plan-card-btn">
                Book free consultation
              </button>
            </div>

            <div className="plan-card">
              <img src={silver} />
              <h2>Silver Package</h2>
              <p>
                Includes Initial Nutrition Assessment (Up to 75 minutes) and one
                follow up session (30 minutes)
              </p>
              <button className="btn btn-dark plan-card-btn">
                Book free consultation
              </button>
            </div>

            <div className="plan-card">
              <img src={silver} />
              <h2>Silver Package</h2>
              <p>
                Includes Initial Nutrition Assessment (Up to 75 minutes) and one
                follow up session (30 minutes)
              </p>
              <button className="btn btn-dark plan-card-btn">
                Book free consultation
              </button>
            </div>

            <div className="plan-card">
              <img src={silver} />
              <h2>Silver Package</h2>
              <p>
                Includes Initial Nutrition Assessment (Up to 75 minutes) and one
                follow up session (30 minutes)
              </p>
              <button className="btn btn-dark plan-card-btn">
                Book free consultation
              </button>
            </div>
            <div className="plan-card">
              <img src={silver} />
              <h2>Silver Package</h2>
              <p>
                Includes Initial Nutrition Assessment (Up to 75 minutes) and one
                follow up session (30 minutes)
              </p>
              <button className="btn btn-dark plan-card-btn">
                Book free consultation
              </button>
            </div>
            <div className="plan-card">
              <img src={silver} />
              <h2>Silver Package</h2>
              <p>
                Includes Initial Nutrition Assessment (Up to 75 minutes) and one
                follow up session (30 minutes)
              </p>
              <button className="btn btn-dark plan-card-btn">
                Book free consultation
              </button>
            </div>
          </div>
        </div>
      </div>
      <Consultation />
      <Footer />
    </div>
  );
};

export default Plan;
