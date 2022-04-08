import React from "react";
import { Link } from "react-router-dom";
import { ContactUsData } from "./Data/ContactUsData";

const Adminresponses = () => {
  return (
    <div>
      <div className="managecontainer">
        <h2>Responses</h2>

        <table className="content-table">
          <thead>
            <tr>
              <th>FULLNAME</th>
              <th>DATE</th>
              <th>CONTACT</th>
              <th>EMAIL</th>
              <th>MESSAGES</th>
            </tr>
          </thead>
          <tbody>
            {ContactUsData.map((data) => (
              <tr key={data.id}>
                <td>{data.fullname}</td>
                <td>{data.Date}</td>
                <td>{data.contact}</td>
                <td>{data.email}</td>

                <Link to={`detail/${data.id}`}>
                  <td>Read Now</td>
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Adminresponses;
