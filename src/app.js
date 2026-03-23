const express = require('express');
const app = express();

app.use(express.json());
const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.json({ message: "Welcome from Feature  branch (lab2)" });
});

app.listen(3000, () => console.log("API running on port 3000"));