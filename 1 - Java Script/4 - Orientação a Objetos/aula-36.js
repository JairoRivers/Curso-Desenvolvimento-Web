// Herança

class Usario {
    email;
    senha;
    nome;

    constructor(email, senha, nome) {
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }

}

class Administrador extends Usario {
    permissoes;

    constructor(email, senha, nome, permissoes) {
        super(email, senha, nome);
        this.permissoes = permissoes;
    }

}

class Comprador extends Usario {
    compras;
}


const admin = new Administrador('joao.gmail.com', '123456', 'Joao', [1, 6]);

console.log(admin);


const comprador = new Comprador();
comprador.senha = '121212';

console.log(comprador);

