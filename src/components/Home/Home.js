import React, { useEffect, useContext } from "react";
import AboutMe from "../Shared/AboutMe";
import Consultation from "../Shared/Consultation";
import DietChart from "./DietChart";
import Intro from "./Intro";
import Packages from "./Packages/Packages";
import LatestBlogAbout from "../About/LatestBlogAbout";
import { motion } from "framer-motion";
import Testimonials from "../About/Testimonials";
import PoshContext from "../../PoshContext";
import axios from "axios";
import Footer from "../Footer/Footer";

const Home = () => {
  const { Blogdatahandler, blogData, isloadedhandler, loaded } =
    useContext(PoshContext);

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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBlogData();
  }, []);

  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <Intro />
      <AboutMe readmorebtn={true} header={true} />
      <DietChart />
      <Consultation
        title="I will help you to achieve your health goals"
        btntext="Book Free Consultation"
      />
      <Packages />
      <Testimonials />
      <LatestBlogAbout readblogcss={false} header="The Latest Blogs" num={3} />
      <Footer />
    </motion.div>
  );
};

export default Home;
