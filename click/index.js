const boton = document.getElementById('click')
console.log("boton : ",boton)

boton.addEventListener('mousemove', (e) => {

    const anchoPantalla = window.innerWidth
    const altoPantalla = window.innerHeight

    let numero =  Math.round(Math.random()*(anchoPantalla-200))
    let numero1 =  Math.round(Math.random()*(altoPantalla-80))

    boton.style.right = `${numero}px`
    boton.style.top = `${numero1}px`

})