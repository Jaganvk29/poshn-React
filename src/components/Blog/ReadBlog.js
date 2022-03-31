import React from "react";
import ReadYoga from "../../Assets/Blog_image/Readyoga.png";
import BlogPostCard from "./BlogPostCard";
import Excer from "../../Assets/Blog_image/Excer.png";
import Meat from "../../Assets/Blog_image/Meat.png";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
export const ReadBlog = () => {
  const params = useParams();

  console.log(params.postId);
  return (
    <div>
      <div className="readBlog-container">
        <div className="wrapper">
          <div className="readBlog">
            <div className="readBlog-header">
              <h1> Is Yoga good or bad, if I have a problem in my spine?</h1>
              <div className="readBlog-details">
                <p>JAGAN VK</p>
                <hr className="readblog-detals-hr" />
                <p>03 JUNE 2021</p>
              </div>
            </div>
            <div className="readBlog-img">
              <img src={ReadYoga} />
            </div>
            <div className="readBlog-text">
              <p>
                We are dreamers, scientists, engineers, writers, artists. Each
                of us has a personal reason to try to create a more emotionally
                resilient world. We are dreamers, scientists, engineers,
                writers, artists. Each of us has a personal reason to try to
                create a more emotionally resilient world.We are dreamers,
                scientists, engineers, writers, artists. Each of us has a
                personal reason to try to create a more emotionally resilient
                world.We are dreamers, scientists, engineers, writers, artists.
                Each of us has a personal reason to try to create a more
                emotionally resilient world. We are dreamers, scientists,
                engineers, writers, artists. Each of us has a personal reason to
                try to create a more emotionally resilient world.
              </p>

              <p>
                We are dreamers, scientists, engineers, writers, artists. Each
                of us has a personal reason to try to create a more emotionally
                resilient world. We are dreamers, scientists, engineers,
                writers, artists. Each of us has a personal reason to try to
                create a more emotionally resilient world.
              </p>

              <p>
                We are dreamers, scientists, engineers, writers, artists. Each
                of us has a personal reason to try to create a more emotionally
                resilient world. We are dreamers, scientists, engineers,
                writers, artists. Each of us has a personal reason to try to
                create a more emotionally resilient world. We are dreamers,
                scientists, engineers, writers, artists. Each of us has a
                personal reason to try to create a more emotionally resilient
                world.We are dreamers, scientists, engineers, writers, artists.
                Each of us has a personal reason to try to create a more
                emotionally resilient world.
              </p>
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
