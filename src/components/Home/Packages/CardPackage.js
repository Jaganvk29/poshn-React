import React from "react";
import { Link } from "react-router-dom";
import hand from "../../../Assets/Package_Icon/Hand.png";
const CardPackage = (props) => {
  return (
    <div className="package-card">
      <div className="package-card-header">
        <img src={props.img} />
        <h2>{props.titleText}</h2>
        <p>{props.subTitle}</p>
      </div>
      <Link to="/dietguide">
        {" "}
        <button className="btn btn-toggle">{props.btnText}</button>
      </Link>
    </div>
  );
};

export default CardPackage;
