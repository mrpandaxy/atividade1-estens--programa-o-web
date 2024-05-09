// util/calculadora.js
module.exports = {
    somar: function (a, b) {
        return parseFloat(a) + parseFloat(b);
    },
    subtrair: function (a, b) {
        return parseFloat(a) - parseFloat(b);
    },
    multiplicar: function (a, b) {
        return parseFloat(a) * parseFloat(b);
    },
    dividir: function (a, b) {
        return parseFloat(a) / parseFloat(b);
    }
};
