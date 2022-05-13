import React, { useContext } from "react";
import BookingModal from "../../Home/Modal/BookingModal";
import PoshContext from "../../../PoshContext";
const SurveyCompleted = () => {
  //  MODAL BUTTON HANDLER POPUP
  const { isOpen, modalHandler } = useContext(PoshContext);

  const ModalbtnHandler = () => {
    console.log("CLICKED");
    modalHandler(true);
  };

  return (
    <div className="surveycompleted">
      <div className=" wrapper">
        <div className="survey-last-page">
          <h1> Advice given based on your answers submitted!</h1>

          <p>
            For athletes, high altitude produces two contradictory effects on
            performance. For explosive events (sprints up to 400 metres, long
            jump, triple jump) the reduction in atmospheric pressure means there
            is less resistance from the atmosphere and the athlete's performance
            will generally be better at high altitude.
          </p>

          <button
            type="button"
            onClick={ModalbtnHandler}
            className="btn btn-dark"
          >
            Book Free Consultation
          </button>
        </div>

        <BookingModal open={isOpen}></BookingModal>
      </div>
    </div>
  );
};

export default SurveyCompleted;
