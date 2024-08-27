function somaMultiplos13(x, y) {
    let resultado = 0;

    if (y < x) {
        let controlador = y;
        y = x;
        x = controlador;
    }

    for (x; x <= y; x++) {
        if (x % 13 !== 0) {
            resultado += x;
        }
    }

    console.log(resultado);
}

somaMultiplos13(100, 200);
somaMultiplos13(200, 100);