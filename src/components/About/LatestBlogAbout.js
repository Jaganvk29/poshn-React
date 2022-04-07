import React from "react";
import momos from "../../Assets/momos.png";
import veggies from "../../Assets/veggies.png";
import Slider from "react-slick";
import { blogData } from "../Blog/blogData";
import "slick-carousel/slick/slick.css";
import { Link, useParams } from "react-router-dom";

import "slick-carousel/slick/slick-theme.css";
import BlogPostCard from "../Blog/BlogPostCard";

const LatestBlogAbout = () => {
  return (
    <section class="has-snap has-ani blogs-section">
      <div class="wrapper">
        <h1>The Latest Blogs</h1>
        <div class="blogs-container">
          {blogData.map(
            (blog, index) =>
              index < 3 && (
                <div class="blog-card">
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
        </div>
      </div>
    </section>
  );
};

export default LatestBlogAbout;
