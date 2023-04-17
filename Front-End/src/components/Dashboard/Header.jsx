import React from "react";

const Header = ({company}) => {
  return (
    <div className="searchDiv grid gp-10 bg-greyIsh rounded-[10px] p-[3rem]">
      <div className="flex justify-center text-center p-5 ">
        <h1 className="text-3xl font-bold">{company?.name}</h1>
      </div>

      <div className="text-center">
        <p>{company?.address}</p>
        <p className="text-blue-1000">{company?.website}</p>
        <p className="text-blue-1000">{company?.industry}</p>
        <button varient="contain" className="text-blue-700 mt-3 p-2 hover:bg-blue-300 rounded-md border-2 border-blue-700">Edit details</button>
      </div>
    </div>
  );
};

export default Header;
