import React from "react";
import { motion } from "framer-motion";

import { Link, Outlet } from "react-router-dom";
const Partners = () => {
  return (
    <motion.div
      className="partner-container"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="wrapper">
        <div className="partner">
          <div className="partner-title">
            <h1>Our Partners</h1>
          </div>
          <div className="partner-nav">
            <Link to={"/ourpartners/doctors"} className="partner-nav-active">
              Doctors
            </Link>
            <Link to={"/ourpartners/gym"}>Gym</Link>
            <Link to={"/ourpartners/fitnesscoaches"}>Fitness Coaches</Link>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </motion.div>
  );
};

export default Partners;
