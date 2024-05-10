const {sum, fromDollarToYen} = require('./app.js')

// comenzar la primera prueba unitaria}

test('adds 14 + 9 to equal 23', () =>{
    // dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14,9)
    expect(total).toBe(23)
}) 

test('3.5 euros should be 3.7 dollars', () => {
    // importo la función desde app.js
    const{fromEuroToDollar} = require('./app.js');
    // uso la función como debe ser usada
    const dollar = fromEuroToDollar(3.5)
    // hago la comparación (prueba)
    expect(dollar).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test('5.6 dollar should be 876.4 Yenes', () => {
    const{fromDollarToYen} = require('./app.js')
    const yen = fromDollarToYen(5.6)
    expect(yen).toBe(876.4)
})

test('One Yen should be 0.87 Pounds', () => {
    const{fromYenToPound} = require('./app.js')
    const pounds = fromYenToPound(1)
    expect(pounds).toBe(0.87)
})
