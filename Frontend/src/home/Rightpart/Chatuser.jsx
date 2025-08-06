import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";
import profile from "../../../public/user.jpg";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  return (
    <div className="relative flex items-center justify-between px-4 py-3 bg-slate-800 hover:bg-slate-700 transition duration-300 rounded-md">
      {/* Mobile Menu Button */}
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden"
      >
        <CiMenuFries className="text-white text-2xl" />
      </label>

      {/* User Info */}
      <div className="flex items-center gap-3 mx-auto">
        <div className="relative">
          <img
            src={profile}
            alt="User Avatar"
            className="w-12 h-12 rounded-full border-2 border-white object-cover"
          />
          {/* Online status indicator */}
          <span
            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-slate-800 ${
              getOnlineUsersStatus(selectedConversation._id) === "Online"
                ? "bg-green-500"
                : "bg-gray-500"
            }`}
          ></span>
        </div>

        <div>
          <h1 className="text-white text-lg font-semibold leading-5">
            {selectedConversation.fullname}
          </h1>
          <span className="text-sm text-gray-300">
            {getOnlineUsersStatus(selectedConversation._id)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Chatuser;
