// Polimorfismo

// O polimorfismo é a capacidade de um objeto responder de forma
// diferente a um mesmo método, dependendo do contexto em que é chamado.


class Usario {
    email;
    senha;
    nome;

    validarSenha(email, senha) {
        return email + senha === this.nome;
    }

    constructor(email, senha, nome) {
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }

}

class Administrador extends Usario {
    permissoes;

    // Polimorfismo
    validarSenha(email, senha) {
        return email === this.email && senha === this.senha;
    }

    constructor(email, senha, nome, permissoes) {
        super(email, senha, nome);
        this.permissoes = permissoes;
    }

}

class Comprador extends Usario {
    compras;
}


const admin = new Administrador('joao.gmail.com', '123456', 'Joao', [1, 6]);
const usario = new Usario('joao.gmail.com', '123456', 'Joao')

// console.log(admin);


// const comprador = new Comprador();
// comprador.senha = '121212';

// console.log(comprador);



console.log(usario.validarSenha('joao.gmail.com', '123456'));
console.log(admin.validarSenha('joao.gmail.com', '123456'));






