import React from "react";
import AboutMe from "../Shared/AboutMe";
import Consultation from "../Shared/Consultation";
import DietChart from "./DietChart";
import Intro from "./Intro";
import Packages from "./Packages/Packages";
import LatestBlogAbout from "../About/LatestBlogAbout";
import { motion } from "framer-motion";
import Testimonials from "../About/Testimonials";

const Home = () => {
  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <Intro />
      <AboutMe readmorebtn={true} header={true} />
      <DietChart />
      <Consultation
        title="I will help you to achieve your health goals"
        btntext="Book Free Consultation"
      />
      <Packages />
      <Testimonials />
      <LatestBlogAbout header="The Latest Blogs" num={3} />
    </motion.div>
  );
};

export default Home;
