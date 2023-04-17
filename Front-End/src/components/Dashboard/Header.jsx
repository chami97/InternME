import React from "react";
//Imported Icons from React Icons...
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoorFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Header = () => {
  return (
    <div className="searchDiv grid gp-10 bg-greyIsh rounded-[10px] p-[3rem]">
      <div className="flex justify-center text-center p-5 ">
        <h1 className="text-3xl font-bold">Cryptech International (PVT) LTD</h1>
      </div>

      <div className="text-center">
        <p>Trace Expert City, Maradana Rd, Colombo</p>
        <p className="text-blue-1000">www.cryptech.com</p>
        <p className="text-blue-1000">Information Technology Provider</p>
        <p className="text-blue-700 pt-3">Edit details</p>
      </div>
    </div>
  );
};

export default Header;
