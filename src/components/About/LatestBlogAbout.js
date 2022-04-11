import React, { useEffect } from "react";
import { blogData } from "../Blog/blogData";

import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BlogPostCard from "../Blog/BlogPostCard";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const LatestBlogAbout = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const textani = useAnimation();
  const photoani = useAnimation();

  useEffect(() => {
    if (inView) {
      photoani.start({
        y: 0,

        opacity: 1,

        transition: {
          ease: "easeInOut",
          duration: 0.5,
          bounce: 0.3,
        },
      });

      textani.start({
        opacity: 1,
        scale: 1,
        transition: {
          ease: "easeInOut",
          duration: 0.5,
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

      textani.start({
        scale: 0.3,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <section ref={ref} className="has-snap has-ani blogs-section">
      <div className="wrapper">
        {props.header && (
          <motion.h1 animate={textani}>{props.header}</motion.h1>
        )}
        <motion.div animate={photoani} className="blogs-container">
          {blogData.map(
            (blog, index) =>
              index < props.num && (
                <div key={blog.blogId} className="blog-card">
                  <Link to={`/blog/${blog.blogId}`}>
                    <BlogPostCard
                      img={blog.blogthumbnail}
                      title={blog.blogtitle}
                      date={blog.blogDate}
                    />
                  </Link>
                </div>
              )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default LatestBlogAbout;
