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

// REDUCE
// O método reduce() é muito interessante e pode ser usado quando desejamos 
// realizar alguma somatória ou então quando desejamos mesclar vários arrays 
// em um único. Ele reduz todos os valores de um array em um único resultado, 
// baseando-se na função que informamos para ele.


// const pessoa = {
//     jose: {
//         idade: 54,
//     },
//     joao: {
//         idade: 65,
//     },
//     maria: {
//         idade: 23,
//     }
// }

const funcaoReduce = (acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
}

const pessoas = lista.reduce(funcaoReduce, {});

const pessoasArray = lista.reduce((acc, objeto) => {
    acc.push(objeto.idade);
    return acc;
}, []);

console.log(pessoas);
console.log(pessoas.Gustavo.idade);
console.log(pessoasArray);