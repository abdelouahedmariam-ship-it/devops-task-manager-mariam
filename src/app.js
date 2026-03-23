
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Import tasks router
const tasksRouter = require('./routes/tasks');

// Root route
app.get('/', (req, res) => {
  res.json({ message: "DevOps Task Manager API is running" });
});

// Mount tasks router at /tasks
app.use('/tasks', tasksRouter);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});