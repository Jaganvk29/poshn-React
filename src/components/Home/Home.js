import React from "react";
import AboutMe from "./AboutMe";
import Consultation from "./Consultation";
import DietChart from "./DietChart";
import Intro from "./Intro";
import LatestBlogs from "./LatestBlogs";
import Footer from "../Footer/Footer";
import Packages from "./Packages/Packages";
import LatestBlogAbout from "../About/LatestBlogAbout";

const Home = () => {
  return (
    <div>
      <Intro />
      <AboutMe />
      <DietChart />
      <Consultation />
      <Packages />
      <LatestBlogAbout />
      <Footer />
    </div>
  );
};

export default Home;
