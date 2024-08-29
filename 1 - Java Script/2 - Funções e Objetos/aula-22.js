const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms)) //Promessa
}

const aguardarComRetorno = async () => {
    await sleep(3000);
    return 30;
}

const aguardar = async () => {
    console.log('PASSOU', 2 ** 2);
    const resultado = await aguardarComRetorno();
    console.log('Resultado', resultado)
    console.log('PASSOU', 3 ** 3);
    console.log('PASSOU', 4 ** 4);
    console.log('PASSOU', 5 ** 5);
}


aguardar();


/*
// O Timeout espera apenas esse processamento e não os outros

const aguardar = () => {
    console.log('PASSOU', 2 ** 2);
    setTimeout(() => {
        console.log('PASSOU TIMEOUT');
    }, 1000)
    console.log('PASSOU', 3 ** 3);
    console.log('PASSOU', 4 ** 4);
    console.log('PASSOU', 5 ** 5);
}


aguardar();
*/
