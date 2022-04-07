import React from "react";
import { useForm } from "react-hook-form";

const SurevyOptions = (props) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="Surveyanswer"
          id="ans"
          value={props.answer}
          {...props.register}
        />

        <span onClick={props.onpress}>
          {" "}
          <p>{props.answer}</p>
        </span>
      </label>
    </div>
  );
};

export default SurevyOptions;
