const express = require('express');
const TaskApi = require('.api/task');

const app = express()
app.use (express.json())

const taskApi = new TaskApi();

app.get('/tasks', taskApi.listarTask);
app.post('/tasks', taskApi.criarTask);
app.put('/tasks/:id', taskApi.alterarTask);
app.delete('/tasks/:id', taskApi.deletarTask);