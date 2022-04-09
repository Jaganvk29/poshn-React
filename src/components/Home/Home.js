import React from "react";
import AboutMe from "./AboutMe";
import Consultation from "./Consultation";
import DietChart from "./DietChart";
import Intro from "./Intro";
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
      <LatestBlogAbout header="The Latest Blogs" num={3} />
      <Footer />
    </div>
  );
};

export default Home;
