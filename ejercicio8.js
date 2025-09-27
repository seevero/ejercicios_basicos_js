const avengers = [
  'Hulk',
  'Thor',
  'Iron Man',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]

function findLongestWord(stringList) {
  if (stringList.length === 0) return null // Caso por si el array está vacío

  let longestWord = stringList[0] // Partimos del primer elemento

  for (let i = 1; i < stringList.length; i++) {
    if (stringList[i].length > longestWord.length) {
      longestWord = stringList[i] // Actualizamos si encontramos una palabra más larga
    }
  }

  return longestWord
}

// Prueba de la función
console.log(findLongestWord(avengers)) // "Spiderman"
