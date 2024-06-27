const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
const projectRoutes = require('./routes/project');
const taskRoutes = require('./routes/task');

app.use('/api/user', userRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/task', taskRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});

module.exports = app;
