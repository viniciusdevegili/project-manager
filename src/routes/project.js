const express = require('express');
const ProjectApi = require('../api/project');

const app = express.Router();
app.use(express.json()); 

app.get('/', ProjectApi.listarProjetos);
app.post('/', ProjectApi.criarProjeto);
app.put('/:id', ProjectApi.alterarProjeto);
app.delete('/:id', ProjectApi.deletarProjeto);

module.exports = app;