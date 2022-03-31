import React from "react";
import whymeimg from "../../Assets/Why me_.png";
import food from "../../Assets/food.png";

const WhyME = () => {
  return (
    <section class="why-me">
      <div class="wrapper">
        <div class="content">
          <img class="img-title" src={whymeimg} />
          <div class="text mx-auto">
            <img class="border-1 shadow-1" src={food} />
            <h1>I can help you to achieve goals</h1>
            <p>
              Mudita is an Indian diet specialist, singer, and film producer.
              The winner of the Miss World 2000 pageant, Chopra is one of
              India's highest-paid and most popular entertainers. She has
              received numerous accolades, including two national film awards
              and five film fare awards. Mudita is an Indian diet specialist,
              singer, and film producer. The winner of the Miss World 2000
              pageant, Chopra is one of India's highest-paid and most popular
              entertainers. She has received numerous accolades, including two
              national Film awards and five film fare awards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyME;
