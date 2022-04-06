import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminManage = () => {
  return (
    <div>
      <div className="managecontainer">
        <div className="dash-container-header">
          <h2>PARTNERS</h2>
          <button>EDIT</button>
        </div>
        <div className="partner">
          <div className="partner-nav">
            <Link to={"doctors"} className="partner-nav-active">
              Doctors
            </Link>
            <Link to={"gym"}>Gym</Link>
            <Link to={"fitnesscoaches"}>Fitness Coaches</Link>
          </div>

          <div>
            <Outlet />
          </div>
        </div>
      </div>
      <div className="add-ctaBtn-container">
        {" "}
        <button className="btn btn-dark">Add Partner</button>
      </div>
    </div>
  );
};

export default AdminManage;
