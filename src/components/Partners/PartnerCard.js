import React from "react";
import pgym1 from "../../Assets/Partnerimg/pgym1.png";
import mail from "../../Assets/Partnerimg/mail.png";
import pin from "../../Assets/Partnerimg/pin.png";
import phone from "../../Assets/Partnerimg/phone.png";

const PartnerCard = (props) => {
  return (
    <div>
      <div className="Partner-card">
        <img src={props.img}></img>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <div className="Partner-card-btn">
          <button>
            <img src={pin} />
          </button>
          <button>
            <img src={phone} />
          </button>

          <button>
            <img src={mail} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
