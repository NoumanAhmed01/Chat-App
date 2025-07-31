import React from "react";
import ChatUser from "./ChatUser";
import Messages from "./Messages";
import TypeSend from "./TypeSend";

const Right = () => {
  return (
    <div className="w-[70%] bg-slate-900 text-white">
      <ChatUser />
      <div
        className="overflow-y-auto"
        style={{
          maxHeight: "calc(92vh - 8vh)",
          scrollbarWidth: "none" /* Firefox */,
        }}
      >
        <Messages />
      </div>
      <TypeSend />
    </div>
  );
};

export default Right;
