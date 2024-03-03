const express = require('express');
const fs = require('fs');
const path = require('path');
const tasksFilePath = path.join(__dirname, '../database/tasks.json');
const router = express.Router();

// Endpoint para obtener todas las tareas
const getAllTasks = (req, res) => {
    fs.readFile(tasksFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        try {
            const tasks = JSON.parse(data);
            res.json(tasks);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error parsing JSON' });
        }
    });
};

// Endpoint para obtener una tarea por su ID
const getTaskId = (req, res) => {
    const taskId = parseInt(req.params.id);
    fs.readFile(tasksFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        try {
            const tasks = JSON.parse(data);
            const task = tasks.find(task => task.id === taskId);
            if (!task) {
                return res.status(404).json({ error: 'Task not found' });
            }
            res.json(task);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error parsing JSON' });
        }
    });
};

// Endpoint para crear una nueva tarea
 const postTasks = (req, res) => {
    fs.readFile(tasksFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        try {
            const tasks = JSON.parse(data);
            const newTask = req.body;
            newTask.id = tasks.length + 1; // Asignar un nuevo ID
            tasks.push(newTask);
            fs.writeFile(tasksFilePath, JSON.stringify(tasks), err => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Error writing to file' });
                }
                res.status(201).json(newTask);
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error parsing JSON' });
        }
    });
};

// Endpoint para actualizar una tarea existente por su ID
const putTasks = (req, res) => {
    const taskId = parseInt(req.params.id);
    fs.readFile(tasksFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        try {
            let tasks = JSON.parse(data);
            const taskIndex = tasks.findIndex(task => task.id === taskId);
            if (taskIndex === -1) {
                return res.status(404).json({ error: 'Task not found' });
            }
            const updatedTask = req.body;
            updatedTask.id = taskId; // Mantener el mismo ID
            tasks[taskIndex] = updatedTask;
            fs.writeFile(tasksFilePath, JSON.stringify(tasks), err => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Error writing to file' });
                }
                res.json(updatedTask);
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error parsing JSON' });
        }
    });
};

// Endpoint para eliminar una tarea por su ID
const deleteTasks = (req, res) => {
    const taskId = parseInt(req.params.id);
    fs.readFile(tasksFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        try {
            let tasks = JSON.parse(data);
            const taskIndex = tasks.findIndex(task => task.id === taskId);
            if (taskIndex === -1) {
                return res.status(404).json({ error: 'Task not found' });
            }
            tasks.splice(taskIndex, 1);
            fs.writeFile(tasksFilePath, JSON.stringify(tasks), err => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Error writing to file' });
                }
                res.sendStatus(204);
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error parsing JSON' });
        }
    });
};

module.exports = {
    getAllTasks,
    getTaskId,
    postTasks,
    putTasks,
    deleteTasks
}
