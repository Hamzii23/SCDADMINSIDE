import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginScreen from "./Components/LoginScreen";
import PatientProfile from "./Components/Patient/Patient.Profile/PatientProfile";
import Menu from "./Components/menu";
import MainContainer from "./Components/MainContainer";
import { useEffect, useState } from "react";
import PandingAppointment from "./Components/Appointments/pandingappointment";
import ScheduledAppointments from "./Components/Appointments/ScheduledAppointments";
import CancelledAppointment from "./Components/Appointments/cancelledAppointment";
import PatientRecrod from "./Components/Patient/PatientRecords/patientRecord";
import DoctorRecord from "./Components/Doctor/DoctorRecord";
import DoctorProfile from "./Components/Doctor/Doctor.Profile/DoctorProfile";
function App() {
  var userData = window.localStorage.getItem("userData");
  // var userData = "asdadadads";
  userData = JSON.parse(userData);

  const [isAuthenticated, setAuthenticated] = useState(userData !== null);

  useEffect(() => {
    setAuthenticated(userData !== null);
  }, [userData]);

  return (
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        {isAuthenticated && <Menu />}
        <div style={{ padding: "20px", flex: 1 }}>
          <Routes>
            {isAuthenticated === false ? (
              <Route path="/" element={<LoginScreen />} />
            ) : (
              <Route path="/" element={<MainContainer />} />
            )}
            <Route
              path="/pandingappointments"
              element={<PandingAppointment />}
            />
            <Route
              path="/ScheduledAppointments"
              element={<ScheduledAppointments />}
            />
            <Route
              path="/CancelledAppointment"
              element={<CancelledAppointment />}
            />
            <Route path="/PatientRecrod" element={<PatientRecrod />} />
            <Route path="/DoctorRecord" element={<DoctorRecord />} />
            <Route path="/PatientProfile" element={<PatientProfile />} />
            <Route path="/DoctorProfile" element={<DoctorProfile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
