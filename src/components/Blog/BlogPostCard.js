import React from "react";
import ImageHandler from "./ImageHandler";

const BlogPostCard = (props) => {
  return (
    <div className="blog-post-card">
      <ImageHandler className="img" img={props.img} />

      {/* <img className="img" src={props.img} /> */}
      <div className="post-card-info">
        <h3>{props.title}</h3>
        <p>{props.date.substr(0, 10)}</p>
        {props.draft && <h4 className="draftPost"> Drafted Post</h4>}{" "}
      </div>
    </div>
  );
};

export default BlogPostCard;
