import React from "react";
import { faqData } from "../Faq/faqdata";
import { Link } from "react-router-dom";
import editpen from "../../Assets/Editpen.png";

const Adminfaq = () => {
  return (
    <div className="adminfaq-container">
      <div className="wrapper">
        <div className="adminfaq">
          <h1> FAQ</h1>

          {faqData.map((faq) => (
            <Link key={faq.faqId} to={`edit/${faq.faqId}`}>
              <div className="adminfaq-card">
                <p>{faq.faqQuestion}</p>{" "}
                <button>
                  <img src={editpen}></img>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <button>Add Faq</button>
    </div>
  );
};

export default Adminfaq;
