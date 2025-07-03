import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Deploy Docker Image' },
    { id: 2, text: 'Set up CI/CD Pipeline' }
  ]);

  const addTask = () => {
    const text = prompt('Enter new task:');
    if (text) {
      setTasks([...tasks, { id: Date.now(), text }]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <button className="add-btn" onClick={addTask}>Add Task</button>
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
