import React, { useEffect } from "react";
import "./menu.css";

import Logo from "../Images/NewLogo.png";

import { FaMessage, FaUser } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigation = useNavigate();
  useEffect(() => {
    const mainmenuLI = document
      .getElementById("sidebar-menu")
      .querySelectorAll("li");

    function changeActive() {
      mainmenuLI.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    mainmenuLI.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  useEffect(() => {
    const mainmenuLI = document
      .getElementById("sidebar-menu1")
      .querySelectorAll("li");

    function changeActive() {
      mainmenuLI.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    mainmenuLI.forEach((n) => n.addEventListener("click", changeActive));
  }, []);
  const handleLogout = () => {
    // Remove user data from local storage
    localStorage.removeItem("userData");

    // Redirect to the home page or login page
    navigation("/");
  };
  return (
    <div className="outerDiv">
      <menu className="div1">
        <div className="logo-place">
          {/* <i><Fa500Px /></i> */}

          <img src={Logo} alt="Logo" />
        </div>

        <div className="lists">
          <ul className="sidebar-menu" id="sidebar-menu">
            <li>
              <a href="/">
                <FaHome />
                Dashboard
              </a>
            </li>

            <li>
              <a href="/ArticlesRecord">
                <FaMessage /> Articles
              </a>
            </li>

            <li>
              <a href="/ComplainsRecord">
                <FaMessage /> User Complains
              </a>
            </li>
          </ul>

          <ul className="sidebar-menu" id="sidebar-menu1">
            <li>
              <a href="/">
                <BiLogOut onClick={handleLogout} /> Logout
              </a>
            </li>
          </ul>
        </div>
      </menu>
      {/* <MainContainer /> */}
    </div>
  );
}

export default Menu;
