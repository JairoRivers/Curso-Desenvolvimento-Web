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

const filtrarPessoa = (pessoa) => pessoa.idade > 30;
const filtrarPessoa2 = (pessoa) => pessoa.nome === 'Fernanda';


// Tem que ser um booleano
const listaFiltrada = lista.filter((pessoa) => pessoa.idade > 20)
const listaFiltrada2 = lista.filter((pessoa) => !!pessoa.exibir) // Dois ! para true
const listaFiltrada3 = lista.filter(filtrarPessoa)


console.log(listaFiltrada);
console.log(listaFiltrada2);
console.log(listaFiltrada3);



