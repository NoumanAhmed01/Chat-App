import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from "../../context/useGetAllUsers";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    const conversation = allUsers.find((user) =>
      user.fullname?.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };

  return (
    <div className="h-[10vh] px-4 py-3 bg-slate-900 rounded-md mb-1">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-3 w-full rounded-md bg-slate-800 px-4 py-2 border border-slate-700 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
          <FaSearch className="text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search for users..."
            className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
