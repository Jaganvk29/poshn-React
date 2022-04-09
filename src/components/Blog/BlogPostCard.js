import React from "react";

const BlogPostCard = (props) => {
  return (
    <div className="blog-post-card">
      <img className="img" src={props.img} />
      <div className="post-card-info">
        <h3>{props.title}</h3>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

export default BlogPostCard;
