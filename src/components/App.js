import {React, useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [myTasks, setTasks] = useState(TASKS);
  const [myCategory, setCategory] = useState("All");

  function deleteTask({text}) {
    const filterTasks = myTasks.filter(task => task.text !== text);
    setTasks(filterTasks); 
  }

  function onTaskFormSubmit(newTask) {
    if (newTask.category !== "All") setTasks([...myTasks, newTask]);
  }

  function updateCategory(newCategory) {
    setCategory(newCategory)
  }

  function filterbyCategory(selectedTask) {
    if ( myCategory === "All" ) return true;
    if ( selectedTask.category === myCategory ) return true;
    return false;
  }
  const viewableTasks = myTasks.filter(filterbyCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} parentFunctUpdateCategory={updateCategory}/>
      <NewTaskForm categories={CATEGORIES} addTask={onTaskFormSubmit } />
      <TaskList tasks={viewableTasks} taskFunct={deleteTask}/>
    </div>
  );
}

export default App;
