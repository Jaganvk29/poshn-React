import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import AdminHome from "./AdminHome";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboardmenu2"></div>
      <div className="dashboardmenu">
        <Link to={"myproducts"} className="menuitem">
          <h2>My product</h2>
        </Link>
        <Link to={"faq"} className="menuitem">
          <h2>FAQ'S</h2>
        </Link>
        <Link to={"blog"} className="menuitem">
          <h2>Blogs</h2>
        </Link>
        <div className="menuitem">
          <h2>Diet Survey</h2>
        </div>
        <div className="menuitem">
          <h2>Bookings</h2>
        </div>
        <div className="menuitem">
          <h2>Responses</h2>
        </div>
        <div className="menuitem">
          <h2>Manage</h2>
        </div>
      </div>

      <div className="DashboardTiles">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
