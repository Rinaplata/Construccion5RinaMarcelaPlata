const express = require('express');
const router = express.Router();
const {getAllTasks, getTaskId,  putTasks, postTasks, deleteTasks } = require('../controllers/tasksController');


router.get('/task', getAllTasks);
router.get('/task/:id', getTaskId);
router.post('/task', postTasks);
router.put('/task/:id', putTasks);
router.delete('/task/:id', deleteTasks)

module.exports = router;