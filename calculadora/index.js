const input = document.getElementById('input')
const botones = document.querySelectorAll('.calculadora-button button')
const cambio = document.getElementById('cambio')
const calculadora = document.getElementById('calculadora')

var valorInput = ""
var valor1 = 0
var operaciones = ["+","-","*","/"]
var operacion = ""
var negro = true


cambio.addEventListener('click', () => {

    
        
    if ( negro ){
        calculadora.classList.remove('c-negro')
        calculadora.classList.add('c-blanco')
        input.classList.remove('input-negro')
        input.classList.add('c-blanco')
        negro = false
    }else {
        calculadora.classList.add('c-negro')
        calculadora.classList.remove('c-blanco')
        input.classList.add('input-negro')
        input.classList.remove('c-blanco')
        negro = true
    }


    


})


botones.forEach( (boton) =>{
    boton.addEventListener('click', (e) => {
        // console.log("boton : ",e.target.value)
        // console.log("")
        // console.log("valorinput : ",valorInput)
        // console.log("valor1 : ",valor1)
        
        if ( !isNaN(e.target.value) ){
            valorInput = valorInput + e.target.value
            input.value = valorInput
        }

        

        switch(e.target.value) {
            case "reset":
                input.value = ""
                valor1 = 0
                valorInput = ""
                break
            case "+":
                valor1 = parseInt(valorInput)
                input.value = ""
                valorInput = ""
                operacion = operaciones[0]
                break
            case "-":
                valor1 = parseInt(valorInput)
                input.value = ""
                valorInput = ""
                operacion = operaciones[1]
                break
                case "*":
                    valor1 = parseInt(valorInput)
                    input.value = ""
                    valorInput = ""
                    operacion = operaciones[2]
                    break
                case "/":
                    valor1 = parseInt(valorInput)
                    input.value = ""
                    valorInput = ""
                    operacion = operaciones[3]
                    break
            case "igual":
                let resultado =  eval(valor1 + operacion + parseInt(valorInput))
                valorInput = resultado
                input.value = resultado
        }
    })
})

