import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Navigate } from "react-router-dom";

const AdminAddBlog = () => {
  // REACT HOOK FORMS

  const [isDraft, setisDraft] = useState(false);
  const [isPosted, setisPosted] = useState(false);
  const [activeloader, setactiveloader] = useState(false);
  const [blogAddimg, setBlogAddimg] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  // IMAGE PREVIEW HANDLER

  const imageHandler1 = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setBlogAddimg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  // POST REQUEST TO CREATE NEW BLOG

  const onSubmit = async (data) => {
    const formData = new FormData();

    console.log(data.picture[0]);
    formData.append("image", data.picture[0]);
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("draft", isDraft);
    console.log(data);

    await axios
      .post(
        "https://girish.ml/admin/blog/",
        formData,

        {
          headers: {
            Authorization: `Token ${"b9c5149c48133e6ec998a3d0f052f3cd3122b82d"}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setisPosted(response);
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

                <div>
                  {/* <img src={blogAddimg} className="blog-edit-img"></img> */}
                  <input
                    type="file"
                    id="blogimg1"
                    {...register("picture", { required: true })}
                    // onChange={imageHandler1}
                  ></input>

                  <label
                    className=" blog-add-image-container  btn btn-dark flex flex-jc-c"
                    htmlFor="blogimg1"
                  >
                    Add Top Image{" "}
                  </label>

                  {errors.picture && (
                    <p className="form-err-text">Blog Image is required</p>
                  )}
                </div>
              </div>
              <div className="adminsavebtn flex flex-jc-c">
                <div className="postsavebtn-ctn flex">
                  <button
                    onClick={() => {
                      setisDraft(false);

                      setactiveloader(true);
                    }}
                    type="submit"
                    className="btn btn-dark"
                    disabled={!isValid}
                  >
                    PUBLISH
                  </button>
                  <button
                    onClick={() => {
                      setisDraft(false);

                      setactiveloader(true);
                    }}
                    type="submit"
                    disabled={!isValid}
                    className="btn btn-toggle"
                  >
                    DRAFT
                  </button>
                  {isPosted.status === 201 ? (
                    <Navigate to="/admin/main/blog" />
                  ) : activeloader && isValid ? (
                    <div className="loadercenter">
                      <div className="loader flex flex-jc-c flex-ai-c"></div>
                    </div>
                  ) : null}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddBlog;
