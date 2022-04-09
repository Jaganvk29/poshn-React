import React from "react";
import Footer from "../Footer/Footer";
import BlogPostCard from "./BlogPostCard";
import { Link } from "react-router-dom";
import HlBlog from "./HlBlog";
import { blogData } from "./blogData";
import Consultation from "../Home/Consultation";

const Blog = () => {
  return (
    <div>
      <div className="blog-container">
        <div className="wrapper">
          {/* HIGHLIGHTED(hl) BLOG -- FIRST POST */}
          <HlBlog />
          <hr className="hlseperator" />

          <div className="blog-posts-container flex">
            {blogData.map((blog) => (
              <Link key={blog.blogId} to={`./${blog.blogId}`}>
                <BlogPostCard
                  img={blog.blogthumbnail}
                  title={blog.blogtitle}
                  date={blog.blogDate}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Consultation />
      <Footer />
    </div>
  );
};

export default Blog;
