import React, { useState } from "react";

const Input = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="field mb-24px">
      <label>{props.label}</label>
      <div
        className={`input flex flex-ai-c ${
          isFocused ? " input flex flex-ai-c focus" : " "
        }`}
      >
        <div className={`icon ${props.icon}  icon-grey mr-10px `}></div>
        <input
          // name="name"
          className="input-field"
          type="text"
          placeholder={props.placeholder}
          // ref={userNameref}
          {...props.registerinput}
          onBlur={(e) => setIsFocused(false)}
          onFocus={(e) => setIsFocused(true)}
        />
      </div>
      {props.errors}
    </div>
  );
};

export default Input;
