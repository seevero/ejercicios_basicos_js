const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

function removeDuplicates(list) {
  const uniqueArray = [] // Nuevo array para almacenar valores únicos

  for (let i = 0; i < list.length; i++) {
    const element = list[i]

    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element) // Solo agregamos si no está ya en el array
    }
  }

  return uniqueArray
}

// Prueba de la función
console.log(removeDuplicates(duplicates))
/* Resultado esperado:
["sushi", "pizza", "burger", "potatoe", "pasta", "ice-cream", "chicken", "onion rings", "soda"]
*/
