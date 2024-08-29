const idade = 12; //Pai

const exibirIdade = () => {
    const idade = 23; // Filho
    console.log('Resultado Filho', idade);
}

const exibirExibirIdade = () => {
    exibirIdade();
    console.log('Resultado Pai', idade);
}

exibirExibirIdade();