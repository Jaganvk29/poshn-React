import React from "react";
import SurveyStep from "../SurveyStep";
import { useForm } from "react-hook-form";

const Step7 = (props) => {
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
              question="In order to have sustainable relationship, we would like
                        to know your communication style"
              option1="Inner Circle: Someone who can provide safe space and I can open up to"
              option2="Hands on: I need push and pep to go"
              option3="Challenger: I do best when someone challenges me"
              option4="Leave me alone: Let’s discuss what needs to be done and I will take it from there"
              register={props.register}
              validationmsg={props.validate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step7;
