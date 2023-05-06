import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({ tasks, taskFunct }) {

  return (
    <div className="tasks">
      {tasks.map((task) => (
          <Task text={task.text} category={task.category} deleteFunct={taskFunct} key={uuid()} />
        ))}
    </div>
  );
}

export default TaskList;
