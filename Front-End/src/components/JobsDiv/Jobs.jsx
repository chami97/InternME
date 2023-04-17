import React from "react";

const Data = [
  {
    id: 1,
    title: "Front-End Developer",
    time: "Onsite",
    date: "2023/04/02",
    location: "Virtusa",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, sit.",
  },
  {
    id: 2,
    title: "Project Planning",
    time: "Onsite",
    date: "2023/03/30",
    location: "MAS Holdings",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, sit.",
  },
  {
    id: 3,
    title: "Quality Assurance",
    time: "Remote",
    date: "2023/03/28",
    location: "WSO2",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, sit.",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    time: "Hybrid",
    date: "2023/03/20",
    location: "Codegen International",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, sit.",
  },
  {
    id: 5,
    title: "Software Engineer",
    time: "Onsite",
    date: "2023/03/20",
    location: "Virtusa",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, sit.",
  },
  {
    id: 6,
    title: "Back-End Developer",
    time: "Remote",
    date: "2023/03/18",
    location: "Sysco labs",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, sit.",
  },
  {
    id: 7,
    title: "Human Resource",
    time: "Onsite",
    date: "2023/03/18",
    location: "WSO2",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, sit.",
  },
  {
    id: 8,
    title: "Systems Support Engineer",
    time: "Hybrid",
    date: "2023/03/20",
    location: "LSEG",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, sit.",
  },
];

const Jobs = () => {
  return (
    <div>
      <div className="jobcontainer flex gap-10 justify-center flex-wrap items-center py-20">
        {Data.map(({ id, location, title, time, date, desc }) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[260px] p-[20px] bg-white rounded-[20px] hover:bg-[#0936aa] 
        shadow-md shadow-grey-400/700 hover:shadow-lg"
            >
              <span className="flex justify-between items-center gap-1">
                <h1 className="text-[15px] font-semibold text-[#0c0b0b] group-hover:text-white">
                  {title}
                </h1>
                {/* <span>
                  <BiTimeFive />
                  {time}
                </span> */}
              </span>
              <span className="flex justify-between items-center gap-1 w-[120px]">
                <h7 className="text-[13px] text-gray-400">{date}</h7>
                <h7 className="text-[13px] text-gray-400">|</h7>
                <h7 className="text-[13px] text-gray-400">{time}</h7>
              </span>
              <p
                className="text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] 
          group-hover:text-white"
              >
                {desc}
              </p>
              <div className="my-3">
                {/* <img src={image} alt="Company Logo" className="w-[20%]" /> */}
                <h7 className="text-[16px] text-gray-400">{location}</h7>
              </div>

              <button
                className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] 
          font-semibold text-textColor hover:bg-white hover:text-gray-700 group-hover/item:text-textColor group-hover:text-white"
              >
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
