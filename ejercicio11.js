const mixedElements = [
  6,
  1,
  'Marvel',
  1,
  'hamburguesa',
  '10',
  'Prometeo',
  8,
  'Hola mundo'
]

function averageWord(list) {
  if (list.length === 0) return 0 // Evitar división por 0

  let suma = 0

  for (let i = 0; i < list.length; i++) {
    const element = list[i]

    if (typeof element === 'number') {
      suma += element // Si es número, sumamos directamente
    } else if (typeof element === 'string') {
      suma += element.length // Si es string, sumamos su longitud
    }
  }

  return suma / list.length // Promedio total
}

// Prueba de la función
console.log(averageWord(mixedElements)) // 6.888888888888889
