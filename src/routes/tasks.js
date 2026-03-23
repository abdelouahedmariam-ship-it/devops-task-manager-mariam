const express = require('express');
const router = express.Router();
let tasks = [
  { id: 1, title: "learn git ", completed: false },
  { id: 2, title: "Practice DevOps ", completed: true }
  
];
router.get('/', (req, res) => {
  res.json(tasks);
});
module.exports = router; 