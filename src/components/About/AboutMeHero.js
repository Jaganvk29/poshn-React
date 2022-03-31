import React from "react";
import Person from "../../Assets/person.jpg";

const AboutMeHero = () => {
  return (
    <section class="has-snap has-ani about-me-section">
      <h1 class="title none">About me</h1>
      <div class="wrapper">
        <img class="img" src={Person} />
        <div class="text">
          <h1>Hello, I’m Mudita</h1>
          <p>
            Mudita is an Indian diet specialist, singer, and film producer. The
            winner of the Miss World 2000 pageant, Chopra is one of India's
            highest-paid and most popular entertainers. She has received
            numerous accolades, including two National Film Awards and five Film
            fare Awards.
          </p>
          <button class="btn btn-toggle none">Read more</button>
        </div>
      </div>
    </section>
  );
};

export default AboutMeHero;
