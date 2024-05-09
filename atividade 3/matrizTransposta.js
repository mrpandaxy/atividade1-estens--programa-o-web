// matrizTransposta.js

// Função para transpor uma matriz
function transporMatriz(A) {
    // Imprime a matriz original
    console.log("Matriz original:");
    imprimirMatriz(A);

    // Calcula a matriz transposta
    const transposta = calcularTransposta(A);

    // Imprime a matriz transposta
    console.log("Matriz transposta:");
    imprimirMatriz(transposta);
}

// Função para imprimir uma matriz
function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join("\t"));
    }
}

// Função para calcular a transposta de uma matriz
function calcularTransposta(A) {
    const linhas = A.length;
    const colunas = A[0].length;
    const transposta = [];

    for (let j = 0; j < colunas; j++) {
        transposta[j] = [];
        for (let i = 0; i < linhas; i++) {
            transposta[j][i] = A[i][j];
        }
    }

    return transposta;
}

// Exemplo de uso da função com uma matriz 3x3
const matrizExemplo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

transporMatriz(matrizExemplo);
