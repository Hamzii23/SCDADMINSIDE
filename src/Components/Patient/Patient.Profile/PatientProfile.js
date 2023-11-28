// eslint-disable-next-line
import React from "react";
import Doctor from "../../../Images/doctor svg.svg";
// import {
//   BsFillCalendar2CheckFill,
//   BsFillCalendarXFill,
//   BsFillCalendar2PlusFill,
//   BsFillCalendar2XFill,
// } from "react-icons/bs";

import "./PatientProfile.css";

function PatientProfile() {
  return (
    <section className="main-section">
      <div className="first">
        <div className="first-left">
          {/* <i>
            <BsFillCalendar2XFill />
          </i> */}
          <p>John Doe</p>
        </div>
        <div>
          <img src={Doctor} alt="" />
        </div>
      </div>

      <div className="second">
        <div className="card-1">
          <p className="sub-text">Email</p>
          <p className="main-text">john@mail.com</p>
        </div>

        <div className="card-1">
          <p className="sub-text">Phone</p>
          <p className="main-text">0314-6552728</p>
        </div>

        <div className="card-1">
          <p className="sub-text">Gender</p>
          <p className="main-text">Male</p>
        </div>

        <div className="card-1">
          <p className="sub-text">Email</p>
          <p className="main-text">john@mail.com</p>
        </div>
      </div>

      <div className="third">
        <div className="card-1">
          <p className="sub-text">Email</p>
          <p className="main-text">john@mail.com</p>
        </div>

        <div className="card-1">
          <p className="sub-text">Email</p>
          <p className="main-text">john@mail.com</p>
        </div>
      </div>

      <div className="fourth">
        <div className="card-1">
          <p className="sub-text">Email</p>
          <p className="main-text">john@mail.com</p>
          <p className="main-text">john@mail.com</p>
          <p className="main-text">john@mail.com</p>
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
