import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import AdminHome from "./AdminHome";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboardmenu">
        <NavLink
          to={"myproducts"}
          className={({ isActive }) =>
            isActive ? "menuitem active" : "menuitem"
          }
        >
          <h2>My product</h2>
        </NavLink>
        <NavLink
          to={"faq"}
          className={({ isActive }) =>
            isActive ? "menuitem active" : "menuitem"
          }
        >
          <h2>FAQ'S</h2>
        </NavLink>
        <NavLink
          to={"blog"}
          className={({ isActive }) =>
            isActive ? "menuitem active" : "menuitem"
          }
        >
          <h2>Blogs</h2>
        </NavLink>
        <NavLink
          to={"dietsurvey"}
          className={({ isActive }) =>
            isActive ? "menuitem active" : "menuitem"
          }
        >
          <h2>Diet Survey</h2>
        </NavLink>
        <NavLink
          to={"bookings"}
          className={({ isActive }) =>
            isActive ? "menuitem active" : "menuitem"
          }
        >
          <h2>Bookings</h2>
        </NavLink>
        <NavLink
          to={"responses"}
          className={({ isActive }) =>
            isActive ? "menuitem active" : "menuitem"
          }
        >
          <h2>Responses</h2>
        </NavLink>
        <NavLink
          to={"manage/doctors"}
          className={({ isActive }) =>
            isActive ? "menuitem active" : "menuitem"
          }
        >
          <h2>Manage</h2>
        </NavLink>
      </div>

      <div className="DashboardTiles">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
