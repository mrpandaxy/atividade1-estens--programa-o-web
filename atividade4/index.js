// index.js

const express = require('express');
const calculadora = require('./util/calculadora');

const app = express();
const PORT = 3000;

// Rota para somar
app.get('/somar/:a/:b', (req, res) => {
    const resultado = calculadora.somar(req.params.a, req.params.b);
    res.send(`A soma de ${req.params.a} e ${req.params.b} é igual a ${resultado}`);
});

// Rota para subtrair
app.get('/subtrair/:a/:b', (req, res) => {
    const resultado = calculadora.subtrair(req.params.a, req.params.b);
    res.send(`A subtração de ${req.params.a} por ${req.params.b} é igual a ${resultado}`);
});

// Rota para multiplicar
app.get('/multiplicar/:a/:b', (req, res) => {
    const resultado = calculadora.multiplicar(req.params.a, req.params.b);
    res.send(`O produto de ${req.params.a} e ${req.params.b} é igual a ${resultado}`);
});

// Rota para dividir
app.get('/dividir/:a/:b', (req, res) => {
    if (req.params.b === '0') {
        res.status(400).send('Não é possível dividir por zero');
    } else {
        const resultado = calculadora.dividir(req.params.a, req.params.b);
        res.send(`A divisão de ${req.params.a} por ${req.params.b} é igual a ${resultado}`);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
