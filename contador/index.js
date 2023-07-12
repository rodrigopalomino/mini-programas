const botonClick = document.getElementById('button-click')
const botonReset = document.getElementById('button-reset')
const input = document.getElementById('input')

var contador = 0
botonClick.addEventListener('click', (e) => {

    contador++
    input.value = contador

})

botonReset.addEventListener('click', (e) => {

    contador = 0
    input.value = contador

})