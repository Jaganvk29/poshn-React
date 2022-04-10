import React, { useState } from "react";

const InputTextArea = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div class="field flex flex-col h-full">
      <label>{props.label}</label>
      <div
        class={`input flex flex-ai-c h-full flex-grow ${
          isFocused ? " input flex flex-ai-c h-full flex-grow focus" : " "
        }`}
      >
        <textarea
          name="message"
          class="input-field"
          cols=""
          rows="5"
          placeholder={props.placeholder}
          {...props.registerinput}
          onBlur={(e) => setIsFocused(false)}
          onFocus={(e) => setIsFocused(true)}
        ></textarea>
      </div>
      {props.errors}
    </div>
  );
};

export default InputTextArea;
