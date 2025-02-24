import { useContext, useRef, useEffect } from "react";
import { TaskContext } from "./TaskContext";
import ExtraTask from "./ExtraTask";
import Inputs from "./Inputs";

export default function ExistingTask() {
  const { selectTask, setNewTask, newTask, setIsSelected, setSelectTask } =
    useContext(TaskContext);
  const extraRef = useRef();

  useEffect(() => {
    extraRef.current.value = "";
  }, [newTask]);

  const existing = newTask.find((task) => task.id === selectTask);

  if (!existing) {
    return <p>Task not found!</p>;
  }

  function hundleExtraTask() {
    if (extraRef.current.value === "") {
      return;
    }
    setNewTask((prev) =>
      prev.map((task) =>
        task.id === selectTask
          ? { ...task, extra: [...(task.extra || []), extraRef.current.value] }
          : task
      )
    );
  }

  function handleDeleteProject() {
    setNewTask((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== selectTask);

      setSelectTask(selectTask);
      setIsSelected("home");

      return updatedTasks;
    });
  }

  const newExtra = existing.extra;
  function hundleDeleteTask(index) {
    setNewTask((prev) =>
      prev.map((task) =>
        task.id === selectTask
          ? {
              ...task,
              extra: task.extra.filter((task) => task !== newExtra[index]),
            }
          : task
      )
    );
  }

  let cssClass =
    "bg-stone-100 border-1 outline-0  px-4 py-2 shadow-sm border-stone-300 ";

  return (
    <>
      <div className="flex flex-col items-center justify-start md:w-2/4 space-y-2 lg:ml-17 px-4  mt-60 container">
        <div className="flex flex-col w-full  justify-between">
          <h2 className=" text-bold md:text-3xl h-auto w-full break-words">
            {existing.title}
          </h2>
          <p className="text-stone-400 text-lg mt-5 ">{existing.date}</p>
        </div>
        <button
          className="text-end w-full text-xl text-red-400 m-0 cursor-pointer"
          onClick={handleDeleteProject}
        >
          Delete
        </button>
        <hr className="h-2 bg-stone-400 w-full  border-0" />
        <p className="text-start text-lg w-full text-wrap h-auto my-5 line-clamp-2">
          {existing.description}
        </p>
        <hr className="h-0.5 bg-stone-400 w-full border-0" />
        <div className="text-end container">
          <ExtraTask addTask={hundleExtraTask} />
          <Inputs width={cssClass} ref={extraRef} />
        </div>

        {newExtra.length === 0 ? (
          <p>No new extra tasks</p>
        ) : (
          newExtra.map((task, index) => {
            return (
              <li
                className="list-none flex flex-row items-center justify-between container bg-stone-400"
                key={index}
              >
                <p className="text-xl w-1/2 break-words text-white p-1">
                  {task}
                </p>
                <button
                  className="text-white text-lg hover:text-red-500 px-2 rounded-md cursor-pointer"
                  onClick={() => hundleDeleteTask(index)}
                >
                  clear
                </button>
              </li>
            );
          })
        )}
      </div>
    </>
  );
}
