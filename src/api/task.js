const controller = require('../controllers/task');

class TaskApi {

    async criarTarefa(req, res) {
        const { titulo, descricao, status, projetoId } = req.body;

        try {
            const tarefa = await controller.criarTarefa(titulo, descricao, status, projetoId);
            return res.status(201).send(tarefa);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async alterarTarefa(req, res) {
        const { id } = req.params;
        const { titulo, descricao, status, dataConclusao } = req.body;

        try {
            const tarefa = await controller.alterarTarefa(Number(id), titulo, descricao, status, dataConclusao);
            return res.status(200).send(tarefa);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async deletarTarefa(req, res) {
        const { id } = req.params;

        try {
            await controller.deletarTarefa(Number(id));
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async listarTarefas(req, res) {
        try {
            const tarefas = await controller.listarTarefas();
            return res.status(200).send(tarefas);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async buscarTarefaPorId(req, res) {
        const { id } = req.params;

        try {
            const tarefa = await controller.buscarTarefaPorId(Number(id));
            return res.status(200).send(tarefa);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }
}

module.exports = new TaskApi();
