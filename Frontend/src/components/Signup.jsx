import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Signup() {
  const [authUser, setAuthUser] = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const validatePasswordMatch = (value) => {
    return value === password || "Passwords do not match";
  };

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    await axios
      .post("https://chat-app-12backend.vercel.app//api/user/signup", userInfo)
      .then((response) => {
        if (response.data) {
          toast.success("Signup successful");
        }
        localStorage.setItem("ChatApp", JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error: " + error.response.data.error);
        }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-900 border border-gray-700 p-8 rounded-xl w-full max-w-md shadow-md"
      >
        <h1 className="text-3xl font-bold text-center text-white mb-1">
          Chat<span className="text-green-500">App</span>
        </h1>
        <p className="text-gray-400 text-center mb-6">
          Create your account to get started.
        </p>

        {/* Full Name */}
        <div className="mb-4">
          <label
            htmlFor="fullname"
            className="text-sm text-gray-300 block mb-1"
          >
            Full Name
          </label>
          <input
            id="fullname"
            type="text"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="John Doe"
            {...register("fullname", { required: true })}
          />
          {errors.fullname && (
            <p className="text-red-500 text-sm mt-1">This field is required</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="text-sm text-gray-300 block mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="example@email.com"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">This field is required</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="text-sm text-gray-300 block mb-1"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="••••••••"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">This field is required</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="text-sm text-gray-300 block mb-1"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="••••••••"
            {...register("confirmPassword", {
              required: true,
              validate: validatePasswordMatch,
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-gray-400 text-sm">
            Already have an account?
            <Link to="/login" className="text-green-400 hover:underline ml-1">
              Login
            </Link>
          </p>
          <input
            type="submit"
            value="Signup"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all duration-200 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}

export default Signup;
