import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function ApplyJobModal(props) {

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="w-full relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 max-w-lg">
                <Dialog.Title
                  as="h3"
                  className=" px-4 pb-4 pt-5 sm:p-4 font-semibold leading-6 text-gray-900 bg-gray-50 text-center sm:text-left"
                >
                  Apply for Internship
                </Dialog.Title>
                  <div
                    key={props?.job?.id}
                    className="group group/item singleJob w-[260px] p-[20px]"
                  >
                    <span className="flex justify-between items-center gap-1">
                      <h1 className="text-[17px] font-semibold text-[#0c0b0b]">
                        {props?.job?.title}
                      </h1>
                    </span>
                    <span className="flex justify-between items-center gap-1 w-[120px]">
                      <h6 className="text-[14px] text-gray-400 mt-2">
                        {props?.job?.postedDate?.split("T")[0].replaceAll("-", "/")}
                      </h6>
                      <h6 className="text-[14px] text-gray-400 mt-2">|</h6>
                      <h6 className="text-[14px] text-gray-400 mt-2">
                        {props?.job?.workingMode}
                      </h6>
                    </span>
                    <p
                      className="text-[14px] text-[#95959] pt-[5px] my-4"
                    >
                      {props?.job?.description}
                    </p>
                    <div className="my-3 border-t-2 w-[470px] py-4">
                      <h6 className="text-[16px] text-gray-400">
                        Company Name: {props?.job?.company?.name}
                      </h6>
                      <h6 className="text-[16px] text-gray-400">
                        Company Address: {props?.job?.company?.address}
                      </h6>
                      <h6 className="text-[16px] text-gray-400">
                        Company Website: {props?.job?.company?.website}
                      </h6>
                    </div>
                    <div className="my-3 border-t-2 w-[470px] py-4">
                    <h6 className="text-[16px] text-gray-400">
                        How to apply:
                      </h6>
                      <h6 className="text-[16px] text-gray-800">
                          Mail your resume to <strong>{props?.job?.company?.user?.email}</strong>
                      </h6>
                    </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
