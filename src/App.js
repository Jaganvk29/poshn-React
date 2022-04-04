import React from "react";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import { ReadBlog } from "./components/Blog/ReadBlog";
import Partners from "./components/Partners/Partners";
import Faq from "./components/Faq/Faq";
import PartnerGym from "./components/Partners/PartnerGym";
import PartnerDoctor from "./components/Partners/PartnerDoctor";
import FitnessCoach from "./components/Partners/FitnessCoach";
import Survey from "./components/Survey/Survey";
import Admin from "./components/Admin/Admin";
import Myproduct from "./components/Admin/Myproduct";
import AdminHome from "./components/Admin/AdminHome";
import Adminfaq from "./components/Admin/Adminfaq";
import AdminFaqEdit from "./components/Admin/AdminFaqEdit";
import Adminblog from "./components/Admin/Adminblog";

const App = () => {
  return (
    // <div>
    //   <Home />
    // </div>

    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:postId" element={<ReadBlog />} />

      <Route path="/ourpartners/*" element={<Partners />}>
        <Route index path="doctors" element={<PartnerDoctor />} />
        <Route path="fitnesscoaches" element={<FitnessCoach />} />
        <Route path="gym" element={<PartnerGym />} />
      </Route>

      <Route path="/dietguide" element={<Faq />} />
      <Route path="/survey" element={<Survey />} />

      <Route path="/admin" element={<Admin />}>
        <Route path="main" element={<AdminHome />} />
        <Route path="myproducts" element={<Myproduct />} />
        <Route path="faq" element={<Adminfaq />} />
        <Route path="faq/edit/:faqId" element={<AdminFaqEdit />} />
        <Route path="blog" element={<Adminblog />} />
      </Route>
    </Routes>
  );
};

export default App;
