const calculadora = require('../calculadora/calculadora');

exports.getIndex = (req, res) => {
  res.render('index', { error: null });
};

exports.calcular = (req, res) => {
  const { num1, num2, operacao } = req.body;

  if (isNaN(num1) || isNaN(num2)) {
    return res.render('index', { error: 'Por favor, insira valores numéricos.' });
  }

  const resultado = calculadora.calcular(num1, num2, operacao);
  res.render('resultado', { resultado });
};