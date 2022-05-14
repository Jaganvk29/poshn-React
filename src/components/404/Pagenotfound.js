import React from "react";
import pagenotdound from "../../Assets/pagenotdound.png";
import "../../CSS/main.css";
const Pagenotfound = () => {
  return (
    <div className="flex flex-d-c flex-jc-c flex-ai-c height100vh">
      <img className="pg-nt-found" src={pagenotdound} />
      <h1>Page Not Found</h1>
    </div>
  );
};

export default Pagenotfound;
