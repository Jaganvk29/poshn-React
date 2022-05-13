import React from "react";
import SurveyStep from "../SurveyStep";
import { useForm } from "react-hook-form";

const Step10 = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    // const formData = new FormData();

    const formdata2 = {
      choices: data,
      custom_answer: "string",
      question:
        "At PoshN, You are in the safe hands of a Board Certified Registered Dietitian Nutritionist, an expert in food and nutrition. Tell us about your goals? (Select all that apply)",
      user: 0,
    };

    console.log(formdata2);
  };

  return (
    <div>
      <div className="survey-step-container bg-color-2">
        <div className="newwrapper">
          <div onSubmit={handleSubmit(onSubmit)}>
            <SurveyStep
              question="You are almost there we would love to know how did you
                        hear about us?"
              option1="INSTAGRAM"
              option2="FACEBOOK"
              option3="GOOGLE / SEARCH ENGINE"
              option4="LINKEDIN"
              option5="TWITTER"
              option6="BLOG"
              optional4="FRIENDS / FAMILY"
              register={props.register}
              validationmsg={props.validate}
              optionalRegister4={props.customtext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step10;
