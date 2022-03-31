import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <div>
      <header className="has-snap has-ani header bg-color-7">
        <nav className="nav">
          <div className="wrapper flex flex-jc-sb flex-ai-c bg-color-4">
            {/* <!-- Logo --> */}
            <NavLink to="/" className="logo logo-1"></NavLink>

            {/* <!-- Hamburger --> */}
            <button className="hamburger flex flex-col flex-jc-sb">
              <span className="bg-color-5"></span>
              <span className="bg-color-5"></span>
              <span className="bg-color-5"></span>
            </button>

            {/* <!--Desktop Menu --> */}
            <div className="menu-desk flex-jc-sb flex-ai-c">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "activeNav" : "color-5"
                }
              >
                About
              </NavLink>

              {/* DIET GUIDE */}
              <NavLink
                to="/dietguide"
                className={({ isActive }) =>
                  isActive ? "activeNav" : "color-5"
                }
              >
                Diet guide
              </NavLink>
              {/* OUR PARTNERS */}
              <NavLink
                to="/ourpartners/doctors"
                className={({ isActive }) =>
                  isActive ? "activeNav" : "color-5"
                }
              >
                Our partners
              </NavLink>
              {/* BLOGS */}
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "activeNav" : "color-5"
                }
              >
                Blogs
              </NavLink>
              {/* SURVEY */}
              <NavLink
                to="/blog/post1"
                className={({ isActive }) =>
                  isActive ? "activeNav" : "color-5"
                }
              >
                Survey
              </NavLink>
            </div>

            {/* <!-- Button --> */}
            <button className="cta btn btn-light">Let's get healthy</button>
          </div>

          {/* <!-- Overlay --> */}
          <div className="overlay"></div>

          {/* <!--Mobile Menu --> */}
          <div className="menu-mob">
            <a href="/HTML/about.html" className="color-5">
              About
            </a>
            <a href="#" className="color-5">
              Diet guide
            </a>
            <a href="#" className="color-5">
              Our partners
            </a>
            <a href="#" className="color-5">
              Blogs
            </a>
            <a href="#" className="color-5">
              Survey
            </a>
          </div>
        </nav>
      </header>
      <div>{props.children}</div>
    </div>
  );
};

export default Nav;
