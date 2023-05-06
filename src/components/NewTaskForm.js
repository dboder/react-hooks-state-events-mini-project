import {React, useState} from "react";

function NewTaskForm({categories, addTask}) {
  // taskObj is a controlled Component since all inputs are captured in state.
  // i.e. all changes made to form are captured before submitting
  const [taskObj, setTaskObj] = useState(
    {text:"",
     category:""});

  function handleFormInput(e) {
    console.log("e.target.name",e.target.name);
    console.log("e.target.value",e.target.value);

    setTaskObj({
      ...taskObj,
      [e.target.name]: e.target.value});
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    addTask(taskObj);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmitForm}>
      <label>
        Details
        <input type="text" name="text" onChange={handleFormInput} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleFormInput}>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
