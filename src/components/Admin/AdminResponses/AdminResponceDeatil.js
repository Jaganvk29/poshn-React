import React from "react";
import { useParams } from "react-router-dom";
import { ContactUsData } from "../Data/ContactUsData";

const AdminResponceDeatil = () => {
  const params = useParams();

  const responseId = params.resposeID;

  return (
    <div>
      <div className="managecontainer">
        <h1>RESPONSE DETAILS</h1>

        <div className="responsesDetail">
          <h4>NAME</h4>
          <p>{ContactUsData[responseId].fullname}</p>
        </div>

        <div className="responsesDetail">
          <h4>CONTACT</h4>
          <p>{ContactUsData[responseId].contact}</p>
        </div>

        <div className="responsesDetail">
          <h4>EMAIL</h4>
          <p>{ContactUsData[responseId].email}</p>
        </div>

        <div className="responsesDetail">
          <h4>MESSAGE</h4>
          <p>{ContactUsData[responseId].message}</p>
        </div>
      </div>
    </div>
  );
};
export default AdminResponceDeatil;
