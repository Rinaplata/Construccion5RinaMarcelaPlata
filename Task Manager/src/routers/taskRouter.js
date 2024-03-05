const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getTaskId,
  putTasks,
  postTasks,
  deleteTasks,
} = require("../controllers/tasksController");

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
router.get("/task", getAllTasks);

/**
 * @swagger
 * /task/{id}:
 *   get:
 *     summary: Obtiene todas las tareas por ID.
 *     description: Endpoint para obtener una tarea por ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la tarea.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Tarea obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de la tarea.
 *                 title:
 *                   type: string
 *                   description: Título de la tarea.
 *                 description:
 *                   type: string
 *                   description: Descripción de la tarea.
 *                 status:
 *                   type: string
 *                   description: Estado de la tarea.
 *       '404':
 *         description: Tarea no encontrada.
 *       '500':
 *         description: Error interno del servidor.
 */

router.get("/task/:id", getTaskId);

/**
 * @swagger
 * /task:
 *   post:
 *     summary: Crear una nueva tarea.
 *     description: Endpoint para crear una nueva tarea.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre de la tarea.
 *               description:
 *                 type: string
 *                 description: Descripción de la tarea.
 *               createdDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de vencimiento de la tarea (en formato YYYY-MM-DD).
 *               dueDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de vencimiento de la tarea (en formato YYYY-MM-DD).
 *               status:
 *                 type: string
 *                 description: Estado de la tarea.
 *     responses:
 *       '201':
 *         description: Tarea creada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID de la tarea creada.
 *                 name:
 *                   type: string
 *                   description: Nombre de la tarea.
 *                 description:
 *                   type: string
 *                   description: Descripción de la tarea.
 *                 dueDate:
 *                   type: string
 *                   format: date
 *                   description: Fecha de vencimiento de la tarea (en formato YYYY-MM-DD).
 *                 status:
 *                   type: string
 *                   description: Estado de la tarea.
 *       '400':
 *         description: Datos de entrada no válidos.
 *       '500':
 *         description: Error interno del servidor.
 */

router.post("/task", postTasks);

/**
 * @swagger
 * /task/{id}:
 *   put:
 *     summary: Actualizar una tarea existente.
 *     description: Endpoint para actualizar una tarea existente por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la tarea a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nuevo nombre de la tarea.
 *               description:
 *                 type: string
 *                 description: Nueva descripción de la tarea.
 *               dueDate:
 *                 type: string
 *                 format: date
 *                 description: Nueva fecha de vencimiento de la tarea (en formato YYYY-MM-DD).
 *               status:
 *                 type: string
 *                 description: Nuevo estado de la tarea.
 *     responses:
 *       '200':
 *         description: Tarea actualizada exitosamente.
 *       '404':
 *         description: Tarea no encontrada.
 *       '500':
 *         description: Error interno del servidor.
 */

router.put("/task/:id", putTasks);

/**
 * @swagger
 * /task/{id}:
 *   delete:
 *     summary: Eliminar una tarea existente.
 *     description: Endpoint para eliminar una tarea existente por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la tarea a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Tarea eliminada exitosamente.
 *       '404':
 *         description: Tarea no encontrada.
 *       '500':
 *         description: Error interno del servidor.
 */
router.delete("/task/:id", deleteTasks);

module.exports = router;
