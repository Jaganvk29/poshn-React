import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LatestBlogAbout from "../About/LatestBlogAbout";
import { motion } from "framer-motion";
import PoshContext from "../../PoshContext";
import axios from "axios";
import _ from "lodash";
import ImageHandler from "./ImageHandler";
import Footer from "../Footer/Footer";
import pagenotdound from "../../Assets/pagenotdound.png";
export const ReadBlog = () => {
  const [isblogfound, setisblogfound] = useState(false);

  const { blogData, isloadedhandler, loaded, readBloghandler, readBlog } =
    useContext(PoshContext);

  const params = useParams();

  // GETS BLOG SLUG
  const postId = params.postId;

  // GET REQUEST TO GET DATA FROM API
  const getPostData = async () => {
    var Responce = await axios
      .get(`${process.env.REACT_APP_API_URL}/blog/${postId}`)
      .then((data) => {
        const ResponceData = data.data;
        const BlogData = [];

        console.log(ResponceData);

        readBloghandler(ResponceData);
        // console.log(data.data);
        isloadedhandler(data.status);
      })
      .catch((error) => {
        console.log(error);

        if (error.response) {
          if (error.response.status === 404) {
            setisblogfound(true);
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

  // ANIMATION
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const item1 = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };
  const item2 = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const item3 = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  // ANIMATION ENDS

  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="readBlog-container"
      >
        <div className="wrapper">
          {loaded === 200 ? (
            <div className="readBlog">
              <div>
                <motion.div variants={item1} className="readBlog-header">
                  <h1> {readBlog.title}</h1>
                  <div className="readBlog-details">
                    {/* <hr className="readblog-detals-hr" /> */}
                    <p>PoshN</p>
                  </div>
                </motion.div>
                <motion.div variants={item2} className="readBlog-img">
                  <ImageHandler img={readBlog.image} />
                  {/* <img src={readBlog.image} /> */}
                </motion.div>
                <motion.div variants={item3} className="readBlog-text">
                  <div
                    className="blog-content-data"
                    dangerouslySetInnerHTML={{ __html: readBlog.content }}
                  ></div>
                </motion.div>
              </div>
              <div className="read-articels-container">
                <h1>RELATED ARTICELS</h1>

                <LatestBlogAbout readblogcss={true} num={2} />
              </div>
            </div>
          ) : isblogfound ? (
            <div className="flex flex-d-c flex-jc-c flex-ai-c height100vh">
              <img className="pg-nt-found" src={pagenotdound} />
              <h1>No Blog Found in This Url</h1>
            </div>
          ) : (
            <div className="flex flex-jc-c flex-ai-c height100vh">
              <div className="loader flex flex-jc-c flex-ai-c"></div>
            </div>
          )}
        </div>
      </motion.div>

      <Footer />
    </motion.div>
  );
};
// isblogfound
