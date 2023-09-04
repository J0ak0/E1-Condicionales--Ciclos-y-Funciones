
// 1 - Determinar si un número es par o impar:

function esParOImpar(numero) {

    if (numero % 2 === 0) {
      console.log("El número es par");
    } else {
      console.log("El número es impar");
    }
}

// 2 - Encontrar el número mayor o determinar si son iguales:

function encontrarMayor(numero1, numero2) {
    if (numero1 > numero2) {
      console.log("El primer número es mayor");
  } else if (numero2 > numero1) {
      console.log("El segundo número es mayor");
  } else {
      console.log("Los números son iguales");
  }
}

//3 - Verificar si un número es múltiplo de 5:

function esMultiploDe5(numero) {
    if (numero % 5 === 0) {
        console.log("El número es múltiplo de 5");
    } else {
        console.log("El número no es múltiplo de 5");
    }
}



//4 - Imprimir números del 0 al número dado:

function imprimirNumerosHasta(numero) {
  for (let i = 0; i <= numero; i++) {
      console.log(i);
  }
}


//5 - Imprimir una palabra repetida según el número dado:

function imprimirPalabraNTimes(palabra, n) {
  for (let i = 0; i < n; i++) {
      console.log(palabra);
  }
}


//6 - Imprimir todos los valores de un array:

function imprimirArrayValores(array) {
  for (let valor of array) {
      console.log(valor);
  }
}


//7 - Imprimir todos los valores de un array excepto el de la 5ta posición:

function imprimirArraySinQuinto(array) {
  for (let i = 0; i < array.length; i++) {
      if (i !== 4) { 
          console.log(array[i]);
      }
  }
}

//8 - Multiplicar cada número del array por un número dado:

function multiplicarArrayPorNumero(array, numero) {
  for (let valor of array) {
      console.log(valor * numero);
  }
}

document.getElementById("resultado8").innerText = multiplicarArrayPorNumero([1, 2, 3, 4], 5);
 
