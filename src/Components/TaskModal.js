import React, { useState } from "react";
import "./taskModal.css";

const TaskModal = ({ task, onClose, onSubmit, indexValue }) => {
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");

  const handleSubmit = () => {
    onSubmit({ ...task, title, description, id: indexValue });
    onClose();
  };

  return (
    <div className="modal">
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Description:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="modal-btn">
        <button className="modal-btn" onClick={handleSubmit}>
          Save
        </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default TaskModal;
