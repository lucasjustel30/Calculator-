

function calcular(n1, n2){
    n1 =  parseFloat(document.getElementById('n1').value)
    n2 =  parseFloat(document.getElementById('n2').value)


console.log(n1+n2)

selector = document.getElementById('selector').value


switch (selector){
    case '+':
        calculo = (n1 + n2)
        document.getElementById('result').innerHTML = `The result of the sum between ${n1} and ${n2} is = ${calculo}`
        break

    case '-':
        calculo = (n1 - n2)
        document.getElementById('result').innerHTML = `The result of the subtration between ${n1} and ${n2} is = ${calculo}`
        break

    case '*':
        calculo = (n1 * n2)
        document.getElementById('result').innerHTML = `The result of the multiplication bettween ${n1} and ${n2} is = ${calculo}`
        break
        
    case '/':
        calculo = Math.round((n1 / n2))
        if(Number.isNaN(calculo)){
            document.getElementById('result').innerHTML = `Insert a divisible valid !`

        } else {

        document.getElementById('result').innerHTML = `The result of the division between ${n1} e ${n2} é = ${calculo}`
        break
        }
    }
}





