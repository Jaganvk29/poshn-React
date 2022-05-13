import React, { useState, useEffect, useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import PoshContext from "../../../PoshContext";
import axios from "axios";
import _ from "lodash";
const AdminBlogEdit = () => {
  const params = useParams();

  const { isloadedhandler, loaded, readBlog } = useContext(PoshContext);

  const blogID = params.blogId;

  const [textState, setTextState] = useState([]);

  const [deletebtn, setDeletebtn] = useState(false);
  const [isDeleted, setisDeleted] = useState([]);
  const [isDraft, setisDraft] = useState(false);
  const [isPosted, setisPosted] = useState(false);
  const [activeloader, setactiveloader] = useState(false);

  // GET REQUEST
  const getPostData = async () => {
    var Responce = await axios
      .get(`http://18.209.153.146/blog/${blogID}`)
      .then((data) => {
        const ResponceData = data.data;
        setTextState(ResponceData);
        isloadedhandler(data.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPostData();
  }, []);

  // DELETE REQUEST
  const deleteHandler = () => {
    axios
      .delete(
        `http://18.209.153.146/admin/blog/${blogID}/`,

        {
          headers: {
            Authorization: `Token ${"b9c5149c48133e6ec998a3d0f052f3cd3122b82d"}`,
          },
        }
      )
      .then((response) => {
        setisDeleted(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // PUT REQUEST TO EDIT BLOG
  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("image", data.image[0]);
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("draft", isDraft);

    await axios
      .put(
        `http://18.209.153.146/admin/blog/${blogID}/`,
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

  // REACT HOOK FORMS
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });
  // LOADER ACTIVE CHECKER
  var activateLoader = activeloader && isValid;

  return (
    <div>
      <div className="managecontainer">
        <div className="wrapper">
          <div className="adminfaq">
            {loaded === 200 && (
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1>EDIT : {textState.title} </h1>
                <div className="adminblog-edit">
                  <h1>TITLE</h1>

                  <input
                    className="blogedittext"
                    type="text"
                    value={textState.title}
                    {...register("title", {
                      required: true,
                      minLength: 10,
                    })}
                    onChange={(e) => setTextState({ title: e.target.value })}
                  />
                  {errors.title && (
                    <p className="form-err-text">
                      Minimum 10 Character Required
                    </p>
                  )}

                  <h2>CONTENT</h2>
                  <textarea
                    className="blogedittext"
                    rows="12"
                    cols="5"
                    value={textState.content}
                    {...register("content", {
                      required: true,
                      minLength: 20,
                    })}
                    onChange={(e) => setTextState({ content: e.target.value })}
                  ></textarea>

                  {errors.content && (
                    <p className="form-err-text">
                      Minimum 20 Character Required
                    </p>
                  )}
                  {/* IMAGE PREVIEW AND UPLOAD */}
                  <h1>BLOG IMAGE</h1>

                  <img className="blog-edit-img" src={readBlog.image}></img>
                  <div>
                    {" "}
                    <input
                      type="file"
                      {...register("image", { required: true })}
                    ></input>{" "}
                    {errors.image && (
                      <p className="form-err-text">Blog Image is required</p>
                    )}
                  </div>
                </div>
                <div className="adminsavebtn flex flex-jc-sb">
                  <div className="flex">
                    {!deletebtn && (
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => setDeletebtn(!deletebtn)}
                        // onClick={deleteHandler}
                      >
                        DELETE
                      </button>
                    )}
                    {deletebtn && (
                      <div className="deletebutton-ctn flex flex-ai-c">
                        <h3>Are You Sure to </h3>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => {
                            deleteHandler();
                            setactiveloader(true);
                          }}
                        >
                          DELETE
                        </button>
                        {isDeleted.status === 204 ? (
                          <Navigate to="/admin/main/blog" />
                        ) : (
                          activeloader && (
                            <div className="loadercenter">
                              <div className="loader flex flex-jc-c flex-ai-c"></div>
                            </div>
                          )
                        )}
                        <button
                          type="button"
                          className="btn btn-dark"
                          onClick={() => setDeletebtn(false)}
                        >
                          CANCEL
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="postsavebtn-ctn flex">
                    <button
                      disabled={!isValid}
                      onClick={() => {
                        setisDraft(false);

                        setactiveloader(true);
                      }}
                      type="submit"
                      className="btn btn-dark"
                    >
                      SAVE
                    </button>
                    <button
                      disabled={!isValid}
                      onClick={() => {
                        setisDraft(true);

                        setactiveloader(true);
                      }}
                      type="submit"
                      className="btn btn-toggle"
                    >
                      DRAFT
                    </button>
                    {isPosted.status === 200 ? (
                      <Navigate to="/admin/main/blog" />
                    ) : (
                      activateLoader && (
                        <div className="loadercenter">
                          <div className="loader flex flex-jc-c flex-ai-c"></div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBlogEdit;
