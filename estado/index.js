const bottonCircle = document.getElementById('button-circle')
console.log("sc : ",bottonCircle)

bottonCircle.addEventListener('click', e => {

    bottonCircle.classList.toggle('open')
    
    document.getElementById('conteiner__nube').classList.toggle('open')

    console.log("bien")
})