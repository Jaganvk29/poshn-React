import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContactUsData } from "../Data/ContactUsData";
import axios from "axios";

const AdminResponceDeatil = () => {
  const params = useParams();

  const responseId = params.resposeID;
  const [isLoaded, setisLoaded] = useState();
  const [BookingData, setBookingData] = useState([]);

  const getBlogData = async () => {
    var Responce = await axios
      .get(`http://18.209.153.146/admin/contact/${responseId}`, {
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
      {" "}
      {isLoaded === 200 ? (
        <div className="managecontainer">
          <h1>RESPONSE DETAILS</h1>

          <div className="responsesDetail">
            <h4>NAME</h4>
            {/* <p>{ContactUsData[responseId].fullname}</p> */}
            <p>{BookingData.full_name}</p>
          </div>

          <div className="responsesDetail">
            <h4>CONTACT</h4>
            {/* <p>{ContactUsData[responseId].contact}</p> */}
            <p>{BookingData.phone}</p>
          </div>

          <div className="responsesDetail">
            <h4>EMAIL</h4>
            {/* <p>{ContactUsData[responseId].email}</p> */}
            <p>{BookingData.email}</p>
          </div>

          <div className="responsesDetail">
            <h4>MESSAGE</h4>
            {/* <p>{ContactUsData[responseId].message}</p> */}
            <p>{BookingData.message}</p>
          </div>
          <div className="adminsavebtn flex flex-jc-sb ">
            <div className="postsavebtn-ctn flex">
              <Link to="/admin/main/responses">
                <button type="submit" className="btn btn-toggle">
                  BACK
                </button>
              </Link>
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
export default AdminResponceDeatil;
