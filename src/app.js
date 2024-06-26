const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');

app.use(express.json()); 

app.use('/api/user', userRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/task', taskRoutes);

module.exports = app;