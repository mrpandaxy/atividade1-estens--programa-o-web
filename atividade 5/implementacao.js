// index.js

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para processar os corpos das requisições como JSON
app.use(express.json());

// Banco de dados simulado (array)
let estoque = [];

// Rota para adicionar um novo produto ao estoque
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    const produto = { id: parseInt(id), nome, qtd: parseInt(qtd) };
    estoque.push(produto);
    res.send(`Produto ${nome} adicionado ao estoque.`);
});

// Rota para listar todos os produtos do estoque
app.get('/listar', (req, res) => {
    res.send(estoque);
});

// Rota para remover um produto do estoque
app.get('/remover/:id', (req, res) => {
    const id = parseInt(req.params.id);
    estoque = estoque.filter(produto => produto.id !== id);
    res.send(`Produto com ID ${id} removido do estoque.`);
});

// Rota para editar a quantidade de um produto do estoque
app.get('/editar/:id/:qtd', (req, res) => {
    const id = parseInt(req.params.id);
    const qtd = parseInt(req.params.qtd);
    const produtoIndex = estoque.findIndex(produto => produto.id === id);
    if (produtoIndex !== -1) {
        estoque[produtoIndex].qtd = qtd;
        res.send(`Quantidade do produto com ID ${id} atualizada para ${qtd}.`);
    } else {
        res.status(404).send(`Produto com ID ${id} não encontrado.`);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
