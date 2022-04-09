import React, { useState } from "react";
import person from "../../../Assets/person.jpg";

const Adminabout = () => {
  const [textState, setTextState] = useState({
    description: "HEY THIS IS POSHN WELCOME TO .......",
  });
  return (
    <div>
      <div className="managecontainer">
        <h1>ABOUT</h1>
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
          <input type="file" id="img" name="img" accept="image/*"></input>
        </div>
        <div>
          <textarea
            className="faqedittext"
            cols="5"
            rows="5"
            contenteditable="true"
            placeholder="ENTER YOUR DESCRIPTION"
            value={textState.description}
            onChange={(e) => setTextState({ description: e.target.value })}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Adminabout;
