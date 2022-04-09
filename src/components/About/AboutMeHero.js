import React from "react";
import { AboutData } from "./AboutData";

const AboutMeHero = () => {
  return (
    <section className="has-snap has-ani about-me-section">
      <h1 className="title none">About me</h1>
      <div className="wrapper">
        <img className="img" src={AboutData[0].aboutprof} />
        <div className="text">
          <h1>Hello, I’m Mudita</h1>
          <p>{AboutData[0].aboutdesc}</p>
          <button className="btn btn-toggle none">Read more</button>
        </div>
      </div>
    </section>
  );
};

export default AboutMeHero;
