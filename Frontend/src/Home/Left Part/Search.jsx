import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="h-[10vh]">
      <div className="px-6 py-4">
        <form action="">
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Search Here"
              className="border-[1px] border-gray-700 rounded-lg p-3 flex items-center gap-2 bg-slate-950 w-[80%] h-10 "
            />
            <button>
              <FaSearch className="text-5xl p-2 hover:bg-gray-600 rounded-2xl duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
