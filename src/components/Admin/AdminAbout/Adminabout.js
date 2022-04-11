import React, { useState } from "react";
import person from "../../../Assets/person.jpg";
import { AboutData } from "../../About/AboutData";
import { useForm } from "react-hook-form";

const Adminabout = () => {
  const [textState, setTextState] = useState({
    description: AboutData[0].aboutdesc,
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
        <h1>ABOUT</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="image"
              src={person}
              alt="Submit"
              width="300"
              height="350"
            />
          </div>

          <div>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              {...register("AdminPhoto", {
                required: true,
              })}
            ></input>
            {errors.AdminPhoto && (
              <p className="form-err-text">
                {" "}
                Please Upload About Profile Image{" "}
              </p>
            )}
          </div>
          <div>
            <textarea
              className="faqedittext"
              cols="5"
              rows="5"
              contenteditable="true"
              placeholder="ENTER YOUR DESCRIPTION"
              value={textState.description}
              {...register("AdminDesc", {
                required: true,
                minLength: 30,
              })}
              onChange={(e) => setTextState({ description: e.target.value })}
            ></textarea>
            {errors.AdminDesc && (
              <p className="form-err-text"> Minimum 30 Character Required </p>
            )}
          </div>
          <div className="adminsavebtn">
            <button type="submit" className="btn btn-dark">
              EDIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Adminabout;
