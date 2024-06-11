exports.calcular = (num1, num2, operacao) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operacao) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return 'Operação inválida';
    }
  };
  