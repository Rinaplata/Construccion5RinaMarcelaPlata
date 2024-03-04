const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Tasks Manager',
            description: 'task manager API information',
            contact: {
                name: 'Rina Plata'
            },
        },
        servers: [
            {
                url: "http://localhost:3000/api/v1"
            }
        ],
    },
    apis: [`${__dirname}/routers/taskRouter.js`]
}

module.exports = swaggerOptions;