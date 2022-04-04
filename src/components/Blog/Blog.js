import React from "react";
import ropeworkout from "../../Assets/ropeworkout.png";
import yoga from "../../Assets/Blog_image/Yoga.png";
import boxing from "../../Assets/Blog_image/boxing.png";
import Excer from "../../Assets/Blog_image/Excer.png";
import icecream from "../../Assets/Blog_image/Icecream.png";
import Meat from "../../Assets/Blog_image/Meat.png";
import pushup from "../../Assets/Blog_image/pushup.png";
import weightplate from "../../Assets/Blog_image/weightplate.png";
import yoga2 from "../../Assets/Blog_image/Yoga2.png";
import Footer from "../Footer/Footer";
import BlogPostCard from "./BlogPostCard";
import { Link, useParams, NavLink, Routes } from "react-router-dom";
import HlBlog from "./HlBlog";
import { blogData } from "./blogData";

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
              <Link to={`./${blog.blogId}`}>
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
      <Footer />
    </div>
  );
};

export default Blog;
