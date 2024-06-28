const express = require('express');
const UserApi = require('../api/user')

const app = express.Router();
app.use(express.json());

app.get('/', UserApi.listarUsuario);
app.put('/', UserApi.alterarUsuario)
app.post('/', UserApi.criarUsuario);
app.delete('/', UserApi.deletarUsuario)
app.post('/', UserApi.validarToken);

app.use(UserApi.validarToken);

module.exports = app;