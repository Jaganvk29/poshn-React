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

        <span onClick={props.onpress}> {props.answer}</span>
      </label>
    </div>
  );
};

export default SurevyOptions;
