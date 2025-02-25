import NewTask from "./COMPONENTS/NewTask";
import SideBar from "./COMPONENTS/SideBar";
import { useState,useEffect } from "react";
import { TaskContext } from "./COMPONENTS/TaskContext";
import Home from "./COMPONENTS/Home";
import ExistingTask from "./COMPONENTS/ExistingTask";

function App() {
  const [newTask, setNewTask] = useState(() => {
    const storage = JSON.parse( localStorage.getItem('newTask'));
    return storage ? storage : []
  });
  const [isSelected, setIsSelected] = useState("home");
  const [selectTask, setSelectTask] = useState();

  useEffect(() => {
    localStorage.setItem('newTask', JSON.stringify(newTask))
  }, [newTask])
  

  function handleSelectTask(id) {
    setSelectTask(id);
    setIsSelected('existing')
   
  }
  



  const content = () => {
    if (isSelected === "home") {
      return <Home />;
    } else if (isSelected === "newTask") {
      return <NewTask />;
    } else if (isSelected === "existing") {
      return <ExistingTask  />;
    }
  };


  const tasks = {
    newTask,
    setNewTask,
    setIsSelected,
    selectTask,
    setSelectTask,
  };

  return (
    <>
      <TaskContext.Provider value={tasks}>
        <SideBar fun={handleSelectTask} />
        {content()}
      </TaskContext.Provider>
    </>
  );
}

export default App;
