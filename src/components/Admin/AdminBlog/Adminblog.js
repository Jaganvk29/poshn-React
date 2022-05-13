import React, { useContext, useEffect } from "react";
import BlogPostCard from "../../Blog/BlogPostCard";
// import { blogData } from "../../Blog/blogData";
import { Link } from "react-router-dom";
import axios from "axios";
import PoshContext from "../../../PoshContext";
const Adminblog = () => {
  const { Blogdatahandler, blogData, isloadedhandler, loaded } =
    useContext(PoshContext);

  const getBlogData = async () => {
    var Responce = await axios
      .get("http://18.209.153.146/blog/")
      .then((data) => {
        const ResponceData = data.data;
        const BlogData = [];
        ResponceData.forEach((element) => {
          BlogData.push({
            id: element.id,

            title: element.title,
            content: element.content,
            image: element.image,
            draft: element.draft,
            date: element.created,
            slug: element.slug,
          });
        });
        Blogdatahandler(BlogData);
        console.log(data.data);
        isloadedhandler(data.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBlogData();
  }, []);

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
              <div key={blog.id} className="blog-card">
                <Link to={`edit/${blog.slug}`}>
                  <BlogPostCard
                    img={blog.image}
                    title={blog.title}
                    date={blog.date}
                    draft={blog.draft}
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
