import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AdminAddBlog = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmit = async (data) => {
    console.log(data.picture[0]);

    await axios
      .post(
        "http://18.209.153.146/admin/blog/",
        {
          title: data.title,
          content: data.content,
          image: data.picture,
          draft: false,
        },
        {
          headers: {
            Authorization: `Token ${"b9c5149c48133e6ec998a3d0f052f3cd3122b82d"}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                  {...register("title", { required: true, minLength: 10 })}
                />
                {errors.title && (
                  <p className="form-err-text">Minimum 10 Character Required</p>
                )}

                <h2>CONTENT</h2>
                <textarea
                  className="blogedittext"
                  rows="12"
                  cols="5"
                  {...register("content", {
                    required: true,
                    minLength: 20,
                  })}
                ></textarea>

                {errors.content && (
                  <p className="form-err-text">Minimum 20 Character Required</p>
                )}
                {/* IMAGE PREVIEW AND UPLOAD */}
                <h1>BLOG IMAGE</h1>

                <img className="blog-edit-img"></img>
                <div>
                  {" "}
                  <input
                    type="file"
                    {...register("picture", { required: true })}
                  ></input>{" "}
                  {errors.picture && (
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
