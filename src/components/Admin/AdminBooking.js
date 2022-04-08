import React from "react";
import { BookingData } from "./Data/BookingData";

const AdminBooking = () => {
  return (
    <div>
      <div className="managecontainer">
        <h2> Booking Details</h2>

        <table className="content-table">
          <thead>
            <tr>
              <th>ID</th>
              {/* <th>PROFILE</th> */}
              <th>FULLNAME</th>
              <th>DATE</th>
              <th>CONTACT</th>
            </tr>
          </thead>
          <tbody>
            {BookingData.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>

                <td>{data.fullname}</td>
                <td>{data.Date}</td>
                <td>{data.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBooking;
