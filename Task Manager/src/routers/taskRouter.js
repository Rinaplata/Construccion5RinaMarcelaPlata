const express = require('express');
const router = express.Router();
const {getAllTasks, getTaskId,  putTasks, postTasks, deleteTasks } = require('../controllers/tasksController');


router.get('/task', getAllTasks);
router.get('/tasks/:id', getTaskId);
router.post('/tasks', postTasks);
router.put('/tasks/:id', putTasks);
router.delete('/tasks/:id', deleteTasks)

module.exports = router;