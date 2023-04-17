import React, { useEffect, useState } from "react";
import axios from "axios";
import AddJobModal from "./AddJobModal";

const PostJobs = (props) => {
  const [jobs, setJobs] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, [props.company, open]);

  async function fetchData() {
    props?.company && await axios
      .get(`http://localhost:8080/api/v1/job/company/${props?.company?.id}`)
      .then((res) => {
        setJobs(res.data);
      });
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AddJobModal
        handleClose={handleClose}
        open={open}
        company={props.company}
      />
      <div>
        <div className="jobcontainer flex gap-10 justify-center flex-wrap items-center py-20">
          {jobs.map(({ id, title, description, workingMode, postedDate }) => {
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
                </span>
                <span className="flex justify-between items-center gap-1 w-[120px]">
                  <h6 className="text-[13px] text-gray-400">
                    {postedDate.split("T")[0].replaceAll("-", "/")}
                  </h6>
                  <h6 className="text-[13px] text-gray-400">|</h6>
                  <h6 className="text-[13px] text-gray-400">{workingMode}</h6>
                </span>
                <p
                  className="text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] mb-3 
          group-hover:text-white"
                >
                  {description}
                </p>

                <div className="flex">
                  <button
                    className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] 
          font-semibold text-textColor hover:bg-blue-500 hover:text-gray-700 group-hover/item:text-textColor group-hover:text-white"
                  >
                    Edit
                  </button>
                  <button
                    className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] ml-3
          font-semibold text-textColor hover:bg-blue-500 hover:text-gray-700 group-hover/item:text-textColor group-hover:text-white"
                  >
                    Pause
                  </button>
                </div>
              </div>
            );
          })}
          <div>
            <div
              className="text-center group group/item singleJob h-[100px] w-[100px] p-[20px] bg-blue-100 rounded-[20px] hover:bg-[#0936aa] 
        shadow-md shadow-grey-400/700 hover:shadow-lg text-blue-600 text-blue-600"
              onClick={() => setOpen(true)}
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostJobs;
