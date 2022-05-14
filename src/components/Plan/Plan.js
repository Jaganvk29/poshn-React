import React, { useContext, useEffect, useState } from "react";
import img1 from "../../Assets/package_img/silver.png";
import img2 from "../../Assets/package_img/gold.png";
import img3 from "../../Assets/package_img/Diamond.png";
import img4 from "../../Assets/package_img/platinum.png";
import img5 from "../../Assets/package_img/diab.png";
import img6 from "../../Assets/package_img/nut.png";
import PoshContext from "../../PoshContext";
import Consultation from "../Shared/Consultation";
import PlanCard from "./PlanCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PlanHeader from "./PlanHeader";
import Footer from "../Footer/Footer";
import axios from "axios";
const Plan = () => {
  const imagearr = [img1, img2, img3, img4, img5, img6];

  const [productData, setProductData] = useState();
  const { isOpen, modalHandler } = useContext(PoshContext);
  const [isloaded, setisloaded] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.095,
  });

  const photoani = useAnimation();

  useEffect(() => {
    // TO CHECK IF ITS VIEW PORT TO START ANIMATION
    if (inView) {
      photoani.start({
        ease: "easeInOut",
        y: 0,
        opacity: 1,

        transition: {
          duration: 0.7,
          bounce: 0.3,
        },
      });
    }
    // TO CHECK IF ITS NOT VIEW PORT TO REMOVE ANIMATION
    if (!inView) {
      photoani.start({
        y: 100,
        opacity: 0,
      });
    }
  }, [inView]);
  const buttonClick = () => {
    modalHandler(true);
  };

  // GET REQUEST TO GET DATA FROM API
  const getPostData = async () => {
    var Responce = await axios
      .get(`${process.env.REACT_APP_API_URL}/product/`)
      .then((data) => {
        const ResponceData = data.data;
        if (data.status === 200) {
          setisloaded(true);
        }
        const Productinfo = [];

        ResponceData.forEach((element) => {
          Productinfo.push({
            productName: element.name,
            price: element.price,
            description: element.description,
            category: element.category,
          });
        });

        setProductData(Productinfo);
        // console.log(ResponceData);
      })
      .catch((error) => {
        console.log(error);

        if (error.response) {
          if (error.response.status === 404) {
          }
          //do something
          console.log(error.response);
        } else if (error.request) {
          console.log("ERROR REQUEST");
          //do something else
        } else if (error.message) {
          console.log("ERROR MESSAGE");

          //do something other than the other two
        }
      });
  };

  // EXECUTES GET REQUEST
  useEffect(() => {
    getPostData();
  }, []);
  console.log(productData);

  return (
    <div>
      <div className="plan-container">
        {/* HERO FOR PLAN SECTION  */}
        <PlanHeader />

        {isloaded ? (
          <div className="wrapper">
            <div ref={ref} className="plan">
              <h1 className="color-7">
                All sessions are virtual via Zoom, WhatsApp or Phone Call
              </h1>

              <motion.div animate={photoani} className="plan-card-container">
                {productData.map((product, index) => (
                  <PlanCard
                    planimg={imagearr[index]}
                    planTitle={product.productName}
                    plancontent={product.description}
                    planbtnname="Book free consultation"
                    onPress={buttonClick}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        ) : (
          <div className="flex flex-jc-c flex-ai-c height100vh">
            <div className="loader flex flex-jc-c flex-ai-c"></div>
          </div>
        )}

        <Consultation
          title="I will help you to achieve your health goals"
          btntext="Book Free Consultation"
        />
        <Footer />
      </div>
    </div>
  );
};

export default Plan;
