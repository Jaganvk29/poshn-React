import React from "react";
import diet_chart_leaf from "../../Assets/svg/diet-chart-leaf.svg";
import citrusfruits from "../../Assets//citrusfruit.png";

const DietChart = () => {
  return (
    <section class="has-snap has-ani diet-chart bg-color-4">
      <img class="leaf" src={diet_chart_leaf} />
      <img class="img" src={citrusfruits} />
      <div class="wrapper">
        <div class="text">
          <h1>Your body is unique</h1>
          <p>
            Your body is unique random diet plans from the internet won’t work
            for you. The winner of the Miss World 2000 pageant, Chopra is one of
            India's highest-paid and most popular entertainers. She has received
            numerous accolades, including two National Film Awards and five Film
            fare Awards.
          </p>
          <button class="btn btn-toggle">
            Let’s find out what will work for you
          </button>
        </div>
      </div>
    </section>
  );
};

export default DietChart;
