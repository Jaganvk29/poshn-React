import { filterProps } from "framer-motion";
import React from "react";

const TestimonalCard = (props) => {
  return (
    <div className="test-card">
      <div>
        <p>{props.userComment}</p>
        <div className="author flex flex-ai-c">
          <img className="img" src={props.userPic} />
          <div className="info">
            <h5>{props.userName}</h5>
            <h6>{props.userJob}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonalCard;
