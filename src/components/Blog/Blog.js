import React from "react";
import BlogPostCard from "./BlogPostCard";
import { Link } from "react-router-dom";
import HlBlog from "./HlBlog";
import { blogData } from "./blogData";
import Consultation from "../Shared/Consultation";

const Blog = () => {
  return (
    <div>
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

          <div className="blog-posts-container flex">
            {/* IT SKIPS THE FIRST POST TO LOOP */}
            {blogData.slice(1).map((blog) => (
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
      <Consultation
        title="I will help you to achieve your health goals"
        btntext="Book Free Consultation"
      />
    </div>
  );
};

export default Blog;
