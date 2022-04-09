import React from "react";
import { useParams } from "react-router-dom";
import { ContactUsData } from "../Data/ContactUsData";

const AdminResponceDeatil = () => {
  const params = useParams();

  const responseId = params.resposeID;

  return (
    <div>
      <div className="managecontainer">
        <h1>RESPONSE DETAIL : {ContactUsData[responseId].fullname}</h1>

        <h2>NAME</h2>
        <p>{ContactUsData[responseId].fullname}</p>

        <h2>CONTACT</h2>
        <p>{ContactUsData[responseId].contact}</p>

        <h2>EMAIL</h2>
        <p>{ContactUsData[responseId].email}</p>

        <h2>MESSAGE</h2>
        <p>{ContactUsData[responseId].message}</p>
      </div>
    </div>
  );
};
export default AdminResponceDeatil;
