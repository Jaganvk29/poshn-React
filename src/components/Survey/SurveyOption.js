import React from "react";

const SurveyOption = (props) => {
  return (
    <label>
      <input type="checkbox" name="Surveyanswer1" id="ans1" />
      <span>{props.surveyAnswer}</span>
    </label>
  );
};

export default SurveyOption;
