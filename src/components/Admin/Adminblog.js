import React from "react";
import BlogPostCard from "../Blog/BlogPostCard";
import { blogData } from "../Blog/blogData";

const Adminblog = () => {
  return (
    <div>
      <div className="dash-col1">
        <div className="pricingmembership">
          <h2>MANAGE YOUR BLOGS</h2>

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
      </div>
    </div>
  );
};

export default Adminblog;
