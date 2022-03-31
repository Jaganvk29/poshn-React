import React from "react";
import ropeworkout from "../../Assets/ropeworkout.png";
import { Link } from "react-router-dom";

const BlogPostCard = (props) => {
  return (
    <div class="blog-post-card">
      <img class="img" src={props.img} />
      <div class="post-card-info">
        <h3>{props.title}</h3>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

export default BlogPostCard;
