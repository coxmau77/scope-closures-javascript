function crearContador() {

    let contador = 0;

    return function incrementar() {

        return contador = contador + 1;
    }
}

const contadorA = crearContador();
contadorA(); //1
contadorA(); //2
contadorA(); //3
contadorA(); //4
console.log(contadorA()); //5