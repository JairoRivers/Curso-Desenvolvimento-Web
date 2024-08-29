/*
Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a partir de X, um valor por linha, inclusive o X ser for o caso.

Entrada
A entrada será um valor inteiro positivo.

Saída
A saída será uma sequência de seis números ímpares.

Exemplo de EntradaExemplo de Saída

entrada: 8

*/

const QUANTIDADE = 6;

function numerosImpares(numero) {
    let controlador = 0;
    while (controlador < QUANTIDADE) {
        if (numero % 2 !== 0) {
            console.log(numero);
            controlador++;
        }
        numero++;
    }
}

numerosImpares(8);
console.log();
numerosImpares(11);