// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import Doctor from "../../../Images/doctor svg.svg";
import "./PatientProfile.css";
import { useParams } from "react-router-dom";

function PatientProfile() {
  const [userProfile, setUserProfile] = useState({}); // Set initial value to an empty object

  useEffect(() => {
    const userData = window.localStorage.getItem("userRecords");
    const parsedData = JSON.parse(userData);
    console.log(parsedData);

    setUserProfile(parsedData);
  }, []);
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
      <div className="buttons">
        <button className="button-2">Delete Records</button>
        <br />
        <br />
        <button className="button-1">Edit Records</button>
      </div>
    </section>
  );
}

export default PatientProfile;
