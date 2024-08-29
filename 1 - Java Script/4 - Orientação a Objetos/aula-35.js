// Orientação a objeto é um conceito que esta relacionado com a ideia de classificar,
// organizar e abstrair coisas. Veja a definição formal: "O termo orientação a objetos
// significa organizar o mundo real como uma coleção de objetos que incorporam estrutura
// de dados e um conjunto de operações que manipulam estes dados.

class Pessoa {
    nome;
    idade;
    filhos;

    constructor(nome, idade, filhos) {
        this.nome = nome; // This refere-se ao objeto que é proprietário do método chamado
        this.idade = idade;
        this.filhos = filhos;
    }

    quantosFilhos() {
        if (this.filhos) {
            return this.filhos.length;
        }
        return 0;
    }


}

const filho1 = new Pessoa('Gustavo', 13);
const filho2 = new Pessoa('Gabriela', 10);
console.log('Filhos1 tem: ', filho1.quantosFilhos());

const pessoa = new Pessoa('Joao', 24, [filho1, filho2]);

console.log('Quantos filhos?', pessoa.quantosFilhos());

console.log(pessoa);


