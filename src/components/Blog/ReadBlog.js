import React from "react";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { blogData } from "./blogData";
import LatestBlogAbout from "../About/LatestBlogAbout";

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

        <LatestBlogAbout num={2} />
      </div>

      <Footer />
    </div>
  );
};
