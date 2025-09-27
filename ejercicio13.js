const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

function nameFinder(nameList, value) {
  const index = nameList.indexOf(value) // Buscamos el índice del elemento

  if (index !== -1) {
    return { exists: true, position: index } // Si existe, devolvemos true y la posición
  } else {
    return false // Si no existe, devolvemos false
  }
}

// Pruebas de la función
console.log(nameFinder(names, 'Natasha')) // { exists: true, position: 3 }
console.log(nameFinder(names, 'Wanda')) // false
console.log(nameFinder(names, 'Peter')) // { exists: true, position: 0 }
