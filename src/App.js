import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginScreen from "./Components/LoginScreen";
import PatientProfile from "./Components/Patient/Patient.Profile/PatientProfile";
import Menu from "./Components/menu";
import MainContainer from "./Components/MainContainer";
import { useState } from "react";
import PandingAppointment from "./Components/Appointments/pandingappointment";
import ScheduledAppointments from "./Components/Appointments/ScheduledAppointments";
import CancelledAppointment from "./Components/Appointments/cancelledAppointment";
function App() {
  var data = window.localStorage.getItem("userData");
  // console.log(data, "===>");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="Dashboard" element={<Menu />} />
        <Route
          path="Dashboard/pandingappointments"
          element={<PandingAppointment />}
        />
        <Route
          path="Dashboard/ScheduledAppointments"
          element={<ScheduledAppointments />}
        />
        <Route
          path="Dashboard/CancelledAppointment"
          element={<CancelledAppointment />}
        />
      </Routes>
    </Router>
  );
}

export default App;
