import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogData } from "./blogData";
import PoshContext from "../../PoshContext";
import ImageHandler from "./ImageHandler";

const HlBlog = (props) => {
  const { Blogdatahandler, blogData, isloadedhandler, loaded } =
    useContext(PoshContext);

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
        <p>{props.date.substr(0, 10)}</p>
        <h1>{props.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: trimmedcontent }}></div>
        <Link key={blogData[0].id} to={`./${props.postLink}`}>
          <button className="btn btn-toggle">Read</button>
        </Link>
      </motion.div>
      <motion.div variants={item2} className="hlblog-img">
        <ImageHandler img={props.img} />
      </motion.div>
    </motion.div>
  );
};

export default HlBlog;
