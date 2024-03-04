const express = require('express');
const router = express.Router();
const {getAllTasks, getTaskId,  putTasks, postTasks, deleteTasks } = require('../controllers/tasksController');

/**
 * @swagger
 * /task:
 *   get:
 *     summary: Obtener todas las tareas.
 *     description: Endpoint para obtener todas las tareas.
 *     responses:
 *        200:
 *         description: Lista de tareas obtenidas exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID de la tarea.
 *                   name:
 *                     type: string
 *                     description: Nombre de la tarea.
 *                   description:
 *                     type: string
 *                     description: Descripción de la tarea.
 *                   createdDate:
 *                     type: string
 *                     format: date
 *                     description: Fecha de creación de la tarea (en formato YYYY-MM-DD).
 *                   dueDate:
 *                     type: string
 *                     format: date
 *                     description: Fecha de vencimiento de la tarea (en formato YYYY-MM-DD).
 *                   status:
 *                     type: string
 *                     description: Estado de la tarea.
 *        500:
 *         description: Error interno del servidor.
 */
router.get('/task', getAllTasks);

router.get('/task/:id', getTaskId);
router.post('/task', postTasks);
router.put('/task/:id', putTasks);
router.delete('/task/:id', deleteTasks);

module.exports = router;