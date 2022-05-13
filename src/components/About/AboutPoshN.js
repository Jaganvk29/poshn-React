import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AboutPageData } from "./AboutData";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { AboutData } from "../About/AboutData";
import axios from "axios";
const AboutPoshN = (props) => {
  const [isloaded, setisloaded] = useState();

  const [aboutData, setAboutData] = useState({});
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const textani = useAnimation();
  const photoani = useAnimation();

  const getBlogData = async () => {
    var Responce = await axios
      .get(`${process.env.REACT_APP_API_URL}/about`)
      .then((data) => {
        const ResponceData = data.data;
        console.log(ResponceData);
        setAboutData(...ResponceData);
        setisloaded(data.status);
        const BlogData = [];
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBlogData();

    // TO CHECK IF ITS VIEW PORT TO START ANIMATION
    if (inView) {
      photoani.start({
        x: 0,
        opacity: 1,

        transition: {
          ease: "easeInOut",
          duration: 0.5,
          bounce: 0.3,
        },
      });

      textani.start({
        ease: "easeInOut",
        x: 0,
        opacity: 1,

        transition: {
          duration: 0.5,
          bounce: 0.3,
        },
      });
    }
    // TO CHECK IF ITS NOT VIEW PORT TO REMOVE ANIMATION
    if (!inView) {
      photoani.start({
        x: -100,
        opacity: 0,
      });

      textani.start({
        x: 100,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <section ref={ref} className="has-snap has-ani about-me-section">
      <div className="wrapper">
        <div className="AboutPoshn-Container flex flex-jc-c flex-ai-c">
          <img className="ab-img-top" src={aboutData.image1} />
          <h1 className="ab-title">{aboutData.name}</h1>
          <div className="ab-img-bottom-container">
            <img className="ab-img-left" src={aboutData.image2} />
            <img className="ab-img-right" src={aboutData.image3} />
          </div>
          <div className="ab-poshn-text-container">
            <p>{aboutData.about}</p>

            <h1>Experience</h1>
            <p>{aboutData.experience}</p>

            <h1>
              Professional
              <br /> Background
            </h1>

            <p>{aboutData.professional_background}</p>

            <h1>
              Professional <br />
              Affiliations
            </h1>

            <p>{aboutData.professional_affiliations}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPoshN;
