// 2.1 Luke Skywalker cumple años
const jedi = { nombre: 'Luke Skywalker', edad: 19 }

// Actualizamos la edad de Luke a 25
jedi.edad = 25

console.log('La nueva edad de ' + jedi.nombre + ' es: ' + jedi.edad)

// 2.2 Presentación al estilo Leia Organa
const nombre = 'Leia'
const apellido = 'Organa'
const edad = 20

// Concatenamos el mensaje
const presentacion =
  'Soy ' +
  nombre +
  ' ' +
  apellido +
  ', tengo ' +
  edad +
  ' años y soy una princesa de Alderaan.'

console.log(presentacion)

// 2.3 Calculando el coste total de sables de luz
const sable1 = { nombre: 'Shoto de Yoda', precio: 1500 }
const sable2 = { nombre: 'Sable de Darth Vader', precio: 2000 }

// Sumamos los precios
const precioTotalSables = sable1.precio + sable2.precio

console.log(
  'El precio total de los sables de luz es: ' + precioTotalSables + ' créditos'
)

// 2.4 Actualizando el precio final de las naves
let precioBaseGlobal = 10000

// Modificamos el precio base global a 25000
precioBaseGlobal = 25000

const nave1 = { nombre: 'Ala-X', precioBase: 50000, precioFinal: 60000 }
const nave2 = {
  nombre: 'Halcón Milenario',
  precioBase: 70000,
  precioFinal: 80000
}

// Actualizamos el precio final sumando precioBaseGlobal al precioBase
nave1.precioFinal = nave1.precioBase + precioBaseGlobal
nave2.precioFinal = nave2.precioBase + precioBaseGlobal

console.log(
  'El precio final de la ' +
    nave1.nombre +
    ' es: ' +
    nave1.precioFinal +
    ' créditos'
)
console.log(
  'El precio final del ' +
    nave2.nombre +
    ' es: ' +
    nave2.precioFinal +
    ' créditos'
)
