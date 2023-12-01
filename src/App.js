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
function App() {
  var userData = window.localStorage.getItem("userData");
  userData = JSON.parse(userData);
  const [isAuthenticated, setAuthenticated] = useState(
    userData == null ? false : true
  );
  console.log(isAuthenticated);
  useEffect(() => {}, [userData]);

  return (
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        {isAuthenticated && <Menu />}
        <div style={{ padding: "20px" }}>
          <Routes>
            {isAuthenticated == false ? (
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
            {/* <Route
              path="/CancelledAppointment"
              element={<CancelledAppointment />}
            /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
