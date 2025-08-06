import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";
import { IoClose } from "react-icons/io5";

function Left() {
  return (
    <div className="w-full bg-black text-gray-300 h-full relative">
      {/* Close Icon - Only visible on mobile */}
      <div className="lg:hidden absolute top-0 right-0 z-10">
        <label htmlFor="my-drawer-2" className="cursor-pointer">
          <IoClose className="text-2xl text-white hover:text-red-500" />
        </label>
      </div>

      {/* Your Existing Layout Unchanged */}
      <Search />
      <div
        className="flex-1 overflow-y-auto"
        style={{ minHeight: "calc(84vh - 10vh)" }}
      >
        <Users />
      </div>
      <Logout />
    </div>
  );
}

export default Left;
