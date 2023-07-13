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
        input.classList.add('input-blanco')

        cambio.classList.add('cambio-negro')
        cambio.classList.remove('cambio-blanco')

        negro = false
    }else {
        calculadora.classList.add('c-negro')
        calculadora.classList.remove('c-blanco')
        input.classList.add('input-negro')
        input.classList.remove('input-blanco')

        cambio.classList.remove('cambio-negro')
        cambio.classList.add('cambio-blanco')

        negro = true
    }


    


})


botones.forEach( (boton) =>{
    boton.addEventListener('click', (e) => {

        
        if ( !isNaN(e.target.value) ){
            valorInput = valorInput + e.target.value
            input.value = valorInput
        }

        

        switch(e.target.value) {
            case "punto":
                if (!valorInput.includes('.')) {
                    valorInput = valorInput + '.';
                    input.value = valorInput;
                    }
                break
            case "reset":
                input.value = ""
                valor1 = 0
                valorInput = ""
                break
            case "+":
                valor1 = parseFloat(valorInput)
                input.value = ""
                valorInput = ""
                operacion = operaciones[0]
                break
            case "-":
                valor1 = parseFloat(valorInput)
                input.value = ""
                valorInput = ""
                operacion = operaciones[1]
                break
                case "*":
                    valor1 = parseFloat(valorInput)
                    input.value = ""
                    valorInput = ""
                    operacion = operaciones[2]
                    break
                case "/":
                    valor1 = parseFloat(valorInput)
                    input.value = ""
                    valorInput = ""
                    operacion = operaciones[3]
                    break
            case "igual":
                let resultado =  eval(valor1 + operacion + parseFloat(valorInput))
                valorInput = resultado
                input.value = resultado
        }
    })
})

