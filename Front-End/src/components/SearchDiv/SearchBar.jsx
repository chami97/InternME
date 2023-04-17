import React from "react";
//Imported Icons from React Icons...
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoorFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";


const SearchBar = () => {
  return (
    <div className="searchDiv grid gp-10 bg-greyIsh rounded-[10px] p-[3rem]">
      <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[8px] bg-white p-5 shadow p-5 shadow-lg shadow-greyIsh-700">
          <div className=" ml-7 flex items-center">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[300px] ml-5"
              placeholder="Search Internship Here..."
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>

          <div className="flex items-center">
            <CiLocationOn className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[300px] ml-5"
              placeholder="Search By Company..."
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>
            <button className='bg-blue-800 h-full p-5 px-8 rounded-[8px] text-[#fff] cursor-pointer hover:bg-blue-700'>Search</button>
        </div>
      </form>
      <br/>
      
      <div className="secDiv flex items-center gap-10 justify-center">

        <div className="singleSearch flex items-center gap-2">
            <label htmlFor="relevance" className="text-[#808080] font-semibold">Sort by:</label>

            <select name="" id="relevance" className="bg-white rounded-[30px] px-4 py-2">
                <option value="">Post Date (Asc)</option>
                <option value="">Post Date (Desc)</option>
            </select>
        </div>

        <div className="singleSearch flex items-center gap-2">

            <label htmlFor="type" className="text-[#808080] font-semibold">Wroking Mode:</label>

            <select name="" id="type" className="bg-white rounded-[30px] px-4 py-2">
                <option value="">On-site</option>
                <option value="">Remote</option>
                <option value="">Hybrid</option>
            </select>

        </div>
            <span className="text-[#a1a1a1 cursor-pointer">Clear All</span>
      </div>


    </div>
  );
};

export default SearchBar;
