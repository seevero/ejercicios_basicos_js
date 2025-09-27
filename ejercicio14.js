const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
]

function repeatCounter(list) {
  const counter = {} // Objeto para almacenar el número de repeticiones

  for (let i = 0; i < list.length; i++) {
    const word = list[i]

    if (counter[word]) {
      counter[word] += 1 // Si ya existe, sumamos 1
    } else {
      counter[word] = 1 // Si no existe, inicializamos en 1
    }
  }

  return counter
}

// Prueba de la función
console.log(repeatCounter(words))
/* Resultado esperado:
{
  code: 4,
  repeat: 1,
  eat: 1,
  sleep: 3,
  enjoy: 2
}
*/
