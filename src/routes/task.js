const express = require('express');
const TaskApi = require('.api/task');

const app = express()
app.use (express.json())

const TaskApi = new TaskApi();

app.get('/tasks', TaskApi.listarTarefas);
app.post('/tasks', TaskApi.criarTarefa);
app.put('/tasks/:id', TaskApi.alterarTarefa);
app.delete('/tasks/:id', TaskApi.deletarTarefa);