let idade = 1;

// Ele executa e depois verifica se deve passar de novo, em caso que tem que passar pelo mesmo uma vez
do {
    console.log('Passou', idade);
    idade++;
} while (idade < 18);