const input = document.getElementById('input')
const botones = document.querySelectorAll('.calculadora-button button')
console.log("botenes : ",botones)

var valorInput = ""
var valor1 = 0
var operaciones = ["+","-","*","/"]
var operacion = ""

botones.forEach( (boton) =>{
    boton.addEventListener('click', (e) => {
        // console.log("boton : ",e.target.value)
        
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
                input.value = resultado
        }



    })
})

