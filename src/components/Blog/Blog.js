import React, { useEffect, useContext, useState } from "react";
import BlogPostCard from "./BlogPostCard";
import { Link } from "react-router-dom";
import HlBlog from "./HlBlog";
// import { blogData } from "./blogData";
import PoshContext from "../../PoshContext";
import Consultation from "../Shared/Consultation";
import { motion } from "framer-motion";
import axios from "axios";
import Footer from "../Footer/Footer";

const Blog = () => {
  const { Blogdatahandler, blogData, isloadedhandler, loaded } =
    useContext(PoshContext);

  const [blogDataApi, setblogDataApi] = useState([]);

  const getBlogData = async () => {
    var Responce = await axios
      .get(`${process.env.REACT_APP_API_URL}/blog`)
      .then((data) => {
        const ResponceData = data.data;
        const BlogData = [];
        ResponceData.forEach((element) => {
          !element.draft &&
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
        setblogDataApi(BlogData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBlogData();
  }, []);

  // useEffect(() => {
  //   getBlogData();
  // }, []);

  console.log(blogData);
  // console.log(loaded);

  // console.log(blogData[0].image);
  const varients = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildern: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    // <div>
    //   {" "}
    //   {loaded === 200 && blogData.map((data) => <h1>{data.title}</h1>)}
    // </div>

    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="blog-container">
        <div className="wrapper">
          {/* HIGHLIGHTED(hl) BLOG -- FIRST POST */}
          {loaded === 200 ? (
            blogDataApi.length != 0 ? (
              <div>
                <HlBlog
                  img={blogDataApi[0].image}
                  title={blogDataApi[0].title}
                  date={blogDataApi[0].date}
                  content={blogDataApi[0].content}
                  postLink={blogDataApi[0].slug}
                />

                <hr className="hlseperator" />

                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={varients}
                  className="blog-posts-container flex"
                >
                  {/* IT SKIPS THE FIRST POST TO LOOP */}
                  {blogDataApi.slice(1).map((blog) => (
                    <Link to={`./${blog.slug}`}>
                      <motion.div key={blog.id} variants={item}>
                        <BlogPostCard
                          img={blog.image}
                          title={blog.title}
                          date={blog.date}
                        />
                      </motion.div>
                    </Link>
                  ))}
                </motion.div>
              </div>
            ) : (
              <div>
                {" "}
                <h1>No Blog Post</h1>
              </div>
            )
          ) : (
            <div className="loadercenter">
              <div className="loader flex flex-jc-c flex-ai-c"></div>
            </div>
          )}
        </div>
      </div>
      <Consultation
        title="I will help you to achieve your health goals"
        btntext="Book Free Consultation"
      />
      <Footer />
    </motion.div>
  );
};

export default Blog;
//    <motion.div
// intial={{ opacity: 0 }}
// animate={{ opacity: 1 }}
// exit={{ opacity: 0, transition: { duration: 0.2 } }}
// >
// <div className="blog-container">
//   <div className="wrapper">
//     {/* HIGHLIGHTED(hl) BLOG -- FIRST POST */}

//     <HlBlog
//       img={BlogData[0].image}
//       title={BlogData[0].title}
//       date={BlogData[0].date}
//       content={BlogData[0].content}
//     />

//     <hr className="hlseperator" />

//     <motion.div
//       initial="hidden"
//       animate="show"
//       variants={varients}
//       className="blog-posts-container flex"
//     >
//       {/* IT SKIPS THE FIRST POST TO LOOP */}
//       {BlogData.slice(1).map((blog) => (
//         <Link to={`./${blog.id}`}>
//           <motion.div key={blog.id} variants={item}>
//             <BlogPostCard
//               img={blog.image}
//               title={blog.title}
//               date={blog.data}
//             />
//           </motion.div>
//         </Link>
//       ))}
//     </motion.div>
//   </div>
// </div>
// <Consultation
//   title="I will help you to achieve your health goals"
//   btntext="Book Free Consultation"
// />
// </motion.div>
