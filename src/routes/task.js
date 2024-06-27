const express = require('express');
const TaskApi = require('../api/task');

const app = express.Router();

app.get('/', TaskApi.listarTarefas);
app.post('/', TaskApi.criarTarefa);
app.put('/:id', TaskApi.alterarTarefa);
app.delete('/:id', TaskApi.deletarTarefa);

module.exports = app;