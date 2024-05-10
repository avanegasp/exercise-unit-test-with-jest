const {sum, fromDollarToYen} = require('./app.js')

// comenzar la primera prueba unitaria}

test('adds 14 + 9 to equal 23', () =>{

    // dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14,9)

        expect(total).toBe(23)
}) 

test('One euro should be 1.07 dollars', () => {
    // importo la función desde app.js
    const{fromEuroToDollar} = require('./app.js');

    // uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5)

    // si. 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = dollars * 1.07
    console.log(dollars)
    console.log(expected)

    // hago la comparación (prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test('One dollar should be 156.5 Yenes', () => {
    const{fromDollarToYen} = require('./app.js')

    const yenes = fromDollarToYen(5.6)

    const expected = yenes + 156.5
    console.log(expected)

    expect(fromDollarToYen(5.6)).toBe(876.4)
})

