import React from "react";
import { useForm } from "react-hook-form";

const AdminAddBlog = () => {
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
              <h1>ADD NEW BLOG </h1>
              <div className="adminblog-edit">
                <h1>TITLE</h1>

                <input
                  className="blogedittext"
                  type="text"
                  {...register("blogtitle", { required: true, minLength: 10 })}
                />
                {errors.blogtitle && (
                  <p className="form-err-text">Minimum 10 Character Required</p>
                )}

                <h2>CONTENT</h2>
                <textarea
                  className="blogedittext"
                  rows="12"
                  cols="5"
                  {...register("blogcontent", {
                    required: true,
                    minLength: 20,
                  })}
                ></textarea>

                {errors.blogcontent && (
                  <p className="form-err-text">Minimum 20 Character Required</p>
                )}
                {/* IMAGE PREVIEW AND UPLOAD */}
                <h1>BLOG IMAGE</h1>

                <img className="blog-edit-img"></img>
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

export default AdminAddBlog;
