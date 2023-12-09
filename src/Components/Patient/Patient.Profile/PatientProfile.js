// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import Doctor from "../../../Images/doctor svg.svg";
import "./PatientProfile.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function PatientProfile() {
  const navigation = useNavigate();
  const [userProfile, setUserProfile] = useState({}); // Set initial value to an empty object

  useEffect(() => {
    const userData = window.localStorage.getItem("userRecords");
    const parsedData = JSON.parse(userData);
    console.log(parsedData);

    setUserProfile(parsedData);
  }, []);
  const handleDelete = async (userProfile) => {
    var userData = await window.localStorage.getItem("userData");
    userData = JSON.parse(userData);
    const response = await axios.delete(
      `http://localhost:3000/api/v1/admin/delete/${userProfile._id}`,
      {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      }
    );
    if (response.error) {
      alert("NetWork Problem");
    }
    alert("Record Deleted");
    navigation("/PatientRecrod");
  };
  return (
    <section className="main-section">
      <div
        style={{
          width: "100%",
          height: "30%",
          display: "flex",
        }}
      >
        <div
          style={{
            height: 150,
            width: 120,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#313131",
          }}
        >
          <img
            style={{ width: 120, height: 150 }}
            src={
              userProfile.profileImage == null
                ? `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-_-3mhBNtLmon5LbNiPXhxMGdqHlaBGLiDElxbNWBA&s`
                : `http://localhost:3000/public/img/profile/${userProfile.profileImage}`
            }
            alt=""
          />
        </div>
        <p
          style={{
            color: "#fff",
            marginTop: 5,
            fontSize: 15,
            display: "flex",
            fontWeight: "bold",
            width: "20%",
            height: "10%",
            marginLeft: 10,
          }}
        >
          Name:{" "}
          <p
            style={{
              fontSize: 14,
              fontWeight: "normal",
            }}
          >
            {userProfile.name}
          </p>
        </p>
      </div>
      <div className="second">
        <div className="card-1">
          <p className="sub-text">Email</p>
          <p className="main-text">{userProfile.email}</p>
        </div>

        <div className="card-1">
          <p className="sub-text">Phone</p>
          <p className="main-text">
            {userProfile?.phoneNo == null
              ? "Not Selected"
              : userProfile?.phoneNo}
          </p>
        </div>

        <div className="card-1">
          <p className="sub-text">Gender</p>
          <p className="main-text">
            {userProfile?.gender == null ? "Not Selected" : userProfile?.gender}
          </p>
        </div>

        {/* <div className="card-1">
          <p className="sub-text">Email</p>
          <p className="main-text">john@mail.com</p>
        </div> */}
      </div>
      <div className="third">
        <div className="card-1">
          <p className="sub-text">Skin Type</p>
          <p className="main-text">
            {userProfile?.skinType == null
              ? "Not Selected"
              : userProfile?.skinType}
          </p>
        </div>

        <div className="card-1">
          <p className="sub-text">Date Of Birth</p>
          <p className="main-text">
            {userProfile?.dateOfBirth == null
              ? "Not Selected"
              : userProfile?.dateOfBirth}
          </p>
        </div>
      </div>
      <div className="third">
        <div
          className="card-1"
          style={{
            width: "40%",
            backgroundColor: userProfile.active == true ? "green" : "orange",
          }}
        >
          <p className="sub-text">Status</p>
          <p className="main-text">
            {userProfile.active == true ? "Activeted" : "Deactiveted"}
          </p>
        </div>

        <div className="card-1">
          <p className="sub-text">Skin Allergy</p>
          <p className="main-text">
            {userProfile?.allergyType == null
              ? "Not Selected"
              : userProfile?.allergyType}
          </p>
        </div>
      </div>
      <div className="buttons">
        <button
          className="button-2"
          onClick={() => {
            handleDelete(userProfile);
          }}
        >
          Delete Records
        </button>
        <br />
        <br />
      </div>
    </section>
  );
}

export default PatientProfile;
