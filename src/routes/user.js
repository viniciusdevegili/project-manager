const express = require('express');
const UserApi = require('.api/task');

const app = express()
app.use (express.json())

const userApi = new UserApi();

app.get('/users', userApi.listarUsuario);
app.post('/users', userApi.criarUsuario);
app.post('/login', userApi.validarToken);

app.use(userApi.validarToken);