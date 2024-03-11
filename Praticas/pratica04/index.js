const express = require('express');
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log('Server is running on port ${PORT}');
});

app.get('/', (req, res) => {
    res.send('Voce fez uma requisição GET');
});

app.post('/', (req, res) => {
    res.status(201).send('Voce fez uma requisição POST');
});

app.put('/', (req, res) => {
    res.send('Voce fez uma requisição PUT');
});

app.delete('/', (req, res) => {
    res.sendStatus(204);
});

module.exports = app;
