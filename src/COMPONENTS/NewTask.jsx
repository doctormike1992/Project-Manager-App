import Inputs from "./Inputs";
import { useContext, useRef } from "react";
import { TaskContext } from "./TaskContext";
import Modal from "./Modal";

export default function NewTask() {
  const modal = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  const { setNewTask, setIsSelected } = useContext(TaskContext);

  function handleSaveTask() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dateRef.current.value;

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      dueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    const newProject = {
      id: crypto.randomUUID(),
      title: title,
      description: description,
      date: dueDate,
      extra: [],
    };
    setNewTask((prev) => [...prev, newProject]);

    setIsSelected("home");
  }

  let cssClass =
    "bg-stone-100 border-1 outline-0  px-4 py-2 shadow-sm border-stone-300 ";

  return (
    <>
      <Modal ref={modal} />
      <div className="flex flex-col justify-center md:w-2/4 items-center space-y-15 px-4 ">
        <div className="list-none space-x-5 flex flex-row text-center justify-between w-full">
          <div className="text-center w-full">
            <h2 className="text-2xl text-bold w-full">Enter New Project</h2>
          </div>
          <div className="w-full space-x-1">
            <button
              onClick={() => setIsSelected("home")}
              className="underline text-xl cursor-pointer hover:text-stone-300"
            >
              Cancel
            </button>
            <button
              className="bg-stone-800 text-stone-100 px-3 py-1 rounded cursor-pointer hover:bg-stone-600 hover:text-stone-200"
              onClick={handleSaveTask}
            >
              Save
            </button>
          </div>
        </div>
        <div className=" space-y-5  text-center container">
          <Inputs width={cssClass} label="Title" ref={titleRef} />
          <Inputs
            width={cssClass}
            label="Description"
            text
            ref={descriptionRef}
          />
          <Inputs width={cssClass} label="Due Date" type="date" ref={dateRef} />
        </div>
      </div>
    </>
  );
}
