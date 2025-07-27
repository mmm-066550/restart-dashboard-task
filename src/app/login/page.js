"use client";

import { BiSolidBarChartSquare } from "react-icons/bi";
import { RiGoogleFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";

import { Formik, Form, Field, ErrorMessage } from "formik";
import LoginSchema from "./login.schema";
import { userLogin } from "@/lib/features/auth";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(userLogin(values));
  };

  return (
    <main className="h-screen flex">
      <div className="w-1/2 flex items-center justify-center flex-col gap-4">
        <h1 className="text-black font-semibold text-4xl">Sign In</h1>
        <p className="text-gray-500 text-sm my-5">
          Please enter your credentials to access the dashboard.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            className="flex items-center px-8 py-3 justify-center gap-2 bg-blue-600 text-white rounded-md cursor-pointer
"
          >
            <RiGoogleFill className="text-white text-1xl" />
            <span className="text-white text-sm font-light">
              Sign in with Google
            </span>
          </button>
          <button
            className="flex items-center px-8 py-3 justify-center gap-2 bg-blue-600 text-white rounded-md cursor-pointer
"
          >
            <BsTwitterX className="text-white text-1xl" />
            <span className="text-white text-sm font-light">
              Sign in with X
            </span>
          </button>
        </div>
        <span className="text-sm text-gray-400 my-3">Or continue with</span>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          validateOnChange={true}
          validateOnBlur={true}
          onSubmit={handleSubmit}
        >
          <Form className="flex items-center justify-center gap-3 flex-col">
            <div className="w-full flex flex-col gap-3">
              <label className="font-medium text-xs text-gray-800">
                Username<span className="text-red-600 mx-1">*</span>
              </label>
              <Field
                type="text"
                name="username"
                placeholder="Enter your username"
                className="w-105 border-1 border-gray-300 px-5 text-sm py-3 rounded-md text-gray-800 placeholder-gray-500"
                autoComplete="username"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-700 text-xs text-end"
              />
            </div>
            <div className="w-full flex flex-col gap-3">
              <label className="font-medium text-xs text-gray-800">
                Password<span className="text-red-600 mx-1">*</span>
              </label>
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-105 border-1 border-gray-300 px-5 text-sm py-3 rounded-md text-gray-800 placeholder-gray-500"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-700 text-xs text-end"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-8 cursor-pointer text-white text-sm rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-ind-all duration-200"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>

      <div className="w-1/2 bg-[#121647] flex items-center justify-center flex-col gap-4 relative">
        <div className="absolute right-8 bottom-8 bg-white rounded-lg p-5 px-8 pb-3">
          <p className="text-gray-800 mb-4">Login Credentials 🔑</p>
          <p className="text-gray-600 text-xs my-2">
            Username:{" "}
            <span className="font-semibold text-md text-blue-900">
              mmm066550
            </span>
          </p>
          <p className="text-gray-600 text-xs my-2">
            Password:{" "}
            <span className="font-semibold text-md text-blue-900">
              Password123!
            </span>
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <BiSolidBarChartSquare className="text-white text-7xl" />
          <span className="text-white text-3xl font-semibold">
            Restart Dashboard
          </span>
        </div>
        <p className="text-center font-light text-sm w-80 text-gray-400">
          Monitor your business performance with our advanced analytics tools.
        </p>
      </div>
    </main>
  );
}
