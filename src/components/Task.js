import React from "react";

function Task({text, category, deleteFunct}) {

  function onSubmitDelete(event) {
    deleteFunct({text});
  }
  return (
    <div className="task" >
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onSubmitDelete}>X</button>
    </div>
  );
}

export default Task;
