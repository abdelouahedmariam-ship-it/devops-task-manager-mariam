const express = require('express');
const app = express();

app.use(express.json());

// ✅ keep refactored routing
const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

// ✅ keep updated welcome message
app.get('/', (req, res) => {
  res.json({ message: "Welcome from Feature  branch (lab2)" });
});

app.listen(3000, () => console.log("API running on port 3000"));