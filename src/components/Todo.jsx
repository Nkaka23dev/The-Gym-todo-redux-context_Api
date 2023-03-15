
import useGlobalContext from "../hooks/useGlobaContext";
import Buttons from "./Buttons";

export default function Todo() {
  const { tasks, changeCheckedTask } = useGlobalContext()
  console.log([tasks])
  return (
    <div className=" space-y-5 mt-6 px-5">
      {tasks.map((task, idx) => {
        return (
          <div key={idx} className="flex justify-between items-center gap-10">
            <div className="flex ">
              <input
                onChange={() => changeCheckedTask(task)}
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
