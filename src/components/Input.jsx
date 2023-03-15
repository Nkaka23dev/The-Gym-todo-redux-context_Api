import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  changeTaskName,
  changeTaskToEdit,
  editTask,
} from "./utils/store";

export default function Input() {
  const dispatch = useDispatch();
  const [errormessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessmessage] = useState("");

  const tasks = useSelector((state) => state.todo.tasks);
  const taskName = useSelector((state) => state.todo.taskName);
  const taskToedit = useSelector((state) => state.todo.TaskToEdit);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskName) {
      if (taskToedit.name) {
        dispatch(
          editTask({
            id: taskToedit.id,
            name: taskName,
            checkedTask: false,
          })
        );
        dispatch(changeTaskName(""));
        dispatch(changeTaskToEdit({}));
      } else {
        dispatch(
          addTask({
            id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            name: taskName,
            checkedTask: false,
          })
        );
        setSuccessmessage("Task added Successfull");
        dispatch(changeTaskName(""));
        console.log(taskToedit);
      }
    } else {
      setErrorMessage("No Task Provided");
    }
  };
  useEffect(() => {
    if (errormessage || successMessage) {
      setTimeout(() => {
        setErrorMessage(null);
        setSuccessmessage(null);
      }, 1500);
    }
  }, [errormessage, successMessage]);
  return (
    <form onSubmit={handleAddTask} action="#">
      <div>
        {errormessage && (
          <h1 className=" text-xl p-2 mt-4  text-red-500">{errormessage}</h1>
        )}
        {successMessage && (
          <h1 className=" p-2 text-xl mt-4 px-6 text-green-500">
            {successMessage}
          </h1>
        )}
      </div>
      <div className="relative">
        <input
          type="text"
          value={taskName}
          placeholder="Enter a todo..."
          onChange={(e) => dispatch(changeTaskName(e.target.value))}
          className="w-full py-4 px-5 border rounded-full  border-gray-700 mt-7"
        />
        <button className="absolute p-2 rounded-full top-10 bg-green-700  hover:bg-green-800 right-2">
          <AiOutlinePlus className="text-white font-bold" />
        </button>
      </div>
    </form>
  );
}
