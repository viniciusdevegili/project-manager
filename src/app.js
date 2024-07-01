const express = require('express');
const authMiddlware = require('./middlewares/authMiddleware');
const app = express();
const userRoutes = require('./routes/user');
const projectRoutes = require('./routes/project');
const taskRoutes = require('./routes/task');
const userApi = require('./api/user')
const database = require('./config/database');

app.use(express.json());

app.post('/api/login', userApi.login);
app.post('/api/user', userApi.criarUsuario);
app.post('/api/login', authMiddlware.validarToken);
app.use('/api/user', userRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/task', taskRoutes);


database.sync({ force: false })
    .then(_ => {
        if (process.env.NODE_ENV !== 'test' ) {
            app.listen(8000, _ => {
                console.log('Server running on port 8000')
            })
        }
    })
    .catch(e => {
        console.error(`Erro ao inicializar o banco de dados ${e}`)
    })

module.exports = app;
