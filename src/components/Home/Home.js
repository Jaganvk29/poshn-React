import React from "react";
import AboutMe from "../Shared/AboutMe";
import Consultation from "../Shared/Consultation";
import DietChart from "./DietChart";
import Intro from "./Intro";
import Footer from "../Footer/Footer";
import Packages from "./Packages/Packages";
import LatestBlogAbout from "../About/LatestBlogAbout";

const Home = () => {
  return (
    <div>
      <Intro />
      <AboutMe readmorebtn={true} header={true} />
      <DietChart />
      <Consultation
        title="I will help you to achieve your health goals"
        btntext="Book Free Consultation"
      />
      <Packages />
      <LatestBlogAbout header="The Latest Blogs" num={3} />
      <Footer />
    </div>
  );
};

export default Home;
