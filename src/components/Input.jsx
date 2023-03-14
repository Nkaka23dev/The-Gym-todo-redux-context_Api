import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function Input() {
  const [inputFiled, setInputField] = useState("");
  const handleChange = (event) => {
    setInputField(event.target.value);
  };
  return (
    <div className="relative">
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter a todo..."
        className="w-full py-4 px-5 border rounded-full  border-gray-700 mt-7"
      />
      <button className="absolute p-2 rounded-full top-10 bg-green-700  hover:bg-green-800 right-2">
        <AiOutlinePlus className="text-white font-bold" />
      </button>
    </div>
  );
}
