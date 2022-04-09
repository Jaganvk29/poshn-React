import React, { useContext, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import PoshContext from "../../PoshContext";

const AdminNav = (props) => {
  const [navopen, setNavOpen] = useState(false);
  const { isLogged, authHandler } = useContext(PoshContext);

  const paramlins = useParams();
  console.log(paramlins);

  const hamburgerhandler = () => {
    setNavOpen(!navopen);
    console.log("YES THIS ONE");
  };

  const logoutBtnHadler = () => {
    authHandler(false);
  };

  return (
    <div>
      <header className="has-snap has-ani header bg-color-2">
        <nav className={navopen ? "nav open" : "nav"}>
          <div className="wrapper flex flex-jc-sb flex-ai-c bg-color-7">
            {/* <!-- Logo --> */}
            <NavLink to="/" className="logo logo-1"></NavLink>

            {/* <!--Desktop Menu --> */}
            <div className="menu-desk flex-jc-sb flex-ai-c">
              <NavLink
                to="/admin/main/dashboard"
                className={({ isActive }) =>
                  isActive ? "color-9" : "color-12"
                }
              >
                Dashboard
              </NavLink>

              {/* DIET GUIDE */}
              <NavLink
                to="/admin/main/about"
                className={({ isActive }) =>
                  isActive ? "color-9" : "color-12"
                }
              >
                About
              </NavLink>
            </div>

            {/* <!-- Button --> */}

            <Link to="/">
              <button onClick={logoutBtnHadler} className="cta btn btn-dark">
                Log Out
              </button>{" "}
            </Link>

            <button
              onClick={hamburgerhandler}
              className="hamburger flex flex-col flex-jc-sb"
            >
              <span className="bg-color-5"></span>
              <span className="bg-color-5"></span>
              <span className="bg-color-5"></span>
            </button>
          </div>

          {/* <!-- Hamburger --> */}

          {/* <!-- Overlay --> */}
          <div className="overlay"></div>

          {/* <!--Mobile Menu --> */}
          <div className="menu-mob">
            <NavLink
              onClick={() => setNavOpen(false)}
              to="admin/main/dashboard"
              className="color-7"
            >
              Dashboard
            </NavLink>
            <NavLink
              onClick={() => setNavOpen(false)}
              to="admin/main/about"
              className="color-NavLink"
            >
              profile
            </NavLink>
            <NavLink
              onClick={() => setNavOpen(false)}
              to="admin/main/myproducts"
              className="color-7"
            >
              My products
            </NavLink>
            <NavLink
              onClick={() => setNavOpen(false)}
              to="admin/main/faq"
              className="color-7"
            >
              Faq's
            </NavLink>
            <NavLink
              onClick={() => setNavOpen(false)}
              to="admin/main/blog"
              className="color-7"
            >
              Blogs
            </NavLink>
            <NavLink
              onClick={() => setNavOpen(false)}
              to="admin/main/dietsurvey"
              className="color-7"
            >
              Diet Survey
            </NavLink>
            <NavLink
              onClick={() => setNavOpen(false)}
              to="admin/main/bookings"
              className="color-7"
            >
              Bookings
            </NavLink>
            <NavLink
              onClick={() => setNavOpen(false)}
              to="admin/main/Responses"
              className="color-7"
            >
              Responses
            </NavLink>
            <NavLink
              onClick={() => setNavOpen(false)}
              to="admin/main/manage/doctors"
              className="color-7"
            >
              Manage
            </NavLink>
          </div>
        </nav>
      </header>
      <div>{props.children}</div>
    </div>
  );
};

export default AdminNav;
