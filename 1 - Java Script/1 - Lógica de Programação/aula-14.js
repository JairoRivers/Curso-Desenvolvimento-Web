const mensagem = 'sdsidjasidj sdjDFSFSDOKFDSajd';
const mensagem2 = 'dsdsgfdgdfg'

console.log('Tamanho:', mensagem.length); // Número de caracteres
console.log('Concat:', mensagem.concat(mensagem2)); // Junta as duas mensagens
console.log('Concat usando +:', mensagem + mensagem2); // Junta as duas mensagens de uma maneira mais rápido

console.log('ES:', `sdsadsad ${mensagem} ${mensagem2}`); //Melhor forma de organizar texto

console.log(mensagem.substring(5)); // Nesse caso pega a partir do quinto caractere até o final
console.log(mensagem.substring(5, 2)); // Nesse caso pega a partir do segundo caractere até o quinto caractere

console.log('Quebrar em array:', mensagem.split('i')); // Quebra a String com base em um critério como espaço ou uma letra

console.log('Up:', mensagem.toUpperCase()); // Deixa a mensagem para CAPSLK
console.log('DOWN:', mensagem.toLowerCase()); // Deixa a mensagem com caixa pequena

console.log('Replace:', mensagem.replace('sdjDFSFSajd', 'Julio')); // Substitui o texto
