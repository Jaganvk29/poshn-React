import React from "react";
import SurveyStep from "../SurveyStep";
import { useForm } from "react-hook-form";

const Step5 = (props) => {
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
              question="Personalized meals will actually help you eat healthier
                        and you can enjoy your favorite foods. What are your
                        dietary preferences?"
              option1="No Meat"
              option2="No Fish"
              option3="No Eggs"
              option4="No Dairy"
              option5="No Wheat"
              register={props.register}
              validationmsg={props.validate}
            />

            {/* <SurveyStep
              question="We would like to know about your diet history. What
                        diets have you tried before? (Select all that apply)"
              option1="Carb Controlled"
              option2="Intermittent Fasting"
              option3="Paleo"
              option4="Keto"
              option5="Weight Warchers"
              option6="Noom"
              option7="Never Tried a Specific Diet"
              optional="Here is what I have tried"
        
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
