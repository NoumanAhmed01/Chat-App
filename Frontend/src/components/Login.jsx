import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const [authUser, setAuthUser] = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    axios
      .post("/api/user/login", userInfo)
      .then((response) => {
        if (response.data) {
          toast.success("Login successful");
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
          Welcome back! Please login.
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm text-gray-300 mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="text"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">This field is required</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            className="block text-sm text-gray-300 mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">This field is required</p>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-gray-400 text-sm">
            New here?
            <Link to="/signup" className="text-green-400 hover:underline ml-1">
              Create an account
            </Link>
          </p>
          <input
            type="submit"
            value="Login"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all duration-200 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
