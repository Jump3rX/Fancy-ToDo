import React, { useState } from "react";
import ToDoCard from "./ToDoCard";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editTaskIndex, setEditTaskIndex] = useState(null);

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }
  function addTask() {
    if (newTask === "") {
      return alert("Task cannot be empty!");
    }
    if (editTaskIndex !== null) {
      const updatedTasks = tasks.map((task, i) => {
        return i === editTaskIndex ? newTask : task;
      });
      setTasks(updatedTasks);
      setEditTaskIndex(null);
    } else {
      setTasks((t) => [...t, newTask]);
    }
    setNewTask("");
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function editTask(index) {
    const getTask = tasks.filter((el, i) => i === index);
    setNewTask(getTask);
    setEditTaskIndex(index);
  }

  return (
    <div className="to-do-list">
      <h1>Fancy ToDo</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />

        <button className="add-button" onClick={addTask}>
          {editTaskIndex !== null ? "Save" : "Add"}
        </button>
      </div>

      <ol>
        {tasks.map((task, i) => {
          return (
            <ToDoCard
              task={task}
              i={i}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          );
        })}
      </ol>
    </div>
  );
}

export default ToDoList;
