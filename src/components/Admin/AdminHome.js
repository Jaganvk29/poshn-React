import React from "react";
import { ContactUsData } from "./Data/ContactUsData";
import { BookingData } from "./Data/BookingData";

const AdminHome = () => {
  return (
    <div>
      {" "}
      <div className="dash-col1">
        <div className="pricingmembership">
          <h2> Pricing Membership</h2>
        </div>
        <div className="reponces">
          <h2> Responces</h2>

          <table className="content-table">
            <thead>
              <tr>
                <th>FULLNAME</th>
                <th>DATE</th>
              </tr>
            </thead>
            <tbody>
              {ContactUsData.map(
                (data, index) =>
                  index < 5 && (
                    <tr key={data.id}>
                      <td>{data.fullname}</td>
                      <td>{data.Date}</td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="dash-col2">
        <div className="pricingmembership">
          <h2> Booking Details</h2>

          <table className="content-table">
            <thead>
              <tr>
                <th>ID</th>

                <th>FULLNAME</th>
                <th>DATE</th>
                <th>CONTACT</th>
              </tr>
            </thead>
            <tbody>
              {BookingData.map(
                (data, index) =>
                  index < 10 && (
                    <tr>
                      <td>{data.id}</td>

                      <td>{data.fullname}</td>
                      <td>{data.Date}</td>
                      <td>{data.email}</td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
