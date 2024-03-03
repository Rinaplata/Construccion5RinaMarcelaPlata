const express = require('express');

const app = express();

app.use(express.json());

app.use('api/v1/', require ('./routers/taskRouter'));

app.listen(3000, () => {
 console.log('SERVER RUNNING')
}
);

