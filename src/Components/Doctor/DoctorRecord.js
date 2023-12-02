import React, { useEffect, useState } from "react";
import "../Doctor/DoctorRecrodStyle.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DoctorRecord() {
  const navigation = useNavigate();
  const [DoctorRecord, setDoctorRecord] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        var userData = await window.localStorage.getItem("userData");
        userData = JSON.parse(userData);

        const response = await axios.get(
          "http://localhost:3000/api/v1/admin/AllUsers/DOCTOR",
          {
            headers: {
              Authorization: `Bearer ${userData.token}`,
            },
          }
        );
        setDoctorRecord(response.data.data);
        // console.log(response.data);
      } catch (error) {
        // Handle error
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleProfile = async (records) => {
    await localStorage.setItem("userRecords", JSON.stringify(records));
    navigation(`/DoctorProfile`);
  };
  const handleDeactivated = async (records) => {
    var userData = await window.localStorage.getItem("userData");
    userData = JSON.parse(userData);
    if (records.active == true) {
      var status = false;
    } else {
      status = true;
    }

    const response = await axios.patch(
      `http://localhost:3000/api/v1/admin/deactiveUser/${records._id}`,
      { active: status },
      {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      }
    );
    if (response.error) {
      alert("NetWork Problem");
    }
    alert("Record Updated");
    window.location.reload();
  };
  const handleDelete = async (records) => {
    var userData = await window.localStorage.getItem("userData");
    userData = JSON.parse(userData);
    const response = await axios.delete(
      `http://localhost:3000/api/v1/admin/delete/${records._id}`,
      {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      }
    );
    if (response.error) {
      alert("NetWork Problem");
    }
    alert("Record Updated");
    window.location.reload();
  };
  return (
    <div className="main-section">
      <h3>Doctor Mangement</h3>
      {DoctorRecord.map((records) => (
        <div className="main-card">
          <div className="user-info">
            <div className="user-pic">
              <img
                style={{ width: 35, height: 40 }}
                src={
                  records.profileImage == null
                    ? `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-_-3mhBNtLmon5LbNiPXhxMGdqHlaBGLiDElxbNWBA&s`
                    : `http://localhost:3000/public/img/profile/${records.profileImage}`
                }
                alt=""
              />
            </div>
            <div className="user-name" style={{ width: 250 }}>
              <p className="name">{records?.name}</p>
              <p className="email">{records?.email}</p>
            </div>
          </div>
          <p
            style={{
              alignSelf: "center",
              textAlign: "center",
              color: records.isApproved == "panding" ? "orange" : "green",
            }}
          >
            {records.isApproved}
          </p>

          <div className="buttons">
            <button
              className="delete"
              onClick={() => {
                handleDelete(records);
              }}
            >
              Delete Record
            </button>
            <button
              className="active"
              onClick={() => {
                handleDeactivated(records);
              }}
            >
              {records.active == true ? "Deactive" : "Active"}
            </button>
            <button
              className="view-profile"
              onClick={() => handleProfile(records)}
            >
              View Profile
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DoctorRecord;
