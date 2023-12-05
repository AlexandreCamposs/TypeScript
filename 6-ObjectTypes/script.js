"use strict";
// 1-Interface como parâmetro
// 2-Interface com parâmetro opcional
// 3-Propriedades readonly
// 4-Index Signature
// 5-Herança de interfaces
// 6-Intersection types
// 7-Readonly array
// 8-Tuplas
// 9-Tuplas com readonly
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é ${product.price}`);
    if (product.isAvailable) {
        console.log('O produto está disponível');
    }
}
const shirt = {
    name: 'Camisa',
    price: 29.9,
    isAvailable: true,
};
showProductDetails(shirt);
showProductDetails({ name: 'Bermuda', price: 19.9, isAvailable: true });
showProductDetails({ name: 'Boné', price: 19.9, isAvailable: false });
console.log('----');
function showProductDetaills(user) {
    console.log(`o usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`o usuário tem é ${user.role}`);
    }
}
const user1 = { email: 'ale@email.com', role: 'Adm' };
const user2 = { email: 'paulo@email.com' };
console.log(user1);
showProductDetaills(user1);
showProductDetaills(user2);
console.log('----');
const fusca = {
    brand: 'VW',
    wheels: 4,
};
// fusca.wheels = 5;
console.log(fusca);
console.log('----');
let coords = {
    x: 10,
};
coords.y = 15;
console.log(coords);
// coords.z = 'teste'
console.log('----');
const ale = {
    name: 'Ale',
    age: 30,
};
console.log(ale);
const goku = {
    name: 'Goku',
    age: 50,
    superpowers: ['Kamehameha', 'Genki Dama'],
};
console.log(goku);
console.log(goku.superpowers);
console.log('----');
const naruto = {
    name: 'naruto',
    power: 'Rasengan',
    age: 20,
};
console.log(naruto);
console.log('----');
// 7-Readonly array não deixa modificar o array, pode modificar apenas se usar métodos
let myArray = [
    'banana',
    'pera',
    'morango',
    'abacaxi',
    'uva',
];
// myArray[1] = 'mamão';
// console.log(myArray);
myArray.forEach((fruta) => console.log(`Fruta : ${fruta}`));
myArray.map((fruta) => {
    return 'Frunta: ' + fruta;
});
console.log(myArray);
console.log('----');
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5,6]
// const mixed: fiveNumbers = [1,'teste',5,true]
console.log(myNumberArray);
const UserName = ['alexandre', 30];
console.log(UserName);
UserName[0] = 'alex';
console.log(UserName);
console.log('----');
// 9-Tuplas com readonly
function showNumbers(numbers) {
    // numbers[0] = 10;
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
console.log('----');
