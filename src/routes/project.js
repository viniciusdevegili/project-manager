const express = require('express');
const ProjectApi = require('.api/project');

const app = express()
app.use (express.json())

const projectApi = new ProjectApi();

app.get('/projects', projectApi.listarProject);
app.post('/projects', projectApi.criarProject);
app.put('/projects/:id', projectApi.alterarProject);
app.delete('/projects/:id', projectApi.deletarProject);