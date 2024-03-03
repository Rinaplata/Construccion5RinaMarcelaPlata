const express = require('express');
const router = express.Router();
const {getAllTasks, getTaskId,  putTasks, postTasks, deleteTasks } = require('../controllers/tasksController');
const swaggerUi = require('swagger-ui-express');
const swaggerjsdoc = require('swagger-jsdoc')
const swaggerOptions = require('./swagger');


/**
 * @swagger
 * /v1/task:
 *   get:
 *     summary: Get employee by ID.
 *     description: Get employee by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Employee ID
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */
router.get('/task', getAllTasks);
router.get('/task/:id', getTaskId);
router.post('/task', postTasks);
router.put('/task/:id', putTasks);
router.delete('/task/:id', deleteTasks);


const specs = swaggerjsdoc(swaggerOptions);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = router;