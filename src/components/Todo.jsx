import React from "react";
import Buttons from "./Buttons";

export default function Todo() {
  return (
    <div className=" space-y-5 mt-6 px-5">
      <div className="flex justify-between items-center gap-10">
        <div className="flex  ">
          <input type="checkbox" className="p-2  cursor-pointer" />
          <h1 className="text-start pl-2">
            Todo app developed using to consolidate your knowledge about React
          </h1>
        </div>
        <Buttons/>
      </div>
    </div>
  );
}
