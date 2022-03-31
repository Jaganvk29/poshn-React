import React from "react";
import ropeworkout from "../../Assets/ropeworkout.png";

const HlBlog = () => {
  return (
    <div className="hlblog flex">
      <div className="hlblog-text flex">
        <p>03 JUNE 2021</p>
        <h1>HIIT Workouts: How effective they really are?</h1>
        <p>
          We are dreamers, scientists, engineers, writers, artists. Each of us
          has a personal reason to try to create a more emotionally resilient
          world. We are dreamers, scientists, engineers, writers, artists. Each
          of us has a personal reason to try to create a more emotionally
          resilient world.
        </p>
        <button className="btn btn-toggle">Read</button>
      </div>
      <div className="hlblog-img">
        <img src={ropeworkout} />
      </div>
    </div>
  );
};

export default HlBlog;
