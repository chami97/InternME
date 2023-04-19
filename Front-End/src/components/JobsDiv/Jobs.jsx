import React, { useState } from "react";
import ApplyJobModal from "./ApplyJobModal";

const Jobs = ({ jobs, sortDateAsc, filterWorking }) => {
  const [job, setJob] = useState();
  const [open, setOpen] = useState(false);

  const openApplyModel = (data) => {
    setJob(data);
  };


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ApplyJobModal handleClose={handleClose} open={open} job={job} />
      <div className="jobcontainer flex gap-10 justify-center flex-wrap items-center py-20">
        {jobs
          .sort(function (a, b) {
            if (sortDateAsc)
              return new Date(b.postedDate) - new Date(a.postedDate);
            else return new Date(a.postedDate) - new Date(b.postedDate);
          })
          .filter((item) => {
            if (filterWorking !== "all")
              return item.workingMode
                .toLowerCase()
                .includes(filterWorking.toLowerCase());
            return item;
          })
          .map(
            ({ id, title, description, workingMode, postedDate, company }) => {
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
                    className="text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] 
          group-hover:text-white"
                  >
                    {description.length > 100
                      ? description.substring(0, 100 - 3) + "..."
                      : description}
                  </p>
                  <div className="my-3">
                    <h6 className="text-[16px] text-gray-400">
                      {company.name}
                    </h6>
                  </div>
                  <button
                    className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] 
          font-semibold text-textColor hover:bg-blue-500 hover:text-gray-700 group-hover/item:text-textColor group-hover:text-white"
                    onClick={() => {
                      setOpen(true);
                      openApplyModel({
                        id,
                        title,
                        description,
                        workingMode,
                        postedDate,
                        company,
                      });
                    }}
                  >
                    Apply Now
                  </button>
                      <br/>
                  <button
                    className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] 
          font-semibold text-textColor hover:bg-blue-500 hover:text-gray-700 group-hover/item:text-textColor group-hover:text-white"
                    onClick={() => {
                      setOpen(true);
                      openApplyModel({
                        id,
                        title,
                        description,
                        workingMode,
                        postedDate,
                        company,
                      });
                    }}
                  >
                    Save For Later
                  </button>
                </div>
              );
            }
          )}
      </div>
    </div>
  );
};

export default Jobs;
