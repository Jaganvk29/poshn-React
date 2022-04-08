import React from "react";
import { Link } from "react-router-dom";
import { DietSurveyData } from "./Data/DietSurveyData";

const AdmindietSurvey = () => {
  return (
    <div>
      <div className="managecontainer">
        <h2>Diet Survey Details</h2>

        <table className="content-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>FULLNAME</th>
              <th>DATE</th>
              <th>CONTACT</th>
              <th>EMAIL</th>
              <th>SURVEY</th>
            </tr>
          </thead>
          <tbody>
            {DietSurveyData.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>

                <td>{data.fullname}</td>
                <td>{data.Date}</td>
                <td>{data.contact}</td>
                <td>{data.email}</td>
                <Link to="detail">
                  <td>READ</td>
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdmindietSurvey;
