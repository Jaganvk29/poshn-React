import React, { useEffect, useState } from "react";

// import { BookingData } from "../Data/BookingData";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminBooking = () => {
  const [BookingData, setBookingData] = useState([]);

  const getBlogData = async () => {
    var Responce = await axios
      .get("http://18.209.153.146/admin/consultation/", {
        headers: {
          Authorization: `Token ${"b9c5149c48133e6ec998a3d0f052f3cd3122b82d"}`,
        },
      })
      .then((data) => {
        const ResponceData = data.data;
        const BlogData = [];
        setBookingData(ResponceData);
        console.log(ResponceData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBlogData();
  }, []);

  console.log(BookingData);

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
              <th>MESSAGES</th>
            </tr>
          </thead>
          <tbody>
            {BookingData.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>

                <td>{data.full_name}</td>
                <td>{data.date.substr(0, 10)}</td>
                <td>{data.phone}</td>
                <Link to={`detail/${data.id}`}>
                  <td>Read Now</td>
                </Link>

                <td>{data.consultaion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBooking;
