import { useContext } from "react"
import { TaskContext } from "./TaskContext"
import logo from '../assets/unnamed.png'

export default function Home() { 
  const  task  = useContext(TaskContext)

  return (
    <div className="flex flex-col items-center justify-center w-2/4 px-8  space-y-5  ">
      <img src={logo} alt="note pad" className="w-25 object-center" />
      <h2 className="text-3xl">Project Manager</h2>
      <p className="text-2xl">Manage your projects here</p>
      <p className="text-2xl"> no project entered or chosen</p>
      <button
        className="bg-stone-600 py-2 px-2 text-xl text-stone-200 rounded hover:bg-stone-500 "
        onClick={() => task.setIsSelected("newTask")}
      >
        Add new Project
      </button>
    </div>
  );
}
