const supertest = require('supertest');

const app = require('../app');

const request = supertest(app);

describe('API Loja Virtual', function() {
    test("Deve retornar 201 e um JSON para POST /produtos", () => {

    });
    test("Deve retornar 422 e um JSON para POST /produtos", () => {

    });
    test("Deve retornar 200 e um JSON array para GET /produtos", () => {

    });
    test("Deve retornar 200 e um JSON para GET /produtos/id", () => {

    });
    test("Deve retornar 404 e um JSON para GET /produtos/id", () => {

    });
    test("Deve retornar 200 e um JSON para PUT /produtos/id", () => {

    });
    test("Deve retornar 404 e um JSON para PUT /produtos/id", () => {

    });
    test("Deve retornar 422 e um JSON para PUT /produtos/id", () => {

    });
    test("Deve retornar 204 e um JSON para DELETE /produtos/id", () => {

    });
    test("Deve retornar 404 e um JSON para DELETE /produtos/id", () => {

    });
});
