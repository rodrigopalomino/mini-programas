const imagenes = document.querySelectorAll('.principal__secundario')
const zapatoPrincipal = document.querySelector('.zapato-principal')

console.log("ki : ",imagenes)

imagenes.forEach(imagen => {
    imagen.addEventListener('mouseenter', e => {
        console.log("bine : ",e.target.id)

        const imagenSrc = e.target.querySelector('img').src
        zapatoPrincipal.src = imagenSrc;
        console.log("aca : ",imagenSrc)
    })
})