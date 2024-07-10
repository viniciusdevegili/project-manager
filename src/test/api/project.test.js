const app = require("../../src/app");
const request = require("supertest");

describe("Project", () => {

  beforeAll(async () => {
    await request(app).post("/api/user").send({
      nome: "aaa",
      email: "viniciusteste@hotmail.com",
      senha: "123",
    });

    const response = await request(app).post("/api/user/login").send({
      email: "viniciusteste@hotmail.com",
      senha: "123",
    });

    this.token = response.body.token;
  });

  it("Criar projeto", async () => {
    const response = await request(app).post("/api/project").send({
      nome: "Projeto Teste",
      descricao: "Projeto de teste",
    }).set("Authorization", `Bearer ${this.token}`);
    expect(response.status).toBe(201);
    expect(response.body.nome).toBe("Projeto Teste");
  });
  it("Alterar projeto", async () => {
    const response = await request(app).post("/api/project").send({
      nome: "Projeto Teste",
      descricao: "Projeto de teste",
    }).set("Authorization", `Bearer ${this.token}`);

    const responseAlterado = await request(app)
      .put(`/api/project/${response.body.id}`)
      .send({
        nome: "Projeto Alterado",
        descricao: "Projeto de teste",
      }).set("Authorization", `Bearer ${this.token}`);

    expect(responseAlterado.status).toBe(200);
    expect(responseAlterado.body.nome).toBe("Projeto Alterado");
  });
  it("Deletar projeto", async () => {
    const response = await request(app).post("/api/project").send({
      nome: "Projeto Teste",
      descricao: "Projeto de teste",
    }).set("Authorization", `Bearer ${this.token}`);

    const responseDeletado = await request(app).delete(
      `/api/project/${response.body.id}`
    ).set("Authorization", `Bearer ${this.token}`);

    expect(responseDeletado.status).toBe(204);
  });

  it("Listar projetos", async () => {
    const response = await request(app).get("/api/project").set("Authorization", `Bearer ${this.token}`);
    expect(response.status).toBe(200);
  });
});
