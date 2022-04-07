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
import AdminMain from "./components/Admin/AdminMain";
import AdminBooking from "./components/Admin/AdminBooking";
import AdminManage from "./components/Admin/AdminManage";
import AdmindietSurvey from "./components/Admin/AdmindietSurvey";
import Adminabout from "./components/Admin/Adminabout";
import Adminresponses from "./components/Admin/Adminresponses";
import Plan from "./components/Plan/Plan";
import ProtectedRoutes from "./components/Admin/ProtectedRoutes";
import AdminBlogEdit from "./components/Admin/AdminBlogEdit";

const Pages = () => {
  return (
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

      <Route path="/dietguide" element={<Plan />} />
      <Route path="/survey" element={<Survey />} />
      <Route path="/admin" element={<Admin />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/admin/main" element={<AdminMain />}>
          <Route path="dashboard" element={<AdminHome />} />
          <Route path="about" element={<Adminabout />} />

          <Route path="myproducts" element={<Myproduct />} />
          <Route path="faq" element={<Adminfaq />} />
          <Route path="faq/edit/:faqId" element={<AdminFaqEdit />} />
          <Route path="blog" element={<Adminblog />} />
          <Route path="blog/edit/:blogId" element={<AdminBlogEdit />} />

          <Route path="bookings" element={<AdminBooking />} />
          <Route path="manage" element={<AdminManage />}>
            <Route index path="doctors" element={<PartnerDoctor />} />
            <Route path="fitnesscoaches" element={<FitnessCoach />} />
            <Route path="gym" element={<PartnerGym />} />
          </Route>
          <Route path="dietsurvey" element={<AdmindietSurvey />} />
          <Route path="responses" element={<Adminresponses />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Pages;
