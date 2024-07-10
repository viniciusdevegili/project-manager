const controller = require("../../src/controllers/project");
const User = require("../../src/models/user");
const database = require("../../src/config/database");

describe("Project", () => {
  let user;
  beforeAll(async () => {
    this.transaction = await database.db.transaction();

    user = await User.create(
      {
        nome: "aaa",
        email: "testeprojeto@hotmail.com",
        senha: "123",
      }
    );
  });

  afterAll(async () => {
    database.db.query("DELETE FROM projects");
    database.db.query("DELETE FROM users");

    await this.transaction.commit();
  });

  
  it("Criar Projeto", async () => {
    const projeto = await controller.criarProjeto(
      "Projeto Teste",
      "Projeto de teste",
      user.id
    );

    expect(projeto.nome).toBe("Projeto Teste");
  });

  it("Alterar Projeto", async () => {
    const projeto = await controller.criarProjeto(
      "Projeto Teste",
      "Projeto de teste",
      user.id
    );

    const projetoAlterado = await controller.alterarProjeto(
      projeto.id,
      "Projeto Alterado",
      "Projeto de teste",
      user.id
    );

    expect(projetoAlterado.nome).toBe("Projeto Alterado");
  }, 10000);

  it("Deletar Projeto", async () => {
    const projeto = await controller.criarProjeto(
      "Projeto Teste",
      "Projeto de teste",
      user.id
    );

    await controller.deletarProjeto(projeto.id, user.id);
  
    expect(async () => {
      await controller.buscarPorId(projeto.id, user.id);
    }
    ).rejects.toThrow("Projeto não encontrado");

  });

  it("Listar Projetos", async () => {
      await controller.criarProjeto("Projeto Teste", "Projeto de teste", user.id);

    const projetos = await controller.listarProjetos(user.id);

    expect(projetos).toBeTruthy();

  });
});
