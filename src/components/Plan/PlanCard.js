import { filterProps } from "framer-motion";
import React from "react";

const PlanCard = (props) => {
  return (
    <div className="plan-card">
      <img src={props.planimg} />
      <h2>{props.planTitle}</h2>
      <p>{props.plancontent}</p>
      <button className="btn btn-dark plan-card-btn">
        {props.planbtnname}
      </button>
    </div>
  );
};

export default PlanCard;
