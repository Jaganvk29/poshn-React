import React from "react";
import BlogPostCard from "../Blog/BlogPostCard";
import { blogData } from "../Blog/blogData";
import { Link } from "react-router-dom";

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
            {blogData.map((blog) => (
              <div key={blog.blogId} class="blog-card">
                <Link to={`edit/${blog.blogId}`}>
                  <BlogPostCard
                    img={blog.blogthumbnail}
                    title={blog.blogtitle}
                    date={blog.blogDate}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="add-ctaBtn-container">
          {" "}
          <Link to={"add"}>
            <button className="btn btn-dark">Add Blog</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Adminblog;
