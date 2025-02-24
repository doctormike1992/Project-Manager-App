import Tasks from "./Tasks";
import { useContext } from "react";
import { TaskContext } from "./TaskContext";

// eslint-disable-next-line react/prop-types
export default function SideBar({fun}) {
  const task = useContext(TaskContext);

 

  return (
    <div className="flex bg-stone-700 md:w-1/5 h-full text-center flex-col pt-47 mt-10 rounded-r-2xl ">
      <h1 className="text-md md:text-2xl uppercase font-bold text-stone-300">
        Projects
      </h1>
      <button
        onClick={() => task.setIsSelected("newTask")}
        className="text-sm md:text-2xl bg-stone-400 font-bold rounded md:m-9 py-3 cursor-pointer"
      >
        + New Project
      </button>
     {task.newTask.length > 0 && <Tasks fun={fun} />}
    </div>
  );
}
