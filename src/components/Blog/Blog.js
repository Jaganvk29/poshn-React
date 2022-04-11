import React from "react";
import BlogPostCard from "./BlogPostCard";
import { Link } from "react-router-dom";
import HlBlog from "./HlBlog";
import { blogData } from "./blogData";
import Consultation from "../Shared/Consultation";
import { motion } from "framer-motion";

const Blog = () => {
  const varients = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildern: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
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
      <div className="blog-container">
        <div className="wrapper">
          {/* HIGHLIGHTED(hl) BLOG -- FIRST POST */}

          <HlBlog
            img={blogData[0].blogthumbnail}
            title={blogData[0].blogtitle}
            date={blogData[0].blogDate}
            content={blogData[0].blogContent}
          />

          <hr className="hlseperator" />

          <motion.div
            initial="hidden"
            animate="show"
            variants={varients}
            className="blog-posts-container flex"
          >
            {/* IT SKIPS THE FIRST POST TO LOOP */}
            {blogData.slice(1).map((blog) => (
              <Link to={`./${blog.blogId}`}>
                <motion.div key={blog.blogId} variants={item}>
                  <BlogPostCard
                    img={blog.blogthumbnail}
                    title={blog.blogtitle}
                    date={blog.blogDate}
                  />
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
      <Consultation
        title="I will help you to achieve your health goals"
        btntext="Book Free Consultation"
      />
    </motion.div>
  );
};

export default Blog;
