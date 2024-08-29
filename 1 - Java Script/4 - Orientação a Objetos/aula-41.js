// Suponha que você está desenvolvendo um sistema de gestão de estoque para uma empresa de vendas de produtos eletrônicos.

// Crie uma classe Produto que tenha as seguintes propriedades: nome, preco, descricao, codigo, quantidade_em_estoque.

// A classe deve ter métodos para alterar o preço do produto, adicionar mais unidades do produto no estoque e remover unidades do produto do estoque. 
// Esses métodos devem garantir que o preço seja um número positivo e que a quantidade de unidades em estoque nunca seja negativa.

class Produto {
    nome;
    preco;
    descricao;
    codigo;
    quantidade_em_estoque;

    constructor(nome, descricao, codigo) {
        this.nome = nome;
        this.descricao = descricao;
        this.codigo = codigo;
        this.preco = 0;
        this.quantidade_em_estoque = 0;
    }

    alterarPreco(value) {
        if (value > 0) {
            this.preco = value;
        } else {
            throw new Error('Preço Inválido');
        }

    }
    adicionarEstoque(value) {
        if (value > 0) {
            this.quantidade_em_estoque += value;
        } else {
            throw new Error('Adição Inválida');
        }

    }

    removerProduto(value) {
        if (this.quantidade_em_estoque - value >= 0) {
            this.quantidade_em_estoque -= value;
        } else {
            throw new Error('Remoção Inválida');
        }

    }

}

// Em seguida, crie uma classe Smartphone que herde de Produto e adicione as seguintes propriedades: marca, modelo e 
// sistema_operacional. A classe deve ter um método que retorne uma descrição completa do smartphone, incluindo todas as
// suas propriedades.

// Por fim, crie um objeto smartphone1 da classe Smartphone, altere seu preço, adicione mais unidades no estoque e exiba sua descrição completa.

// Obs.: Não precisa criar utilizando o Object.defineProperties, mas lembre de criar funções com essas regras dentro da classe.
class Smartphone extends Produto {
    marca;
    modelo;
    sistema_operacional;

    constructor(nome, descricao, codigo, marca, modelo, sistema_operacional) {
        super(nome, descricao, codigo);
        this.marca = marca;
        this.modelo = modelo;
        this.sistema_operacional = sistema_operacional;
    }

    descricao() {
        return `
        nome: ${this.nome} \n
        preco: ${this.preco} \n
        descricao: ${this.descricao} \n
        codigo: ${this.codigo} \n
        Quantidade: ${this.quantidade_em_estoque} \n
        marca: ${this.marca} \n
        modelo: ${this.modelo} \n
        sistema operacional: ${this.sistema_operacional} \n
        `
    }

}


const produto1 = new Produto('Suco da DelValle', 8, 'Suco de Laranja', 855, 50);

console.log(produto1);

produto1.alterarPreco(10);
produto1.adicionarEstoque(10);
produto1.removerProduto(2);


console.log(produto1);

const smartphone1 = new Smartphone('Samsung M10', 'Celular', 8585, 'Samsung', 'M10', 'Android');

console.log(smartphone1);

smartphone1.alterarPreco(2000);
smartphone1.adicionarEstoque(20);

console.log(smartphone1);

