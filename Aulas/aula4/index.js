const express = require('express');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.use(function(req, res, next){
    console.log("Data/Hora", new Date());
    console.log("Url:", req.url);
    console.log("Metodo: ", req.method);
    console.log("Parametros: ", req.params);
    console.log("Corpo: ", req.body);
    console.log("Cabecalho: ", req.headers);
    next();
});

app.get('/', function(req, res){
    res.status(200).end();
    //res.send("home");
    //res.json({codigo: 200, mensagem: "De boas"});
});

app.post('/', function(req, res){
    console.log(req.body);
    res.status(204).end();
});

app.put('/', function(req, res){
    res.status(204).end();
});

app.delete('/', (req, res) => {
    throw new Exception('erro');
});

app.use(function(error, req, res, next){
    res.status(404).send({message: "Deu ruim"});
});

app.listen(3000, function(){
    console.log("API esta ON");
});

module.exports = app;