const jose = {
    idade: 35,
    peso: 80,
    nome: 'José',
    genero: 'Masculino',
    nacionalidade: 'brasileiro',
    endereco: 'Rua Qualquer',
    numero: 432,
    pais: 'Brasil',
    filhos: true,
}

const exibirInformações = (pessoa, qualInfo) => {
    console.log(`${qualInfo} do(a) ${pessoa.nome}: `, pessoa[qualInfo])
    /*
    console.log('Dados:', pessoa);
    console.log(`Peso do(a) ${pessoa.nome}:`, pessoa.peso);
    console.log(`Idade do(a) ${pessoa.nome}:`, pessoa.idade);
    */
}

exibirInformações(jose, 'pais');
exibirInformações(jose, 'genero');