import React, { useContext } from "react";
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { TodoContext } from "./utils/TodoContext";

export default function Buttons({ taskId, task }) {
  const { changeTaskToEdit, changeTaskName, deleteTask } =
    useContext(TodoContext);
  const handleEdit = () => {
    changeTaskToEdit(task);
    changeTaskName(task.name);
  };
  const handleDelete = () => {
    deleteTask(taskId);
  };
  return (
    <div className="flex gap-2">
      <button
        onClick={handleEdit}
        className="bg-blue-100 p-1 hover:bg-blue-200 rounded-full "
      >
        <AiTwotoneEdit className="text-blue-600 text-xl" />
      </button>
      <button
        onClick={handleDelete}
        className="bg-red-100 p-1 hover:bg-red-200 rounded-full"
      >
        <AiFillDelete className="text-red-600 text-xl" />
      </button>
    </div>
  );
}
