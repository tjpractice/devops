import React from 'react';

function TaskItem({ task, deleteTask }) {
  return (
    <li className="task-item">
      {task.text}
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        ❌
      </button>
    </li>
  );
}

export default TaskItem;
