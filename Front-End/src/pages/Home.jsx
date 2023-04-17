import React from "react";
import NavBar from "../components/NavDiv/NavBar";
import SearchBar from "../components/SearchDiv/SearchBar";
import Jobs from "../components/JobsDiv/Jobs";
import Footer from "../components/FooterDiv/Footer";

const Home = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <NavBar />
      <SearchBar />
      <Jobs />
      <Footer />
    </div>
  );
};

export default Home;
