import { createContext, useState } from "react";

const SurveyContext = createContext();

export function SurveyProvider({ children }) {
  const [userid, setuserid] = useState();
  //  Survey User ID

  const surveyUserHandler = (uId) => {
    setuserid(uId);
  };

  // Survey1
  const [formstep, setformstep] = useState(0);
  // Survey1 Handler
  const formstepHandler = function (step) {
    setformstep(step);
  };

  // Survey1
  const [isSelected1, setisSelected1] = useState(false);
  // Survey1 Handler
  const surveyselectHandler1 = function (isopen) {
    setisSelected1(isopen);
  };

  // Survey2
  const [isSelected2, setisSelected2] = useState(false);
  // Survey1 Handler
  const surveyselectHandler2 = function (isopen) {
    setisSelected2(isopen);
  };

  // Survey3
  const [isSelected3, setisSelected3] = useState(false);
  // Survey1 Handler
  const surveyselectHandler3 = function (isopen) {
    setisSelected3(isopen);
  };

  // Survey4
  const [isSelected4, setisSelected4] = useState(false);
  // Survey1 Handler
  const surveyselectHandler4 = function (isopen) {
    setisSelected4(isopen);
  };

  // Survey5
  const [isSelected5, setisSelected5] = useState(false);
  // Survey1 Handler
  const surveyselectHandler5 = function (isopen) {
    setisSelected5(isopen);
  };

  return (
    <SurveyContext.Provider
      value={{
        // SURVEY
        isSelected1,
        surveyselectHandler1,

        // SURVEY
        isSelected2,
        surveyselectHandler2,

        // SURVEY
        isSelected3,
        surveyselectHandler3,

        // SURVEY
        isSelected4,
        surveyselectHandler4,

        // SURVEY
        isSelected5,
        surveyselectHandler5,

        // FORM STEP
        formstepHandler,
        formstep,

        // USER ID
        userid,
        surveyUserHandler,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
}

export default SurveyContext;
