import React from "react";
import person from "../../Assets/person.jpg";
import "../../CSS/main.css";

const AboutMe = () => {
  return (
    <section className="has-snap has-ani about-me-section">
      <h1 className="title">About me</h1>
      <div className="wrapper">
        <img className="img" src={person} />
        <div className="text">
          <h1>Hello, I’m Mudita</h1>
          <p>
            Mudita is an Indian diet specialist, singer, and film producer. The
            winner of the Miss World 2000 pageant, Chopra is one of India's
            highest-paid and most popular entertainers. She has received
            numerous accolades, including two National Film Awards and five Film
            fare Awards.
          </p>
          <button className="btn btn-toggle">Read more</button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
