const iconos = document.querySelectorAll('.icono')
console.log("iconos : ",iconos)

iconos.forEach( icono => {
    icono.addEventListener('click', (e) => {

        iconos.forEach(otroIcono => {
            otroIcono.classList.remove('icono-activo')
        })

        icono.classList.add('icono-activo')
        
    })
})