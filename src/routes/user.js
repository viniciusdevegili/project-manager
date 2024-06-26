const express = require('express');
const UserApi = require('.api/task');

const app = express()
app.use (express.json())

const UserApi = new UserApi();

app.get('/users', UserApi.listarUsuario);
app.put('/users', UserApi.alterarUsuario)
app.post('/users', UserApi.criarUsuario);
app.delete('/users', UserApi.deletarUsuario)
app.post('/login', UserApi.validarToken);

app.use(userApi.validarToken);