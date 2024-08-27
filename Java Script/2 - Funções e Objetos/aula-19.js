function calcular() {
    console.log('calcular')
}
// Não importa se essa função seja chamada antes ou depois, sempre ela será colocada no topo

const calcular2 = function () {
    console.log('calcular 2');
    return 34343;
}

// Arrow function
const calcular3 = (funcao) => {
    console.log('calcular3')
    return funcao();
}

calcular();
console.log('Resultado: ', calcular3(calcular2));