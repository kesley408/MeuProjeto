const request = require('supertest');
const app = require('../app');
const api = request(app);

test('POST /produtos - Cria um novo produto', async () => {
    const response = await api.post('/produtos').send({ nome: 'uva', preco: 20.00 });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('nome', 'uva');
    expect(response.body).toHaveProperty('preco', 20.00);
});

test('GET /produtos - Retorna todos os produtos', async () => {
    const response = await api.get('/produtos');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
});

test('GET /produtos/1 - Retorna um produto específico', async () => {
    const response = await api.get('/produtos/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('nome', 'uva');
    expect(response.body).toHaveProperty('preco', 20.00);
});

test('GET /produtos/100 - Retorna erro quando o produto não existe', async () => {
    const response = await api.get('/produtos/100');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('msg', 'Produto não encontrado');
});

test('POST /produtos - Retorna erro quando os dados do produto estão ausentes', async () => {
    const response = await api.post('/produtos');
    expect(response.status).toBe(422);
    expect(response.body).toHaveProperty('msg', 'Nome e preço do produtos são obrigatórios');
});

test('PUT /produtos/1 - Atualiza um produto existente', async () => {
    const response = await api.put('/produtos/1').send({ nome: 'uva verde', preco: 18.00 });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('nome', 'uva verde');
    expect(response.body).toHaveProperty('preco', 18.00);
});

test('PUT /produtos/100 - Retorna erro quando tenta atualizar um produto inexistente', async () => {
    const response = await api.put('/produtos/100').send({ nome: 'uva verde', preco: 18.00 });
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('msg', 'Produto não encontrado');
});

test('DELETE /produtos/1 - Remove um produto existente', async () => {
    const response = await api.delete('/produtos/1');
    expect(response.status).toBe(204);
    expect(response.body).toEqual({});
});

test('DELETE /produtos/100 - Retorna erro quando tenta excluir um produto inexistente', async () => {
    const response = await api.delete('/produtos/100');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('msg', 'Produto não encontrado');
});