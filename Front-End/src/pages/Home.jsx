import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavDiv/NavBar";
import SearchBar from "../components/SearchDiv/SearchBar";
import Jobs from "../components/JobsDiv/Jobs";
import Footer from "../components/FooterDiv/Footer";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredjobs, setFilteredjobs] = useState([]);
  const [searchCompany, setSearchCompany] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [sortDateAsc, setSortDateAsc] = useState(true);
  const [filterWorking, setFilterWorking] = useState("all");

  useEffect(() => {
    fetchData();
  }, []);

  const searchJobs = () => {
    if (jobs.length > 0) {
      setFilteredjobs(
        jobs
          .filter((item) =>
            item.company.name
              .toLowerCase()
              .includes(searchCompany.toLowerCase())
          )
          .filter((item) =>
            item.title.toLowerCase().includes(searchTitle.toLowerCase())
          )
      );
      
    }
  }

  async function fetchData() {
    await axios.get("http://localhost:8080/api/v1/job/all").then((res) => {
      setJobs(res.data);
      setFilteredjobs(res.data);
    });
  }

  return (
    <div className="w-[85%] m-auto bg-white">
      <NavBar />
      <SearchBar
        setSearchCompany={setSearchCompany}
        setSearchTitle={setSearchTitle}
        setSortDateAsc={setSortDateAsc}
        setFilterWorking={setFilterWorking}
        searchJobs={searchJobs}
      />
      <Jobs jobs={filteredjobs} sortDateAsc={sortDateAsc} filterWorking={filterWorking}/>
      <Footer />
    </div>
  );
};

export default Home;
