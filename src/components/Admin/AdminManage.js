import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminManage = () => {
  return (
    <div>
      <div className="managecontainer">
        <h2>PARTNERS</h2>
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
    </div>
  );
};

export default AdminManage;
