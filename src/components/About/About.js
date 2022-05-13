import React from "react";
import AboutMeHeader from "./AboutMeHeader";
import WhyME from "./WhyME";
import LatestBlogAbout from "./LatestBlogAbout";
import AboutMe from "../Shared/AboutMe";
import { motion } from "framer-motion";

import AboutPoshN from "./AboutPoshN";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <AboutMeHeader />
      <AboutPoshN />
      <WhyME />

      {/* <Consultation title="Connect Now" btntext="Book Free Consultation" /> */}
      <Footer />
    </motion.div>
  );
};

export default About;
