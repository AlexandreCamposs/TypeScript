"use strict";
// 1-Type guard
// 2-Check value exist
// 3-Instanceof
// 4-Operator in
// 1-type guard
function sum(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
    else {
        console.log('Impossível realizar a soma');
    }
}
sum('4', '59');
sum(12, 40);
sum('5', 6);
// 2-Check value exist
function operations(arr, operation) {
    if (operation) {
        if (operation === 'sum') {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === 'multiply') {
            const mult = arr.reduce((i, total) => i * total);
            console.log(mult);
        }
    }
    else {
        console.log('Por favor, defina uma operação!');
    }
}
operations([5, 1]);
operations([1, 2, 3], 'sum');
operations([10, 2, 3], 'multiply');
// 3-Instanceof
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const ale = new User('Ale');
const paul = new SuperUser('Paul');
console.log(ale);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema? `);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}, seja bem vindo.`);
    }
}
userGreeting(paul);
userGreeting(ale);
// 4-Operator in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog('Turca');
const bob = new Dog('Bob', 'Pastor Alemão');
console.log(turca);
console.log(bob);
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log(`O cachorro é SRD`);
    }
}
showDogDetails(turca);
showDogDetails(bob);
// function reviews(nota : Nota){
// }
function reviews(nota) {
    if (!nota) {
        console.log(`Sem nota!`);
        return;
    }
    console.log(`A nota dada foi : ${nota}`);
}
reviews(1);
reviews(false);
