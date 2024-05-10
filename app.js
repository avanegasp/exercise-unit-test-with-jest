// declaramos una función con el nombre exacto "formEuroToDollar"

const fromDollarToYen = (valueInDollar) =>{

    let valueInYen = valueInDollar * 156.5
    return valueInYen
}

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07
    // retornamos el valor en dólares
    return valueInDollar
}



const sum = (a,b) => {
    return a + b
} 

console.log(sum(6,8))

// module.exports = {sum}

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = {sum,fromEuroToDollar,fromDollarToYen}