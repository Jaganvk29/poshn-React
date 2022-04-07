import React from "react";
import { AboutData } from "./AboutData";

const AboutMeHero = () => {
  return (
    <section class="has-snap has-ani about-me-section">
      <h1 class="title none">About me</h1>
      <div class="wrapper">
        <img class="img" src={AboutData[0].aboutprof} />
        <div class="text">
          <h1>Hello, I’m Mudita</h1>
          <p>{AboutData[0].aboutdesc}</p>
          <button class="btn btn-toggle none">Read more</button>
        </div>
      </div>
    </section>
  );
};

export default AboutMeHero;
