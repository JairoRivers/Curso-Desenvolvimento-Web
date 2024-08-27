function calcular(valor) {

    if (valor == 0) {
        throw new Error('Não pode ser 0');
    }

    return valor / 2;
}

try {
    const resultado = calcular(0);
    console.log('Resultado:', resultado);
} catch (error) { //Tratativa de erro
    console.log(error.message);
} finally { //Para fechar um erro
    console.log('Chegou no finaly');
}

console.log('continua');
