"use strict";
// 1- Generics
// 2-Constraint em generic
// 3-Generics com Interface
// 4-Type parameters
// 5-Keyof type operator
// 6-Typeof type operator
// 7-Indexed access types
// 8-Conditional types
// 9-Template literals type
// 1- Generics
function showData(arg) {
    return `O dado é : ${arg}`;
}
console.log(showData(5));
console.log(showData('teste generic'));
console.log(showData(true));
console.log(showData(['teste']));
console.log('--------');
// 2-Constraint em generic
function showProductName(obj) {
    return `O nome do meu produto é ${obj.name}`;
}
const myObj = { name: 'Porta', cor: 'Branca' };
const otherProduct = { name: 'Carro', porta: 4, motor: 1.0 };
const thirdObj = { price: 19.99, category: 'Roupa' };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
// console.log(showProductName(thirdObj));
console.log('--------');
const myCar = { name: 'Ferrari', wheels: 2, engine: 2.0, color: 'preto' };
const myPen = { name: 'Bic', wheels: false, engina: false, color: 'blue' };
console.log(myCar);
console.log(myPen);
console.log('--------');
// 4-Type parameters
function getSomeKey(obj, key) {
    return `A chave ${[key]} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB',
};
console.log(getSomeKey(server, 'ram'));
// console.log(getSomeKey(server, 'teste'));
console.log('-----');
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: 'alexandre',
    age: 30,
    hasDriveLicense: true,
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
// console.log(showCharName(test, 'teste'));
console.log('-----');
// 6-Typeof type operator
const userName = 'alexandre';
const userName2 = 'Alex';
const userName4 = 'Pedro';
const newTruck = {
    km: 1000,
    kg: 2000,
    description: 'Carro uso casual',
};
function showKm(km) {
    console.log(`O veículo tem a km de ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 9000,
    kg: 700,
};
showKm(newCar.km);
console.log('------');
const someVar = 5;
console.log('-----');
const testing = 'some text';
