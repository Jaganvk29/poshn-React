import React from "react";
import BlogPostCard from "../Blog/BlogPostCard";
import { blogData } from "../Blog/blogData";

const Adminblog = () => {
  return (
    <div>
      <div className="dash-col1">
        <div className="managecontainer">
          <div className="dash-container-header">
            <h2>MANAGE YOUR BLOGS</h2>
            <button>Edit</button>
          </div>

          <div className="adminblog">
            <BlogPostCard
              img={blogData[0].blogthumbnail}
              title={blogData[0].blogtitle}
              date={blogData[0].blogDate}
            />
            <BlogPostCard
              img={blogData[0].blogthumbnail}
              title={blogData[0].blogtitle}
              date={blogData[0].blogDate}
            />
            <BlogPostCard
              img={blogData[0].blogthumbnail}
              title={blogData[0].blogtitle}
              date={blogData[0].blogDate}
            />
            <BlogPostCard
              img={blogData[0].blogthumbnail}
              title={blogData[0].blogtitle}
              date={blogData[0].blogDate}
            />
            <BlogPostCard
              img={blogData[0].blogthumbnail}
              title={blogData[0].blogtitle}
              date={blogData[0].blogDate}
            />
            <BlogPostCard
              img={blogData[0].blogthumbnail}
              title={blogData[0].blogtitle}
              date={blogData[0].blogDate}
            />
          </div>
        </div>
        <div className="add-ctaBtn-container">
          {" "}
          <button className="btn btn-dark">Add Blog</button>
        </div>
      </div>
    </div>
  );
};

export default Adminblog;
