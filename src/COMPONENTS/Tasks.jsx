import { useContext } from "react";
import { TaskContext } from "./TaskContext";

// eslint-disable-next-line react/prop-types
export default function Tasks({fun}) {
  const { newTask, selectTask } = useContext(TaskContext);
  
  let cssClass =
    "cursor-pointer hover:bg-stone-600 md:px-7 rounded py-3 mt-1 break-words w-full ";


  
  let cssClassNew = cssClass + " bg-stone-500 text-stone-100";
 
  

  return (
    <>
      <div className="mt-5 text-stone-100 ">
        { newTask.map((task) => {
          return (
            <p key={task.id}>
              <button  onClick={() =>fun(task.id)} className={selectTask?.id === task.id ? cssClassNew : cssClass}>{task.title}</button>
            </p>
          );
        })}
      </div>
    </>
  );
}
