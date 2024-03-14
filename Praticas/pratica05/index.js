const express = require('express');

const app = express();

const routerProdutos = require("./router");

app.use(express.json())

app.use("/produtos", routerProdutos);

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server is running on port ${PORT}");
});

module.exports = app;