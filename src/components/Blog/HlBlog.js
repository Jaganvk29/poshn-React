import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogData } from "./blogData";

const HlBlog = (props) => {
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

  const contentText = props.content;
  const trimmedcontent = contentText.substr(0, 200);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="hlblog flex"
    >
      <motion.div variants={item1} className="hlblog-text flex">
        <p>{props.date}</p>
        <h1>{props.title}</h1>
        <p>{trimmedcontent}...</p>
        <Link key={blogData[0].blogId} to={`./${blogData[0].blogId}`}>
          <button className="btn btn-toggle">Read</button>
        </Link>
      </motion.div>
      <motion.div variants={item2} className="hlblog-img">
        <img src={props.img} />
      </motion.div>
    </motion.div>
  );
};

export default HlBlog;
