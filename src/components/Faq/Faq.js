import React, { useEffect, useState } from "react";
import Accordion from "./Accordion";
import { faqData } from "./faqdata";
import axios from "axios";

const Faq = () => {
  const [faqapiData, setFaqApiData] = useState([]);
  const [apiStatus, setApiStatus] = useState();

  const getFaqData = () => {
    axios.get("http://18.209.153.146/faq/").then((data) => {
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

  console.log(apiStatus);
  // const getBlogData = async () => {
  //   var Responce = await axios
  //     .get("http://18.209.153.146/blog/")
  //     .then((data) => {
  //       const ResponceData = data.data;
  //       const BlogData = [];
  //       ResponceData.forEach((element) => {
  //         !element.draft &&
  //           BlogData.push({
  //             id: element.id,

  //             title: element.title,
  //             content: element.content,
  //             image: element.image,
  //             draft: element.draft,
  //             date: element.created,
  //             slug: element.slug,
  //           });
  //       });
  //       Blogdatahandler(BlogData);
  //       console.log(data.data);
  //       isloadedhandler(data.status);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  useEffect(() => {
    getFaqData();
  }, []);

  return (
    <div>
      <div className="faq-container">
        <div className="wrapper">
          <div className="faq">
            <div className="faq-title">
              <h1>Frequently asked questions</h1>
            </div>

            {apiStatus === 200 ? (
              faqapiData.map((faq) => (
                <Accordion
                  key={faq.id}
                  faqtitle={faq.question}
                  faqanswer={faq.answer}
                />
              ))
            ) : (
              <div className="loaderContainer">
                <div className="loadercenter ">
                  <div className="loader flex flex-jc-c flex-ai-c"></div>
                </div>
              </div>
            )}

            <div className="faq-footer">
              <h1>Still have a question?</h1>
              <p>
                If you cannot find answer to your question in our FAQ, You can
                always contact us. We’ll answer to you shortly!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
