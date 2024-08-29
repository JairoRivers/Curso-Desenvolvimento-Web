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

// Find
// O método find executa a função callback uma vez para cada elemento presente no array 
// até que encontre um onde callback retorne o valor true. Se o elemento é encontrado, find 
// retorna imediatamente o valor deste elemento. Caso contrário, find retorna undefined

const buscarPessoa = (pessoa) => pessoa.nome === 'Fernanda';

const novaPessoa = lista.find(buscarPessoa);

console.log(novaPessoa);

//Minha forma
const buscar = () => {
    return lista.find((pessoa) => pessoa.idade > 30);
}
console.log(buscar());


