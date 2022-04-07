import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../Blog/blogData";
import { useForm } from "react-hook-form";

const AdminBlogEdit = () => {
  const params = useParams();
  const blogID = params.blogId;
  const [textState, setTextState] = useState({
    title: blogData[blogID].blogtitle,
    content: blogData[blogID].blogContent,
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="managecontainer">
        <div className="wrapper">
          <div className="adminfaq">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>EDIT : {blogData[blogID].blogtitle} </h1>
              <div className="adminblog-edit">
                <h1>TITLE</h1>

                <input
                  className="blogedittext"
                  type="text"
                  value={textState.title}
                  {...register("blogtitle", { required: true, minLength: 10 })}
                  onChange={(e) => setTextState({ title: e.target.value })}
                />
                {errors.blogtitle && (
                  <p className="form-err-text">Minimum 10 Character Required</p>
                )}

                <h2>CONTENT</h2>
                <textarea
                  className="blogedittext"
                  rows="12"
                  cols="5"
                  value={textState.content}
                  {...register("blogcontent", {
                    required: true,
                    minLength: 20,
                  })}
                  onChange={(e) => setTextState({ content: e.target.value })}
                ></textarea>

                {errors.blogcontent && (
                  <p className="form-err-text">Minimum 20 Character Required</p>
                )}
                {/* IMAGE PREVIEW AND UPLOAD */}
                <h1>BLOG IMAGE</h1>

                <img
                  className="blog-edit-img"
                  src={blogData[blogID].blogthumbnail}
                ></img>
                <div>
                  {" "}
                  <input
                    type="file"
                    {...register("blogimg", { required: true })}
                  ></input>{" "}
                  {errors.blogimg && (
                    <p className="form-err-text">Blog Image is required</p>
                  )}
                </div>
              </div>
              <div className="adminsavebtn">
                <button type="submit" className="btn btn-dark">
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBlogEdit;
