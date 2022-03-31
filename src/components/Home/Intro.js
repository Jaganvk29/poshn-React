import React from "react";
import heroimg from "../../Assets/cute-asian.png";

const Intro = () => {
  return (
    <section className="intro-section has-ani flex flex-jc-c bg-color-3">
      <div className="leaf-1"></div>
      <div className="leaf-2"></div>
      <div className="wrapper">
        <div className="text flex flex-col flex-jc-c">
          <h1>Balanced nutrition for a lean & fit body</h1>
          <p>
            Because here's the thing: It doesn't deserve you. And it can
            seriously damage your body. Let's build habits that love you back
            instead.
          </p>
          <div>
            <button className="btn btn-dark">Let's get healthy</button>
          </div>
        </div>
        <div className="img-container">
          <img className="img" src={heroimg} />
          <div className="fruit fruit-ani-2"></div>
          <div className="leaf-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
