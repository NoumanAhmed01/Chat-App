import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";
import { useSocketContext } from "../../context/SocketContext.jsx";

function Users() {
  const [allUsers, loading] = useGetAllUsers();
  const { onlineUsers } = useSocketContext();

  const sortedUsers = allUsers.slice().sort((a, b) => {
    const isAOnline = onlineUsers.includes(a._id);
    const isBOnline = onlineUsers.includes(b._id);
    return isBOnline - isAOnline;
  });

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 h-full flex flex-col shadow-md">
      {/* Title */}
      <h1 className="text-white text-xl font-semibold mb-4 px-2">Messages</h1>

      {/* Scrollable User List */}
      <div
        className="overflow-y-auto pr-1 flex-1 space-y-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
        style={{ maxHeight: "calc(84vh - 10vh)" }}
      >
        {sortedUsers.map((user, index) => (
          <User key={index} user={user} />
        ))}
        {sortedUsers.length === 0 && !loading && (
          <p className="text-gray-400 text-sm text-center">No users found.</p>
        )}
      </div>
    </div>
  );
}

export default Users;
