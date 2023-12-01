// eslint-disable-next-line
import React, { useState } from "react";
import "./LoginScreen.css";
import Logo from "../Images/NewLogo.png";
// import { BsX } from "react-icons/bs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  const handleSubmit = async (e) => {
    console.log(email, password);
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Content-Type": "application/json",
        },
      };
      const data = {
        email: email,
        password: password,
      };
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        data,
        config
      );
      if (response.error) {
        return;
      }

      await localStorage.setItem("userData", JSON.stringify(response.data));
      window.location.reload();
      navigation("/");

      console.log("Response:", response);
    } catch (error) {
      // Handle errors
      console.warn("Error:", error);
    }
  };
  return (
    <div className="login-container">
      <i className="close-button">{/* <BsX /> */}</i>

      <form className="login-form" onSubmit={handleSubmit}>
        <h3>Admin Login</h3>
        <br />
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>

      <div>
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
}

export default LoginScreen;
