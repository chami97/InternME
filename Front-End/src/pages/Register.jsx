import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import pic from "../Images/register.jpg";
import axios from "axios";

const Register = () => {
  const [isPartner, setIsPartner] = useState(false);
  const [pageNo, setPage] = useState(1);
  const [user, setUser] = useState({});
  const [submitCompany, setSubmitCompany] = useState(false);

  const partnerTicked = (e) => {
    setIsPartner(e.target.checked);
  };

  const nextPage = () => {
    setPage(2);
  };

  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    if (!isPartner) {
      await axios
        .post("http://localhost:8080/api/v1/user/save", {
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
          email: e.target.email.value,
          password: e.target.password.value,
          mobileNumber: e.target.mobileNumber.value,
        })
        .then((res) => {
          navigate("/login");
        })
        .catch((err) => {
          alert("Error registering");
        });
    }else if (submitCompany && pageNo === 2) {
      await axios
        .post("http://localhost:8080/api/v1/user/save", {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: user.password,
          mobileNumber: user.mobileNumber,
        })
        .then(async (res1) => {
          await axios
            .post("http://localhost:8080/api/v1/company/save", {
              name: e.target.companyName.value,
              industry: e.target.industry.value,
              address: e.target.companyAddress.value,
              website: e.target.website.value,
              br: e.target.brNumber.value,
              userId: res1.data.id,
            })
            .then(async (res2) => {
              navigate("/login");
            });
        })
        .catch((err) => {
          alert("Error registering user!");
        });
    }
  }

  return (
    <>
      <div className="flex min-h-full h-screen item-center">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img className="h-24 w-auto" src={logo} alt="Your Company" />
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                {pageNo === 1 ? "Register" : "Enter Company Details"}
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={onSubmit} className="space-y-6">
                  {pageNo === 1 ? (
                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="fName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First Name
                        </label>
                        <div className="mt-1">
                          <input
                            id="fName"
                            name="firstName"
                            type="text"
                            onChange={(e) =>
                              setUser({ ...user, firstName: e.target.value })
                            }
                            required
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="lName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last Name
                        </label>
                        <div className="mt-1">
                          <input
                            id="lName"
                            name="lastName"
                            onChange={(e) =>
                              setUser({ ...user, lastName: e.target.value })
                            }
                            type="text"
                            required
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="id"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Mobile Number
                        </label>
                        <div className="mt-1">
                          <input
                            id="mobileNumber"
                            name="mobileNumber"
                            type="text"
                            onChange={(e) =>
                              setUser({ ...user, mobileNumber: e.target.value })
                            }
                            required
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <div className="mt-1">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={(e) =>
                              setUser({ ...user, email: e.target.value })
                            }
                            autoComplete="email"
                            required
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Password
                        </label>
                        <div className="mt-1">
                          <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={(e) =>
                              setUser({ ...user, password: e.target.value })
                            }
                            autoComplete="current-password"
                            required
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            id="remember-me"
                            name=""
                            type="checkbox"
                            onChange={partnerTicked}
                            checked={isPartner}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="remember-me"
                            className="ml-2 block text-sm text-gray-900"
                          >
                            Register as a partner
                          </label>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="cName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Company Name
                        </label>
                        <div className="mt-1">
                          <input
                            id="cName"
                            name="companyName"
                            type="text"
                            required
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="industry"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Industry
                        </label>
                        <div className="mt-1">
                          <input
                            id="industry"
                            name="industry"
                            type="text"
                            required
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Company Address
                        </label>
                        <div className="mt-1">
                          <input
                            id="address"
                            name="companyAddress"
                            type="text"
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label
                          htmlFor="website"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Website
                        </label>
                        <div className="mt-1">
                          <input
                            id="website"
                            name="website"
                            type="text"
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label
                          htmlFor="brNumber"
                          className="block text-sm font-medium text-gray-700"
                        >
                          BR Number
                        </label>
                        <div className="mt-1">
                          <input
                            id="brNumber"
                            name="brNumber"
                            type="text"
                            required
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        if (pageNo === 2) {
                          setSubmitCompany(true);
                        }
                        if (isPartner) {
                          nextPage();
                        }
                      }}
                    >
                      {/* if ispartner is true, the button will chnage as Next */}
                      {!isPartner || pageNo === 2 ? "Register" : "Next"}
                    </button>
                  </div>
                  {pageNo === 2 && (
                    <div>
                      <button
                        type="button"
                        className="flex w-full justify-center rounded-md border border-indigo-600 py-2 px-4 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => {
                          setSubmitCompany(false);
                          setPage(1);
                        }}
                      >
                        Back
                      </button>
                    </div>
                  )}
                  {pageNo === 1 && (
                    <div>
                      <button
                        className="flex w-full justify-center rounded-md border border-indigo-600 py-2 px-4 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => {
                          navigate("/login");
                        }}
                      >
                        Log In
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={pic}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Register;
