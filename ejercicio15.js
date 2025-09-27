const products = [
  'Camiseta de Metallica',
  'Pantalón vaquero',
  'Gorra de beisbol',
  'Camiseta de Basket',
  'Cinturón de Orión',
  'AC/DC Camiseta'
]

// Recorremos el array y mostramos los productos que incluyan "Camiseta"
for (let i = 0; i < products.length; i++) {
  if (products[i].includes('Camiseta')) {
    console.log(products[i])
  }
}

/* Resultado esperado por consola:
Camiseta de Metallica
Camiseta de Basket
AC/DC Camiseta
*/
