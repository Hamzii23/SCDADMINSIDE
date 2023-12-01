import React, { useEffect, useState } from "react";
import "../Appointments/styles.css";
import axios from "axios";

const PandingAppointment = () => {
  const [pandingappointment, setPandingAppointment] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        var userData = await window.localStorage.getItem("userData");
        userData = JSON.parse(userData);
        const response = await axios.get(
          "http://localhost:3000/api/v1/admin/appointments",
          {
            headers: {
              Authorization: `Bearer ${userData.token}`,
            },
          }
        );
        setPandingAppointment(response.data.allAppointments);
        console.log(response.data);
      } catch (error) {
        // Handle error
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="main">
      {pandingappointment.map((appointment) => (
        <div key={appointment._id} className="app-card">
          <div className="user-info">
            <div className="userdoc-pp">
              <img
                src={`http://localhost:3000/public/img/profile/${appointment.doctorId.profileImage}`}
                alt=""
                style={{ width: 40, height: 50 }}
              />
            </div>
            <div className="user-name">
              <p className="name">{appointment.doctorId.name}</p>
              <p className="email">{appointment.doctorId.email}</p>
            </div>
          </div>

          <div className="app-date">
            <p className="time">{appointment.appointmenttimeSlot}</p>
            <p className="day"> </p>
            <p className="date">
              {new Date(appointment.appointmentdate).toLocaleDateString()}
            </p>
          </div>

          <div className="user-info">
            <div className="userpat-pp">
              <img
                src={`http://localhost:3000/public/img/profile/${appointment.patientId.profileImage}`}
                alt=""
                style={{ width: 40, height: 50 }}
              />
            </div>
            <div className="user-name">
              <p className="name">{appointment.patientId.name}</p>
              <p className="email">{appointment.patientId.email}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    // <div style={{ flex: 1 }}>
    //   <h1 style={{ color: "white" }}>ahskdhaksd</h1>
    // </div>
  );
};
export default PandingAppointment;
