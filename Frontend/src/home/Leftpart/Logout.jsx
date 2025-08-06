import React, { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

function Logout() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error in Logout", error);
      toast.error("Error in logging out");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <hr className="border-gray-700 mt-1" />
      <div className="h-[10vh] flex items-center px-6">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
          disabled={loading}
        >
          <BiLogOutCircle className="text-xl" />
          <span className="text-sm font-medium">
            {loading ? "Logging out..." : "Logout"}
          </span>
        </button>
      </div>
    </>
  );
}

export default Logout;
