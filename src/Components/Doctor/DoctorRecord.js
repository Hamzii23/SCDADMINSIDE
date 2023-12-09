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
    <div className="main-section" style={{ height: "100%" }}>
      <h3>Doctor Mangement</h3>
      {DoctorRecord.map((records) => (
        <div
          style={{
            backgroundColor: "#313131",
            width: "100%",
            flex: 0.2,
            padding: 10,
          }}
        >
          <div style={{ height: "100%", width: "100%", display: "flex" }}>
            <div
              style={{
                height: 120,
                width: 100,
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#4A3B96",
              }}
            >
              <img
                style={{ width: 100, height: 120 }}
                src={
                  records.profileImage == null
                    ? `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-_-3mhBNtLmon5LbNiPXhxMGdqHlaBGLiDElxbNWBA&s`
                    : `http://localhost:3000/public/img/profile/${records.profileImage}`
                }
                alt=""
              />
            </div>
            <div
              style={{
                height: "80%",
                width: "100%",
                padding: 10,
              }}
            >
              <p
                style={{
                  color: "#fff",
                  marginTop: 5,
                  fontSize: 15,
                  display: "flex",
                  fontWeight: "bold",
                }}
              >
                Name:{" "}
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: "normal",
                  }}
                >
                  {records?.name}
                </p>
              </p>
              <p
                style={{
                  color: "#fff",
                  marginTop: 5,
                  fontSize: 15,
                  display: "flex",
                  fontWeight: "bold",
                }}
              >
                Email:{" "}
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: "normal",
                  }}
                >
                  {records?.email}
                </p>
              </p>
              <p
                style={{
                  color: "#fff",
                  marginTop: 5,
                  fontSize: 15,
                  display: "flex",
                  fontWeight: "bold",
                }}
              >
                Phone No:
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: "normal",
                  }}
                >
                  {records?.phoneNo}
                </p>
              </p>
              <p
                style={{
                  color: "#fff",
                  marginTop: 5,
                  fontSize: 15,
                  display: "flex",
                  fontWeight: "bold",
                }}
              >
                UserType:{" "}
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: "normal",
                  }}
                >
                  {records?.userType}
                </p>
              </p>
            </div>
            <div
              style={{
                width: "40%",
                height: "40%",
                marginRight: "7%",
                marginTop: "4%",
              }}
            >
              <p
                style={{
                  color: "#fff",
                  fontSize: 15,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Status of Doctor
                <p
                  style={{
                    marginTop: 5,
                    alignSelf: "center",
                    textAlign: "center",
                    textTransform: "uppercase",
                    color: records.isApproved == "pending" ? "orange" : "green",
                  }}
                >
                  {records.isApproved}
                </p>
              </p>
            </div>
            <div
              className="buttons"
              style={{
                width: "40%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="delete"
                style={{ height: 50, backgroundColor: "red", color: "#fff" }}
                onClick={() => {
                  handleDelete(records);
                }}
              >
                Delete Record
              </button>
              <button
                className="delete"
                style={{
                  height: 50,
                  backgroundColor: records.active == true ? "green" : "orange",
                  color: "#fff",
                }}
                onClick={() => {
                  handleDeactivated(records);
                }}
              >
                {records.active == true ? "Deactive" : "Active"}
              </button>
              <button
                className="active"
                style={{
                  height: 50,
                  backgroundColor: "#4A3B96",
                  color: "#fff",
                }}
                onClick={() => handleProfile(records)}
              >
                View Profile
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DoctorRecord;
