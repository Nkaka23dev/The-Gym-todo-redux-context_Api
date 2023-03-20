import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCheckedTask } from "../services/taskSlice";
import Buttons from "./Buttons";
// import { changeCheckedTask } from "./utils/store";

export default function Todo() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  return (
    <div className=" space-y-5 mt-6 px-5">
      {tasks.map((task, idx) => {
        return (
          <div key={idx} className="flex justify-between items-center gap-10">
            <div className="flex ">
              <input
                onChange={() => dispatch(changeCheckedTask(task))}
                type="checkbox"
                className={`p-2  cursor-pointer`}
                checked={task.checkedTask}
              />
              <h1
                className={`text-start text-xl pl-2 ${
                  task.checkedTask ? "line-through" : ""
                }`}
              >
                {task.name}
              </h1>
            </div>
            <Buttons taskId={task.id} task={task} />
          </div>
        );
      })}
    </div>
  );
}
