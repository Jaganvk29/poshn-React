import React from "react";
import PartnerCard from "./PartnerCard";
import pgym1 from "../../Assets/Partnerimg/pgym1.png";
import { partnersData } from "./partnersdata";

const PartnerGym = () => {
  return (
    <div className="Partner-card-container">
      {partnersData[0].gym.map((partner) => (
        <PartnerCard
          img={partner.partnerProfile}
          title={partner.partnerName}
          content={partner.partnerAddress}
        />
      ))}
    </div>
  );
};

export default PartnerGym;
