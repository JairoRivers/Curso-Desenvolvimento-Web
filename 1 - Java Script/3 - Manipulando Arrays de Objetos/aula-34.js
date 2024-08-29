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

// Flap Map
// O método flatMap() primeiro mapeia cada elemento usando uma função
// de mapeamento e, em seguida, nivela o resultado em um novo array. 
// É idêntico a um map seguido por um flat de profundidade 1, mas flatMap
// é bastante útil e mescla ambos em um método um pouco mais eficiente


const cartoes = lista.flatMap((cartao) => cartao.cartoes);

console.log(cartoes);


