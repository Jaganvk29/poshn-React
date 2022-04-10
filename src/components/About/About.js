import React from "react";
import AboutMeHeader from "./AboutMeHeader";
import Testimonials from "./Testimonials";
import WhyME from "./WhyME";
import LatestBlogAbout from "./LatestBlogAbout";
import Footer from "../Footer/Footer";
import AboutMe from "../Shared/AboutMe";
import Consultation from "../Shared/Consultation";

const About = () => {
  return (
    <div>
      <AboutMeHeader />
      <AboutMe />
      <WhyME />
      <Testimonials />
      <Consultation title="Connect Now" btntext="Book Free Consultation" />

      <LatestBlogAbout />
      <Footer />
    </div>
  );
};

export default About;
