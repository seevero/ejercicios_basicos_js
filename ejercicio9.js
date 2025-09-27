const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumNumbers(numberList) {
  let suma = 0 // Inicializamos la suma en 0

  for (let i = 0; i < numberList.length; i++) {
    suma += numberList[i] // Sumamos cada elemento del array
  }

  return suma
}

// Prueba de la función
console.log(sumNumbers(numbers)) // 151
