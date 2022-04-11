import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "./blogData";
import LatestBlogAbout from "../About/LatestBlogAbout";
import { motion } from "framer-motion";
export const ReadBlog = () => {
  const params = useParams();
  const postId = params.postId;

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
          <div className="readBlog">
            <motion.div variants={item1} className="readBlog-header">
              <h1> {blogData[postId].blogtitle}</h1>
              <div className="readBlog-details">
                <p>{blogData[postId].blogAuther}</p>
                <hr className="readblog-detals-hr" />
                <p>{blogData[postId].blogDate}</p>
              </div>
            </motion.div>
            <motion.div variants={item2} className="readBlog-img">
              <img src={blogData[postId].blogthumbnail} />
            </motion.div>
            <motion.div variants={item3} className="readBlog-text">
              <p>{blogData[postId].blogContent}</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <div className="read-articels-container">
        <h1>RELATED ARTICELS</h1>

        <LatestBlogAbout num={2} />
      </div>
    </motion.div>
  );
};
