
let numA = parseFloat(prompt("Insira o primeiro número:"));
let numB = parseFloat(prompt("Insira o segundo número:"));


if (isNaN(numA) || isNaN(numB)) {
    console.log("Por favor, insira números válidos.");
} else {
 
    let resultadoSoma = numA + numB;
    console.log(`Resultado da adição entre ${numA} e ${numB}: ${resultadoSoma}`);


    let resultadoSubtracao = numA - numB;
    console.log(`Resultado da subtração entre ${numA} e ${numB}: ${resultadoSubtracao}`);


    let resultadoMultiplicacao = numA * numB;
    console.log(`Resultado da multiplicação entre ${numA} e ${numB}: ${resultadoMultiplicacao}`);

  
    if (numB !== 0) {
        let resultadoDivisao = numA / numB;
        console.log(`Resultado da divisão entre ${numA} e ${numB}: ${resultadoDivisao}`);
    } else {
        console.log("Não é possível dividir por zero.");
    }
}
