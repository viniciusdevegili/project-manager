const express = require('express');
const ProjectApi = require('.api/project');

const app = express()
app.use (express.json())

const ProjectApi = new ProjectApi();

app.get('/projects', ProjectApi.listarProjetos);
app.post('/projects', ProjectApi.criarProjeto);
app.put('/projects/:id', ProjectApi.alterarProjeto);
app.delete('/projects/:id', ProjectApi.deletarProjeto);