import React, { useEffect, useRef, useState } from "react";
import person from "../../../Assets/person.jpg";
import { AboutData } from "../../About/AboutData";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Adminabout = () => {
  const [profileimg1, setprofileimg1] = useState();
  const [profileimg2, setprofileimg2] = useState();
  const [profileimg3, setprofileimg3] = useState();
  const [isloaded, setisloaded] = useState();
  const [isPosted, setisPosted] = useState(false);
  const [textState, setTextState] = useState({});
  const [activeloader, setactiveloader] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const imageHandler1 = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setprofileimg1(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const imageHandler2 = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setprofileimg2(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const imageHandler3 = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setprofileimg3(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  // const onSubmit = (data) => console.log(data);

  // GET REQUEST

  const getBlogData = async () => {
    var Responce = await axios
      .get("https://girish.ml/about")
      .then((data) => {
        const ResponceData = data.data;
        // console.log(ResponceData);
        setTextState(...ResponceData);
        setisloaded(data.status);
        const BlogData = [];
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const oldimghandler = () => {
    if (isloaded === 200) {
      setprofileimg1(textState.image1);
      setprofileimg2(textState.image2);
      setprofileimg3(textState.image3);
    }
  };

  useEffect(
    (isloaded) => {
      getBlogData();
      oldimghandler();
    },
    [isloaded]
  );

  // PUT REQUEST TO EDIT BLOG
  const onSubmit = async (data) => {
    const formData = new FormData();
    console.log(data);

    formData.append("image1", data.image1[0]);
    formData.append("image2", data.image2[0]);
    formData.append("image3", data.image3[0]);

    console.log(data);
    formData.append("name", data.name);
    formData.append(
      "professional_affiliations",
      data.professional_affiliations
    );
    formData.append("professional_background", data.professional_background);
    formData.append("experience", data.experience);
    formData.append("about", data.about);

    await axios
      .put(
        `https://girish.ml/admin/about/1/`,
        formData,

        {
          headers: {
            // "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "*",
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
        <h1>ABOUT</h1>
        {isloaded === 200 ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="admin-img-btn-container ">
              <div className="admin-img-btn-upload-1 flex-gap-10">
                <img className="admin-ab-img-1" src={profileimg1} />

                <input
                  type="file"
                  id="profileimg1"
                  // name="profileimg1"
                  // accept="image/*"
                  {...register("image1", {
                    required: true,
                  })}
                  onChange={imageHandler1}
                ></input>

                <label
                  className="btn btn-dark flex flex-jc-c"
                  htmlFor="profileimg1"
                >
                  Add Top Image{" "}
                </label>

                {errors.image1 && (
                  <p className="form-err-text">
                    {" "}
                    Please Upload About Profile Image{" "}
                  </p>
                )}
              </div>

              <h1 className="flex flex-jc-c">NAME</h1>
              <input
                className="faqedittext"
                type="text"
                placeholder="ENTER TOUR NAME"
                value={textState.name}
                {...register("name", {
                  required: true,
                  minLength: 5,
                })}
                onChange={(e) => setTextState({ name: e.target.value })}
              ></input>
              {errors.name && (
                <p className="form-err-text"> Minimum 5 Character Required </p>
              )}

              {/* <h1 className="admin-ab-name flex flex-jc-c">Hello, I’m Mudita</h1> */}

              <div className="admin-img-btn-container-child flex flex-jc-se">
                <div className="admin-img-btn-upload-2">
                  <div className="flex flex-fd-c flex-gap-10">
                    <img className="admin-ab-img-1" src={profileimg2} />

                    <input
                      type="file"
                      id="profileimg2"
                      // name="profileimg1"
                      // accept="image/*"
                      {...register("image2", {
                        required: true,
                      })}
                      onChange={imageHandler2}
                    ></input>

                    <label
                      className="btn btn-dark flex flex-jc-c"
                      htmlFor="profileimg2"
                    >
                      Add LEFT Image
                    </label>
                  </div>

                  {errors.image2 && (
                    <p className="form-err-text">
                      {" "}
                      Please Upload About Profile Image{" "}
                    </p>
                  )}
                </div>

                <div className="admin-img-btn-upload-3">
                  <div className="flex flex-fd-c flex-gap-10">
                    <img className="admin-ab-img-1" src={profileimg3} />

                    <input
                      type="file"
                      id="profileimg3"
                      // name="profileimg1"
                      // accept="image/*"
                      {...register("image3", {
                        required: true,
                      })}
                      onChange={imageHandler3}
                    ></input>

                    <label
                      className="btn btn-dark flex flex-jc-c"
                      htmlFor="profileimg3"
                    >
                      Add Right Image
                    </label>
                  </div>

                  {errors.image3 && (
                    <p className="form-err-text">
                      {" "}
                      Please Upload About Profile Image{" "}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h1 className="flex flex-jc-c">ABOUT</h1>
              <textarea
                className="faqedittext"
                cols="5"
                rows="5"
                contenteditable="true"
                placeholder="ENTER YOUR DESCRIPTION"
                value={textState.about}
                {...register("about", {
                  required: true,
                  minLength: 30,
                })}
                onChange={(e) => setTextState({ about: e.target.value })}
              ></textarea>
              {errors.about && (
                <p className="form-err-text"> Minimum 30 Character Required </p>
              )}

              <h1 className="flex flex-jc-c">EXPERIENCE</h1>

              <textarea
                className="faqedittext"
                cols="5"
                rows="5"
                contenteditable="true"
                placeholder="ENTER YOUR DESCRIPTION"
                value={textState.experience}
                {...register("experience", {
                  required: true,
                  minLength: 30,
                })}
                onChange={(e) => setTextState({ experience: e.target.value })}
              ></textarea>
              {errors.experience && (
                <p className="form-err-text"> Minimum 30 Character Required </p>
              )}

              <h1 className="flex flex-jc-c">Professional Background</h1>

              <textarea
                className="faqedittext"
                cols="5"
                rows="5"
                contenteditable="true"
                placeholder="ENTER YOUR DESCRIPTION"
                value={textState.professional_background}
                {...register("professional_background", {
                  required: true,
                  minLength: 30,
                })}
                onChange={(e) =>
                  setTextState({ professional_background: e.target.value })
                }
              ></textarea>
              {errors.professional_background && (
                <p className="form-err-text"> Minimum 30 Character Required </p>
              )}

              <h1 className="flex flex-jc-c">Professional Affiliations</h1>

              <textarea
                className="faqedittext"
                cols="5"
                rows="5"
                contenteditable="true"
                placeholder="ENTER YOUR DESCRIPTION"
                value={textState.professional_affiliations}
                {...register("professional_affiliations", {
                  required: true,
                  minLength: 30,
                })}
                onChange={(e) =>
                  setTextState({ professional_affiliations: e.target.value })
                }
              ></textarea>
              {errors.professional_affiliations && (
                <p className="form-err-text"> Minimum 30 Character Required </p>
              )}
            </div>
            <div className="adminsavebtn">
              <button
                disabled={!isValid}
                type="submit"
                className="btn btn-dark"
                onClick={() => {
                  setactiveloader(true);
                }}
              >
                PUBLISH
              </button>
              {isPosted.status === 200 ? (
                <Navigate to="/admin/main/dashboard" />
              ) : (
                activeloader && (
                  <div className="loadercenter">
                    <div className="loader flex flex-jc-c flex-ai-c"></div>
                  </div>
                )
              )}
            </div>
          </form>
        ) : null}
      </div>
    </div>
  );
};

export default Adminabout;
