const request = require('supertest');

const app = require("./index");

const api = request(app);

 test("GET /produtos deve retornar status 200 e conteúdo JSON", async () => {
    const response = await api.get("/produtos");
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
 });

 test("GET /produtos/1 deve retornar status 200 e conteúdo JSON", async () => {
    const response = await api.get("/produtos/1");
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
 });

 test("GET /produtos/100 deve retornar status 404 e conteúdo JSON", async () => {
    const response = await api.get("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
 });

 test("POST /produtos deve retornar status 201 e conteúdo JSON", async () => {
    const response = await api.post("/produtos").send({ nome: "uva", preco: "20,00"});
    expect(response.status).toBe(201);
    expect(response.type).toBe("application/json");
 });

 test("POST /produtos sem JSON deve retornar status 422 e conteúdo JSON", async () => {
    const response = await api.post("/produtos");
    expect(response.status).toBe(422);
    expect(response.type).toBe("application/json");
 });

 test("PUT /produtos/1 deve retornar status 200 e conteúdo JSON", async () => {
    const response = await api.put("/produtos/1").send({ nome: "uva verde", preco: "18,00"});
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
 });

 test("PUT /produtos/100 deve retornar status 404 e conteúdo JSON", async () => {
    const response = await api.put("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
 });

 test("DELETE /produtos/1 deve retornar status 204 e sem conteúdo", async () => {
    const response = await api.delete("/produtos/1");
    expect(response.status).toBe(204);
    expect(response.body).toEqual({});
 });

 test("DELETE /produtos/100 deve retornar status 404 e conteúdo JSON", async () => {
    const response = await api.delete("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
 });

