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
    <>
      <div className="main" style={{ height: "100%" }}>
        <h3 style={{ display: "flex" }}>Pending Appointments</h3>
        {pandingappointment?.map((appointment) => (
          <div
            style={{
              backgroundColor: "#313131",
              width: "100%",
              flex: 0.3,
              padding: 10,
            }}
          >
            <div style={{ height: "100%", width: "100%", display: "flex" }}>
              <div
                style={{
                  height: "100%",
                  width: "50%",
                  flexDirection: "row",
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
                      appointment.doctorId.profileImage == null
                        ? `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-_-3mhBNtLmon5LbNiPXhxMGdqHlaBGLiDElxbNWBA&s`
                        : `http://localhost:3000/public/img/profile/${appointment.doctorId.profileImage}`
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
                      {appointment?.doctorId.name}
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
                      {appointment?.doctorId.email}
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
                      {appointment?.doctorId.phoneNo}
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
                      {appointment?.doctorId.userType}
                    </p>
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "70%",
                  height: "60%",
                  backgroundColor: "#fff",
                  marginRight: "5%",
                  marginTop: "2%",
                }}
              >
                <p
                  style={{
                    fontSize: 15,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Time and Date
                </p>
                <p
                  style={{
                    // color: "",
                    marginTop: 5,
                    fontSize: 15,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Appointment Date:
                  <p
                    style={{
                      fontSize: 14,

                      fontWeight: "normal",
                    }}
                  >
                    {new Date(appointment.appointmentdate).toLocaleDateString()}
                  </p>
                </p>
                <p
                  style={{
                    // color: "",
                    marginTop: 5,
                    fontSize: 15,
                    // display: "flex",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Appointment Time:
                  <p
                    style={{
                      fontSize: 14,

                      fontWeight: "normal",
                    }}
                  >
                    {appointment.appointmenttimeSlot}
                  </p>
                </p>
              </div>
              <div
                style={{
                  width: "50%",
                  height: "100%",
                  flexDirection: "row",
                  display: "flex",
                  marginRight: 20,
                }}
              >
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
                      {appointment?.patientId.name}
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
                      {appointment?.patientId.email}
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
                      {appointment?.patientId.phoneNo}
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
                      {appointment?.patientId.userType}
                    </p>
                  </p>
                </div>
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
                      appointment.patientId.profileImage == null
                        ? `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-_-3mhBNtLmon5LbNiPXhxMGdqHlaBGLiDElxbNWBA&s`
                        : `http://localhost:3000/public/img/profile/${appointment.patientId.profileImage}`
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default PandingAppointment;
