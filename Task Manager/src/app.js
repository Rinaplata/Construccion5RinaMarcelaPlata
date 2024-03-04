const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swagger');
const swaggerjsdoc = require('swagger-jsdoc')

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerjsdoc(swaggerOptions), { explorer: true }));

app.use('/api/v1/', require('./routers/taskRouter'));

app.listen(3000, () => {
 console.log('SERVER RUNNING')
}
);

