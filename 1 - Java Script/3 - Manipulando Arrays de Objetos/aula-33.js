const lista = [
    {
        nome: 'Jose',
        idade: 13,
        exibir: true
    },
    {
        nome: 'Joao',
        idade: 42
    },
    {
        nome: 'Maria',
        idade: 23
    },
    {
        nome: 'Gabriela',
        idade: 25
    },
    {
        nome: 'Fernanda',
        idade: 65
    },
    {
        nome: 'André',
        idade: 69
    },
    {
        nome: 'Heitor',
        idade: 32
    },
    {
        nome: 'Gustavo',
        idade: 64
    },
    {
        nome: 'Sandra',
        idade: 33
    },
]

// SOME e EVERY
// Every e some são métodos de array em Javascript muito importantes.
// Eles respondem perguntas com "sim" ou "não", ou true ou false .
// O every responde se todos os itens de uma array atendem aos requisitos da
//  função callback. Já o some diz se pelo menos um item da array atende aos requisitos.


const resultadoSome = lista.some((objeto) => objeto.idade > 50);
const resultadoEvery = lista.every((objeto) => objeto.idade > 50);

console.log('Resultado de SOME', resultadoSome)
console.log('Resultado de EVERY', resultadoEvery)




