import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";

function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return; // Prevent empty or whitespace-only messages

    await sendMessages(message.trim());
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 h-[8vh] flex items-center px-4 space-x-2"
    >
      <input
        type="text"
        placeholder="Type here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 border border-gray-700 rounded-xl outline-none px-4 py-2 bg-gray-900 text-white"
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading || !message.trim()}
        className={`text-3xl ${
          loading || !message.trim()
            ? "opacity-50 cursor-not-allowed"
            : "text-blue-500 hover:text-blue-400"
        }`}
      >
        <IoSend />
      </button>
    </form>
  );
}

export default Typesend;
