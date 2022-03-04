const express = require("express"); // Importando o express
const app = express(); // Iniciando o express

app.get("/", function (req, res) {
    res.send("<h1>Bem vindo ao guia do programador</h1>");
});

app.get("/blog", function (req, res) {
    res.send("<h3>Bem vindo ao meu blog!: www.guiadoprogramador.com.br<h3>")
})

app.get("/canal/youtube", function (req, res) {
    res.send("<h1>Bem vindo ao meu canal!</h1>")
})

app.listen(4000, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro!");
    } else {
        console.log("Servidor iniciado com o sucesso!")
    }
})