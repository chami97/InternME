import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import pic from "../Images/login.avif";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    await axios
      .post("http://localhost:8080/api/v1/user/login", {
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((res) => {
        if (res.data.status) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          fetchCompany(res.data.user.id);
          navigate("/");
        } else
          setError(
            res.data && res.data.message ? res.data.message : "Error Login"
          );
      });
  }

  const fetchCompany = async (uid) => {
    await axios
      .get(`http://localhost:8080/api/v1/company/user/${uid}`)
      .then((res) => {
        if (res.data) {
          delete res.data.user;
          localStorage.setItem("company", JSON.stringify(res.data));
        }
      });
  };

  return (
    <>
      <div className="flex min-h-full h-screen item-center">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img className="h-24 w-auto" src={logo} alt="Your Company" />
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                Log In
              </h2>
            </div>

            <div className="mt-8">
              <div>
                <div className="relative mt-6">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  ></div>
                </div>
              </div>

              <div className="mt-6">
                <form onSubmit={onSubmit} className="space-y-6">
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
                        autoComplete="current-password"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  {error && (
                    <div>
                      <p style={{ color: "red" }}>{error}</p>
                    </div>
                  )}

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Log in
                    </button>
                  </div>

                  <div>
                    <button
                      className="flex w-full justify-center rounded-md border border-indigo-600 py-2 px-4 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        navigate("/register");
                      }}
                    >
                      Create New Account
                    </button>
                  </div>
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

export default Login;
