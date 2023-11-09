// В файле server.js

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();

// Подключение к MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Модель задачи
const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending'
  }
});

const Task = mongoose.model('Task', TaskSchema);

// Проверка JWT токена (псевдокод, требует настройки для Keycloak)
const checkToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send({ message: 'No token provided.' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(500).send({ message: 'Failed to authenticate token.' });

    // if everything good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });
};

// REST API эндпоинты
app.get('/tasks', checkToken, async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post('/tasks', checkToken, async (req, res) => {
  const newTask = new Task(req.body);
  const savedTask = await newTask.save();
  res.json(savedTask);
});

app.get('/tasks/:id', checkToken, async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});

app.put('/tasks/:id', checkToken, async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTask);
});

app.delete('/tasks/:id', checkToken, async (req, res) => {
  const deletedTask = await Task.findByIdAndDelete(req.params.id);
  res.json(deletedTask);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
