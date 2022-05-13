import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import axios from "axios";

const AdminBookingDetails = () => {
  const [isLoaded, setisLoaded] = useState();
  const [activeloader, setactiveloader] = useState(false);

  const params = useParams();

  const responseId = params.resposeID;

  const [BookingData, setBookingData] = useState([]);

  const getBlogData = async () => {
    var Responce = await axios
      .get(`http://18.209.153.146/admin/consultation/${responseId}`, {
        headers: {
          Authorization: `Token ${"b9c5149c48133e6ec998a3d0f052f3cd3122b82d"}`,
        },
      })
      .then((data) => {
        const ResponceData = data.data;
        const BlogData = [];
        setBookingData(ResponceData);

        setisLoaded(data.status);
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
      {isLoaded === 200 ? (
        <div className="managecontainer">
          <div>
            <h1>RESPONSE DETAILS</h1>

            <div className="responsesDetail">
              <h4>NAME</h4>

              <p>{BookingData.full_name}</p>
            </div>

            <div className="responsesDetail">
              <h4>CONTACT</h4>

              <p>{BookingData.phone}</p>
            </div>

            <div className="responsesDetail">
              <h4>EMAIL</h4>

              <p>{BookingData.email}</p>
            </div>

            <div className="responsesDetail">
              <h4>MESSAGE</h4>

              <p>{BookingData.message}</p>
            </div>

            <div className="responsesDetail">
              <h4>CONSULTATION TYPE</h4>

              <p>{BookingData.consultation_type}</p>
            </div>
            <div className="adminsavebtn flex flex-jc-sb ">
              <div className="postsavebtn-ctn flex">
                <Link to="/admin/main/bookings">
                  <button type="submit" className="btn btn-toggle">
                    BACK
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loadercenter managecontainer flex flex-jc-c flex-ai-c">
          <div className="loader flex flex-jc-c flex-ai-c"></div>
        </div>
      )}
    </div>
  );
};

export default AdminBookingDetails;
