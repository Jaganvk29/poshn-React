import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { ContactUsData } from "../Data/ContactUsData";
import axios from "axios";
const Adminresponses = () => {
  const [ContactUsData, setContactUsData] = useState([]);

  const getBlogData = async () => {
    var Responce = await axios
      .get("http://18.209.153.146/admin/contact/", {
        headers: {
          Authorization: `Token ${"b9c5149c48133e6ec998a3d0f052f3cd3122b82d"}`,
        },
      })
      .then((data) => {
        const ResponceData = data.data;
        const BlogData = [];
        setContactUsData(ResponceData);
        console.log(ResponceData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBlogData();
  }, []);

  console.log(ContactUsData);

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
                <td>{data.full_name}</td>
                <td>{data.date.substr(0, 10)}</td>
                <td>{data.phone}</td>
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
