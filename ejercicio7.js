function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log(numberOne)
  } else if (numberTwo > numberOne) {
    console.log(numberTwo)
  } else {
    console.log('Ambos números son iguales:', numberOne)
  }
}

// Ejemplos de prueba
greaterNumber(10, 20) // 20
greaterNumber(50, 30) // 50
greaterNumber(15, 15) // Ambos números son iguales: 15
