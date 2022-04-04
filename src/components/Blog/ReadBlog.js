import React from "react";
import ReadYoga from "../../Assets/Blog_image/Readyoga.png";
import BlogPostCard from "./BlogPostCard";
import Excer from "../../Assets/Blog_image/Excer.png";
import Meat from "../../Assets/Blog_image/Meat.png";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { blogData } from "./blogData";

export const ReadBlog = () => {
  const params = useParams();
  const postId = params.postId;
  console.log(postId);

  console.log(params.postId);
  return (
    <div>
      <div className="readBlog-container">
        <div className="wrapper">
          <div className="readBlog">
            <div className="readBlog-header">
              <h1> {blogData[postId].blogtitle}</h1>
              <div className="readBlog-details">
                <p>{blogData[postId].blogAuther}</p>
                <hr className="readblog-detals-hr" />
                <p>{blogData[postId].blogDate}</p>
              </div>
            </div>
            <div className="readBlog-img">
              <img src={blogData[postId].blogthumbnail} />
            </div>
            <div className="readBlog-text">
              <p>{blogData[postId].blogContent}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="read-articels-container">
        <h1>RELATED ARTICELS</h1>
        <div className="read-articels flex">
          <BlogPostCard
            img={Meat}
            title={"I hate green vegetables, I love junk food."}
            date={"03 JUNE 2021"}
          />
          <BlogPostCard
            img={Excer}
            title={"I can deadlift twice my weight, Is it enough for a person?"}
            date={"03 JUNE 2021"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
