import React, { useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";

const Nav = (props) => {
  const [navopen, setNavOpen] = useState(false);

  const paramlins = useParams();
  console.log(paramlins);

  const hamburgerhandler = () => {
    setNavOpen(!navopen);
    console.log("YES THIS ONE");
  };

  return (
    <div>
      <header className="has-snap has-ani header bg-color-7">
        <nav className={navopen ? "nav open" : "nav"}>
          <div className="wrapper flex flex-jc-sb flex-ai-c bg-color-7">
            {/* <!-- Logo --> */}
            <NavLink to="/" className="logo logo-1"></NavLink>

            {/* <!-- Hamburger --> */}
            <button
              onClick={hamburgerhandler}
              className="hamburger flex flex-col flex-jc-sb"
            >
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
                to={`/blog/1`}
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
            <NavLink
              onClick={() => setNavOpen(false)}
              to="/about"
              className="color-7"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setNavOpen(false)}
              to="/dietguide"
              className="color-NavLink"
            >
              Diet guide
            </NavLink>
            <NavLink
              onClick={() => setNavOpen(false)}
              to="/ourpartners/doctors"
              className="color-7"
            >
              Our partners
            </NavLink>
            <NavLink
              onClick={() => setNavOpen(false)}
              to="/blog"
              className="color-7"
            >
              Blogs
            </NavLink>
            <NavLink
              onClick={() => setNavOpen(false)}
              to={`/blog/1`}
              className="color-7"
            >
              Survey
            </NavLink>
          </div>
        </nav>
      </header>
      <div>{props.children}</div>
    </div>
  );
};

export default Nav;
