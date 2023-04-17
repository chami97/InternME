import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [company, setCompany] = useState();
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if ("company" in localStorage) {
      setCompany(JSON.parse(localStorage.getItem("company")));
    }
    if ("user" in localStorage) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [navigate]);

  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-bluecolor">
          Intern<strong>ME</strong>
        </h1>
      </div>
      <div className="menu flex gap-8">
        <li
          className="menulist text-[#6f6f6f] hover:text-blueColor"
          onClick={() => navigate("/")}
        >
          Jobs
        </li>
        {company && (
          <li
            className="menulist text-[#6f6f6f] hover:text-blueColor"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </li>
        )}
        <li className="menulist text-[#6f6f6f] hover:text-blueColor">
          Contact
        </li>
        <li className="menulist text-[#6f6f6f] hover:text-blueColor">About</li>
        {!user ? (
          <>
            <li
              className="menulist text-[#6f6f6f] hover:text-blueColor"
              onClick={() => navigate("/login")}
            >
              Login
            </li>
            <li
              className="menulist text-[#6f6f6f] hover:text-blueColor"
              onClick={() => navigate("/register")}
            >
              Register
            </li>
          </>
        ) : (
          <>
            <li
              className="menulist text-[#6f6f6f] hover:text-blueColor"
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("company");
                navigate("/login");
              }}
            >
              Logout
            </li>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
