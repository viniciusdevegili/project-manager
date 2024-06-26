const Task = require('../models/task');

class TaskController {
    async criarTask(titulo, descricao, status, projetoId) {
        if (
            titulo === undefined
            || descricao === undefined
            || status === undefined
            || projetoId === undefined
        ) {
            throw new Error('Título, descrição, status e projetoId são obrigatórios');
        }

        const tarefa = await Task.create({
            titulo,
            descricao,
            status,
            projetoId,
        });

        return tarefa;
    }

    async buscarTaskPorId(id) {
        if (id === undefined) {
            throw new Error('ID é obrigatório');
        }

        const tarefa = await Task.findByPk(id);

        if (!tarefa) {
            throw new Error('Tarefa não encontrada');
        }

        return tarefa;
    }

    async alterarTask(id, titulo, descricao, status, dataConclusao) {
        if (
            id === undefined
            || titulo === undefined
            || descricao === undefined
            || status === undefined
        ) {
            throw new Error('ID, título, descrição e status são obrigatórios');
        }

        const tarefa = await this.buscarTarefaPorId(id);

        tarefa.titulo = titulo;
        tarefa.descricao = descricao;
        tarefa.status = status;
        if (dataConclusao) {
            tarefa.dataConclusao = dataConclusao;
        }

        await tarefa.save();

        return tarefa;
    }

    async deletarTask(id) {
        if (id === undefined) {
            throw new Error('ID é obrigatório');
        }

        const tarefa = await this.buscarTarefaPorId(id);

        await tarefa.destroy();
    }

    async listarTasks() {
        return Task.findAll();
    }
}

module.exports = TaskController;
