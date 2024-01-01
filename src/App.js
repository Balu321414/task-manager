import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./Actions/index";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import TaskModal from "./Components/TaskModal";
import HamburgerMenu from "./Components/HamburgerMenu";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const [modalOpen, setModalOpen] = useState(false);
  const [indexValue, setIndexValue] = useState();
  const [selectedTask, setSelectedTask] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAddTask = (task) => {
    dispatch(actions.addTask(task));
    setModalOpen(false);
  };

  const handleDeleteTask = (taskId) => {
    dispatch(actions.deleteTask(taskId));
  };

  const handleUpdateTask = (task) => {
    dispatch(actions.updateTask(task));
    setModalOpen(false);
  };

  const handleEditTask = (task, index) => {
    setSelectedTask(task);
    setIndexValue(index);
    setModalOpen(true);
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <HamburgerMenu isMenuOpen={isMenuOpen} onToggle={handleToggleMenu} />
      {isMenuOpen && (
        <div className="menu-list">
          <ul>
            <li>Add Task</li>
            <li>Update Task</li>
            <li>Delete Task</li>
            <li>Tasks List</li>
          </ul>
        </div>
      )}
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onUpdate={handleEditTask}
      />
      <TaskForm onSubmit={handleAddTask} />
      {modalOpen && (
        <TaskModal
          indexValue={indexValue}
          task={selectedTask}
          onClose={() => {
            setModalOpen(false);
            setSelectedTask(null);
          }}
          onSubmit={handleUpdateTask}
        />
      )}
    </div>
  );
};

export default App;
