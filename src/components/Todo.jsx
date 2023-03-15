import React from "react";
import { useSelector } from "react-redux";
import Buttons from "./Buttons";

export default function Todo() {
  const tasks = useSelector((state) => state.todo.tasks);
  return (
    <div className=" space-y-5 mt-6 px-5">
      {tasks.map((task, idx) => {
        return (
          <div key={idx} className="flex justify-between items-center gap-10">
            <div className="flex ">
              <input type="checkbox" className="p-2  cursor-pointer" />
              <h1 className="text-start text-lg pl-2">{task.name}</h1>
            </div>
            <Buttons taskId={task.id} task={task} />
          </div>
        );
      })}
    </div>
  );
}
