INSTALAÇÂO

git clone https://github.com/viniciusdevegili/project-manager.git
cd project-manager

DEPENDÊNCIAS

npm install

CONFIGURAÇÃO BANCO DE DADOS

configurar o arquivo config/database.js, utilizando o banco de dados

INICIAR O BANCO DE DADOS

npm sequelize cli db:migrate

VARIÀVEIS DE AMBIENTE

criar um arquivo .env na raiz do projeto:
PORT=3000
JWT_SECRET=secret

INICIAR O SERVIDOR

npm start
o servidor vai ser iniciado na porta 3000

------------------- USO -------------------

CRIAR USUÁRIO
endpoint: POST api/user
{
    "nome": "",
    "email": "",
    "senha": ""
}

LOGIN USUÁRIO
endpoint: POST api/user
{
    "email": "",
    "senha": ""
}

GERENCIAR PROJETOS

Criar Projeto: POST /api/project
Editar Projeto: PUT /api/project/:id
Excluir Projeto: DELETE /api/project/:id
Listar Projetos: GET /api/project

GERENCIAR TAREFAS

Criar Tarefa: POST /api/project/:projectId/tasks
Editar Tarefa: PUT /api/task/:id
Excluir Tarefa: DELETE /api/task/:id
Listar Tarefas por Projeto: GET /api/projects/:projectId/task
Filtrar Tarefas por Status: GET /api/projects/:projectId/task?status=pendente

TESTES

npm test

============= ESPERO QUE GOSTE ! =============
```