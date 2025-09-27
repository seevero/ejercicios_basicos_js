const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
]

// Recorremos el array de atrás hacia adelante para evitar problemas al eliminar elementos
for (let i = placesToTravel.length - 1; i >= 0; i--) {
  if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
    placesToTravel.splice(i, 1) // Eliminamos el elemento en la posición i
  }
}

console.log(placesToTravel)

/* Resultado esperado:
[
  {id: 5, name: 'Japan'},
  {id: 23, name: 'Murcia'},
  {id: 44, name: 'Filipinas'},
  {id: 59, name: 'Madagascar'}
]
*/
