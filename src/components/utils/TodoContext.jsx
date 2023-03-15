import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [taskName, setTaskname] = useState("");
  const [taskToedit, setToEdit] = useState({});

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (todo) => {
    setTasks([...tasks, todo]);
  };

  const changeTaskName = (name) => {
    setTaskname(name);
  };
  const changeTaskToEdit = (obj) => {
    setToEdit(obj);
  };
  const deleteTask = (taskToDelete) => {
    const newTask = tasks.filter((task) => task.id !== taskToDelete);
    setTasks(newTask);
    localStorage.setItem("tasks", JSON.stringify(newTask));
  };
  const editTask = (taskToedit) => {
    const editedTasks = tasks.map((task) =>
      task.id === taskToedit.id ? { ...task, name: taskToedit.name } : task
    );
    setTasks(editedTasks);
    localStorage.setItem("tasks", JSON.stringify(editedTasks));
  };
  const changeCheckedTask = (TaskTotasks) => {
    const { id } = TaskTotasks;
    const checkedTask = tasks.map((task) =>
      task.id === id ? { ...task, checkedTask: true } : task
    );
    setTasks(checkedTask);
    localStorage.setItem("tasks", JSON.stringify(checkedTask));
  };
  return (
    <TodoContext.Provider
      value={{
        addTask,
        deleteTask,
        changeTaskName,
        changeTaskToEdit,
        editTask,
        changeCheckedTask,
        tasks,
        taskName,
        taskToedit,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
