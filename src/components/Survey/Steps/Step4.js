import React from "react";
import SurveyStep from "../SurveyStep";
import { useForm } from "react-hook-form";

const Step4 = (props) => {
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
              question="Any known food allergies"
              option1="Peanuts"
              option2="Treenuts"
              option3="Shellfish"
              option4="Eggs"
              option5="Dairy"
              option6="Gluten"
              option7="Soy"
              option8="No Known Food Allergies"
              option9="Not Sure"
              optional3="Other Allergies"
              register={props.register}
              validationmsg={props.validate}
              optionalRegister3={props.customtext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
