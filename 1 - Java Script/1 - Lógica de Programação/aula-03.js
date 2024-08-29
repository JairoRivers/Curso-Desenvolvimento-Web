const idade = 28;
const nome = 'Julio';
let podeEntrar;

// Se for || é OU, ou seja apenas uma precisa ser verdadeira, Se for && é E, ou seja as duas precisam ser verdadeiras
if (idade >= 18 && nome === 'Julio') {
    // == É um comparativo geral independente do tipo, pois o javaScript converte o tipo, === É uma comparativo mais preciso, sem conversão
    podeEntrar = true;
    console.log('Pode Entrar !!!');
} else {
    podeEntrar = false;
    console.log('Não Entra !!!');
}