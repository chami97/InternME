import React, { useEffect, useState } from "react";
import NavBar from "../components/NavDiv/NavBar";
import Footer from "../components/FooterDiv/Footer";
import Header from "../components/Dashboard/Header";
import PostJobs from "../components/Dashboard/PostJobs";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [company, setCompany] = useState();

  useEffect(() => {
    if ("company" in localStorage) {
      setCompany(JSON.parse(localStorage.getItem("company")));
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className="w-[85%] m-auto bg-white">
      <NavBar />
      <Header company={company} />
      <PostJobs company={company} />
      <Footer />
    </div>
  );
};

export default Dashboard;
