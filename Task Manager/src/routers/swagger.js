const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'tasks ',
            description: 'Employee API Information',
            contact: {
                name: 'Sagi Weizmann'
            },
        },
        servers: [
            {
                url: "http://localhost:8080/v1"
            }
        ],
    },
    apis: ['./src/api/routes/v1/*.js']
}

module.exports = swaggerOptions;