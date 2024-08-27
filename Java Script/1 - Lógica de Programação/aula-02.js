const numero1 = 1;
// É uma constante, nunca terá seu valor alterado (É mais leve para ser acessado pela memória)

let numero2 = 2;
// É variável, podendo ser alterado 

if (numero1 == 1) {
    numero2 = 6; // Se fosse numero1, daria erro
}

console.log('Resultado', numero2);
