import React from "react";

function ToDoCard(props) {
  const { task, i, deleteTask, editTask } = props;
  return (
    <li key={i}>
      <span className="text">{task}</span>
      <button className="delete-button" onClick={() => deleteTask(i)}>
        Delete
      </button>
      <button className="move-button" onClick={() => editTask(i)}>
        Edit
      </button>
    </li>
  );
}

export default ToDoCard;
