import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogData } from "./blogData";

const HlBlog = (props) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
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
      <div className="hlblog-text flex">
        <p>{props.date}</p>
        <h1>{props.title}</h1>
        <p>{trimmedcontent}...</p>
        <Link key={blogData[0].blogId} to={`./${blogData[0].blogId}`}>
          <button className="btn btn-toggle">Read</button>
        </Link>
      </div>
      <div className="hlblog-img">
        <img src={props.img} />
      </div>
    </motion.div>
  );
};

export default HlBlog;
