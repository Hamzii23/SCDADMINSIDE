// eslint-disable-next-line
import React from "react";
// import { useNavigate } from 'react-router-dom'
import "./MainContainer.css";
import Doctor from "../Images/doctor svg.svg";
import { FaMessage, FaUserDoctor } from "react-icons/fa6";
import { FaCopyright, FaUser } from "react-icons/fa";
import {
  BsFillCalendar2CheckFill,
  BsFillCalendarXFill,
  BsFillCalendar2PlusFill,
  BsFillCalendar2XFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function MainContainer() {
  const navigation = useNavigate();

  return (
    <div className="main-container">
      <div className="left-container">
        <div className="Appointments">
          <div className="upcoming-appointments">
            <h3 style={{ fontSize: 30 }}>Pending Appointments</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                width: "100%",
              }}
            >
              <BsFillCalendar2PlusFill
                style={{
                  width: 130,
                  height: 130,
                  color: "#f75246ce",
                  paddingLeft: "5px",
                }}
                onClick={() => {
                  navigation("pandingappointments");
                }}
              />
            </div>
          </div>
          <div className="scheduled-appointments">
            <h3 style={{ fontSize: 30 }}>Scheduled Appointments</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                width: "100%",
              }}
            >
              <BsFillCalendar2PlusFill
                style={{
                  width: 130,
                  height: 130,
                  color: "#0c7dbece",
                  paddingLeft: "5px",
                }}
              />
            </div>
          </div>
          <div className="canceled-appointments">
            <h3 style={{ fontSize: 30 }}>Cancelled Appointments</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                width: "100%",
              }}
            >
              <BsFillCalendar2PlusFill
                style={{
                  width: 130,
                  height: 130,
                  color: "#4a3b96cc",
                  paddingLeft: "5px",
                }}
              />
            </div>
          </div>
        </div>

        <div className="doctor-patient">
          <div className="doctor">
            <h1>Doctor Management</h1>

            {/* <FaUserDoctor /> */}

            <img src={Doctor} alt="" />
          </div>

          <div className="patient">
            <h1>Patient Management</h1>

            <img src={Doctor} alt="" />
          </div>
        </div>

        <div className="footer">
          <div className="footer-content">
            <i>
              <FaCopyright />
            </i>
            <p> deCancer, A skin cancer detection application.</p>
          </div>
        </div>
      </div>
      {/* <div className="right-container">
        <div className="online-users">
          <h4>Online users</h4>
          <p className="doctor-online">Doctors</p>
          <p className="patient-online">Patients</p>

          <div className="users-list">
            <div className="single-user">
              <i className="patient-pp">
                <FaUser />
              </i>
              <p> John Doe </p>
              <i className="message-pp">
                <FaMessage />
              </i>

              <button> View user </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default MainContainer;
