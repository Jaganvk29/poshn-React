import React, { useEffect } from "react";
import noImage from "../../Assets/noimage.jpg";

const ImageHandler = (props) => {
  var tester = new Image();

  tester.src = props.img;

  return <img className="img" src={tester.loading ? props.img : noImage}></img>;
};

export default ImageHandler;
