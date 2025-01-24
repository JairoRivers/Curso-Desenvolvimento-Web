class Personagem {
    nome;
    moedas;


    constructor(nome, moedas) {
        this.nome = nome;
        this.moedas = moedas;
    }

    aumentarMoedas(value) {
        this.moedas = this.moedas + value;
    }
}


const julius = new Personagem('Julius', 18);
const idris = new Personagem('Idris', 32);
const tylerr = new Personagem('Tylerr', 44);
const oliver = new Personagem('Oliver', 80);
const owen = new Personagem('Owen', 16);

julius.aumentarMoedas(15);
idris.aumentarMoedas(15);
tylerr.aumentarMoedas(15);
oliver.aumentarMoedas(15);
owen.aumentarMoedas(15);

console.log(julius.moedas, '\n', idris.moedas, '\n', tylerr.moedas, '\n', oliver.moedas, '\n', owen.moedas)