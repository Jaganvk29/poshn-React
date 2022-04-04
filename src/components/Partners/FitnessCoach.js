import React from "react";
import pgym1 from "../../Assets/Partnerimg/pgym1.png";
import PartnerCard from "./PartnerCard";
import { partnersData } from "./partnersdata";

const FitnessCoach = () => {
  return (
    <div className="Partner-card-container">
      {partnersData[0].fitnesscoach.map((partner) => (
        <PartnerCard
          img={partner.partnerProfile}
          title={partner.partnerName}
          content={partner.partnerAddress}
        />
      ))}
    </div>
  );
};

export default FitnessCoach;
