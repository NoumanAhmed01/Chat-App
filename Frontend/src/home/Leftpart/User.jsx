import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import profile from "../../../public/user.jpg";

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);

  return (
    <div
      onClick={() => setSelectedConversation(user)}
      className={`flex items-center gap-4 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 
        ${isSelected ? "bg-gray-800" : "hover:bg-gray-700"}
      `}
    >
      {/* Profile Image with Online Dot */}
      <div className="relative">
        <img
          src={profile}
          alt="User"
          className="w-12 h-12 rounded-full object-cover border border-gray-600"
        />
        {isOnline && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full" />
        )}
      </div>

      {/* User Info */}
      <div className="flex-1">
        <h3 className="text-white font-medium">{user.fullname}</h3>
        <p className="text-sm text-gray-400 truncate">{user.email}</p>
      </div>
    </div>
  );
}

export default User;
