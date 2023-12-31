import React from "react";
import "./taskList.css";

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  return (
    <div>
      <ul>
      {tasks.map((task,index) => (
        <li key={task.id}>
          <div>
            <strong>{task.title}</strong>
            <p>{task.description}</p>
          </div>
          <div className="abc">
            <button onClick={() => onDelete(index)}>Delete</button>
            <button onClick={() => onUpdate(task)}>Update</button>
          </div>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default TaskList;
