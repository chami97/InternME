import React from "react";
import NavBar from "../components/NavDiv/NavBar";
import SearchBar from "../components/SearchDiv/SearchBar";
import Jobs from "../components/JobsDiv/Jobs";
import Footer from "../components/FooterDiv/Footer";
import Header from "../components/Dashboard/Header";
import PostJobs from "../components/Dashboard/PostJobs";

const Dashboard = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <NavBar />
      <Header />
      <PostJobs />
      <Footer />
    </div>
  );
};

export default Dashboard;
