// src/components/TaskList.js

import React, { useState, useEffect } from 'react';
import api from '../api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get('/tasks')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  // Здесь будет рендеринг списка задач
  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id}>{task.title}</div>
      ))}
    </div>
  );
};

export default TaskList;
