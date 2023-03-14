import React from "react";
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";

export default function Buttons() {
  return (
    <div className="flex gap-2">
      <button className="bg-blue-100 p-1 hover:bg-blue-200 rounded-full ">
        <AiTwotoneEdit className="text-blue-600 text-xl" />
      </button>
      <button className="bg-red-100 p-1 hover:bg-red-200 rounded-full">
        <AiFillDelete className="text-red-600 text-xl" />
      </button>
    </div>
  );
}
