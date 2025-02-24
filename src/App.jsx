import NewTask from "./COMPONENTS/NewTask";
import SideBar from "./COMPONENTS/SideBar";
import { useState } from "react";
import { TaskContext } from "./COMPONENTS/TaskContext";
import Home from "./COMPONENTS/Home";
import ExistingTask from "./COMPONENTS/ExistingTask";

function App() {
  const [newTask, setNewTask] = useState([]);
  const [isSelected, setIsSelected] = useState("home");
  const [selectTask, setSelectTask] = useState('');

  const tasks = {
    newTask,
    setNewTask,
    setIsSelected,
    selectTask,
    setSelectTask,
  };
function handleSelectTask(id) {
  
  const existing = newTask.find((task) => task.id === id);

  if (existing) {
     setSelectTask(existing);
    setIsSelected("existing");
   
  } else {
    setIsSelected("home");
    setSelectTask('');
    
  }
}


  const content = () => {
    if (isSelected === "home") {
      return <Home />;
    } else if (isSelected === "newTask") {
      return <NewTask />;
    } else if (isSelected === "existing") {
      return <ExistingTask />;
    }
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
