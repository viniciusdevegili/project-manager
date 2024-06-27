const express = require('express');
const sequelize = require('./config/database');
const app = require('./app');

sequelize.sync({ force: false }) 
  .then(() => {
    console.log('Banco de dados conectado e sincronizado.');
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  })
  .catch((err) => {
    console.error('Erro ao sincronizar modelos:', err);
  });