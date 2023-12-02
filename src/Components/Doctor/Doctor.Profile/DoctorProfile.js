// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import Doctor from "../../../Images/doctor svg.svg";
import "../Doctor.Profile/DoctorProfile.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function DoctorProfile() {
  const [userProfile, setUserProfile] = useState({}); // Set initial value to an empty object
  const navigation = useNavigate();
  useEffect(() => {
    const userData = window.localStorage.getItem("userRecords");
    const parsedData = JSON.parse(userData);
    console.log(parsedData);

    setUserProfile(parsedData);
  }, []);
  const handleApproved = async (status) => {
    var userData = await window.localStorage.getItem("userData");
    userData = JSON.parse(userData);
    const response = await axios.patch(
      `http://localhost:3000/api/v1/admin/updateDoctor/${userProfile._id}`,
      { isApproved: status },
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
    navigation(`/DoctorRecord`);
    window.location.reload();
  };
  const handleCancelled = async (status) => {
    var userData = await window.localStorage.getItem("userData");
    userData = JSON.parse(userData);
    const response = await axios.patch(
      `http://localhost:3000/api/v1/admin/updateDoctor/${userProfile._id}`,
      { isApproved: status },
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
    navigation(`/DoctorRecord`);
    window.location.reload();
  };
  return (
    <section className="main-section">
      <div className="first">
        <div className="first-left">
          {/* <i>
            <BsFillCalendar2XFill />
          </i> */}
          <p>{userProfile.name}</p>
        </div>

        <div>
          <img
            src={
              userProfile.profileImage == null
                ? `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-_-3mhBNtLmon5LbNiPXhxMGdqHlaBGLiDElxbNWBA&s`
                : `http://localhost:3000/public/img/profile/${userProfile.profileImage}`
            }
            alt=""
          />
        </div>
        <div
          className="buttons"
          style={{
            height: 40,
            alignSelf: "baseline",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "80%",
            marginTop: 100,
          }}
        >
          <button
            className="button-2"
            onClick={() => {
              handleCancelled("cancelled");
            }}
          >
            Cancelled
          </button>
          <br />
          <br />
          <button
            className="button-1"
            onClick={() => {
              handleApproved("approved");
            }}
          >
            Approved
          </button>
        </div>
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

        <div className="card-1">
          <p className="sub-text">Status</p>
          <p
            className="main-text"
            style={{
              textTransform: "capitalize",
              color: userProfile.isApproved == "panding" ? "orange" : "green",
            }}
          >
            {userProfile.isApproved}
          </p>
        </div>
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
        <div className="card-1">
          <p className="sub-text">License No</p>
          <p className="main-text">
            {userProfile?.licenseNo == null
              ? "Not Selected"
              : userProfile?.licenseNo}
          </p>
        </div>

        <div className="card-1">
          <p className="sub-text">NationalID</p>
          <p className="main-text">
            {userProfile?.nationalID == null
              ? "Not Selected"
              : userProfile?.nationalID}
          </p>
        </div>
      </div>
      <p style={{ color: "white" }}>Service Document</p>
      <a
        href={`http://localhost:3000/public/img/serviceDocuments/${userProfile.serviceDocuments}`}
      >
        <img
          src={`http://localhost:3000/public/img/serviceDocuments/${userProfile.serviceDocuments}`}
          alt=""
        />
      </a>
    </section>
  );
}

export default DoctorProfile;
