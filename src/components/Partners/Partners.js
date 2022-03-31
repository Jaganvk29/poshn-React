import React from "react";

import Footer from "../Footer/Footer";
import PartnerGym from "./PartnerGym";
import { Link, NavLink, Routes, Route, Outlet } from "react-router-dom";
const Partners = () => {
  return (
    <div className="partner-container">
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
      <Footer />
    </div>
  );
};

export default Partners;
