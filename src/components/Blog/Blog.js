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

const Blog = () => {
  return (
    <div>
      <div className="blog-container">
        <div className="wrapper">
          {/* HIGHLIGHTED(hl) BLOG -- FIRST POST */}
          <HlBlog />
          <hr className="hlseperator" />

          <div className="blog-posts-container flex">
            <BlogPostCard
              img={yoga}
              title={"Is Yoga good or bad, if I have a problem in my spine?"}
              date={"03 JUNE 2021"}
            />

            <BlogPostCard
              img={icecream}
              title={"Can i add icecream in my diet?"}
              date={"03 JUNE 2021"}
            />
            <BlogPostCard
              img={Meat}
              title={"I hate green vegetables, I love junk food."}
              date={"03 JUNE 2021"}
            />
            <BlogPostCard
              img={Excer}
              title={
                "I can deadlift twice my weight, Is it enough for a person?"
              }
              date={"03 JUNE 2021"}
            />
            <BlogPostCard
              img={pushup}
              title={"Is Yoga good or bad, if I have a  problem in my spine?"}
              date={"03 JUNE 2021"}
            />
            <BlogPostCard
              img={yoga2}
              title={"Can i add icecream in my diet?"}
              date={"03 JUNE 2021"}
            />
            <BlogPostCard
              img={boxing}
              title={"I hate green vegetables, I love junk food."}
              date={"03 JUNE 2021"}
            />
            <BlogPostCard
              img={weightplate}
              title={
                "I can deadlift twice my weight, Is it enough for a person?"
              }
              date={"03 JUNE 2021"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
