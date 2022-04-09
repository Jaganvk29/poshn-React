import React from "react";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import { ReadBlog } from "./components/Blog/ReadBlog";
import Partners from "./components/Partners/Partners";
import PartnerGym from "./components/Partners/PartnerGym";
import PartnerDoctor from "./components/Partners/PartnerDoctor";
import FitnessCoach from "./components/Partners/FitnessCoach";
import Survey from "./components/Survey/Survey";
import Admin from "./components/Admin/Admin";
import Myproduct from "./components/Admin/AdminMyProduct/Myproduct";
import AdminHome from "./components/Admin/AdminHome";
import Adminfaq from "./components/Admin/AdminFaq/Adminfaq";
import AdminFaqEdit from "./components/Admin/AdminFaq/AdminFaqEdit";
import Adminblog from "./components/Admin/AdminBlog/Adminblog";
import AdminMain from "./components/Admin/AdminMain";
import AdminBooking from "./components/Admin/AdminBooking/AdminBooking";
import AdminManage from "./components/Admin/AdminManage/AdminManage";
import AdmindietSurvey from "./components/Admin/AdminSurvey/AdmindietSurvey";
import Adminabout from "./components/Admin/AdminAbout/Adminabout";
import Adminresponses from "./components/Admin/AdminResponses/Adminresponses";
import Plan from "./components/Plan/Plan";
import ProtectedRoutes from "./components/Admin/ProtectedRoutes";
import AdminBlogEdit from "./components/Admin/AdminBlog/AdminBlogEdit";
import AdminAddFaq from "./components/Admin/AdminFaq/AdminAddFaq";
import AdminAddBlog from "./components/Admin/AdminBlog/AdminAddBlog";
import AdminSurveyDetail from "./components/Admin/AdminSurvey/AdminSurveyDetail";
import AdminResponceDeatil from "./components/Admin/AdminResponses/AdminResponceDeatil";
import Pagenotfound from "./components/404/Pagenotfound";

const Pages = () => {
  return (
    <Routes>
      {/* MAIN NAV ROUTES */}
      <Route path="/*" element={<Pagenotfound />}></Route>
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

      {/* ADMIN PAGE PROTECTED ROUTES */}

      <Route element={<ProtectedRoutes />}>
        <Route path="/admin/main" element={<AdminMain />}>
          <Route path="dashboard" element={<AdminHome />} />
          <Route path="about" element={<Adminabout />} />

          <Route path="myproducts" element={<Myproduct />} />

          {/* FAQ */}
          <Route path="faq" element={<Adminfaq />}></Route>
          <Route path="faq/add" element={<AdminAddFaq />} />
          <Route path="faq/edit/:faqId" element={<AdminFaqEdit />} />

          {/* BLOG */}
          <Route path="blog" element={<Adminblog />} />
          <Route path="blog/add" element={<AdminAddBlog />} />
          <Route path="blog/edit/:blogId" element={<AdminBlogEdit />} />

          <Route path="bookings" element={<AdminBooking />} />
          {/* MANAGE PARTNERS */}
          <Route path="manage" element={<AdminManage />}>
            <Route index path="doctors" element={<PartnerDoctor />} />
            <Route path="fitnesscoaches" element={<FitnessCoach />} />
            <Route path="gym" element={<PartnerGym />} />
          </Route>
          {/* DIET SURVEY */}
          <Route path="dietsurvey" element={<AdmindietSurvey />} />
          <Route path="dietsurvey/detail" element={<AdminSurveyDetail />} />

          {/* RESPONSES */}
          <Route path="responses" element={<Adminresponses />} />
          <Route path="responses" element={<Adminresponses />} />
          <Route
            path="responses/detail/:resposeID"
            element={<AdminResponceDeatil />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default Pages;
