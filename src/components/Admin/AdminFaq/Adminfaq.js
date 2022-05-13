import React, { useEffect, useState } from "react";
// import { faqData } from "../../Faq/faqdata";
import { Link } from "react-router-dom";
import editpen from "../../../Assets/Editpen.png";
import axios from "axios";

const Adminfaq = () => {
  const [faqapiData, setFaqApiData] = useState([]);
  const [apiStatus, setApiStatus] = useState();

  const getFaqData = () => {
    axios.get(`http://18.209.153.146/faq/`).then((data) => {
      const ResponseData = data.data;
      setApiStatus(data.status);

      const faqData = [];
      ResponseData.forEach((element) => {
        faqData.push({
          question: element.question,
          answer: element.answer,
          slug: element.slug,
          id: element.id,
        });
      });

      setFaqApiData(faqData);
    });
  };

  useEffect(() => {
    getFaqData();
  }, []);

  return (
    <div>
      <div className="managecontainer">
        <div className="wrapper">
          <div className="adminfaq">
            <h1> FAQ</h1>

            {apiStatus === 200 ? (
              faqapiData.map((faq) => (
                <Link key={faq.id} to={`edit/${faq.slug}`}>
                  <div className="adminfaq-card">
                    <p>{faq.question}</p>{" "}
                    <button>
                      <img src={editpen}></img>
                    </button>
                  </div>
                </Link>
              ))
            ) : (
              <div className="loaderContainer">
                <div className="loadercenter ">
                  <div className="loader flex flex-jc-c flex-ai-c"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="add-ctaBtn-container">
        {" "}
        <Link to={"add"}>
          <button className="btn btn-dark">Add Faq</button>
        </Link>
      </div>
    </div>
  );
};

export default Adminfaq;
