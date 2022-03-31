import React from "react";
import AboutMeHeader from "./AboutMeHeader";
import AboutMeHero from "./AboutMeHero";
import Testimonials from "./Testimonials";
import WhyME from "./WhyME";
import ConsultationAbout from "./ConsultationAbout";
import LatestBlogAbout from "./LatestBlogAbout";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div>
      <AboutMeHeader />
      <AboutMeHero />
      <WhyME />
      <Testimonials />
      <ConsultationAbout />
      <LatestBlogAbout />
      <Footer />
    </div>
  );
};

export default About;
