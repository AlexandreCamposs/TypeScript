"use strict";
//1-Number
let x = 10;
console.log(x);
x = 'alexandre';
console.log(x);
let y = 30.85646;
console.log(typeof y);
console.log(y.toPrecision(4));
let number2 = 30;
console.log(typeof number2);
//2-String
const firstName = 'alexandre';
console.log(firstName.toUpperCase());
const lastName = 'campos';
console.log(lastName.toUpperCase());
const myName = firstName + ' ' + lastName;
console.log(myName);
let idade;
console.log(idade);
idade = 30;
console.log('idade: ' + idade);
//3-Boolean
let a = false;
console.log(a);
a = true;
console.log(a);
//4-intefernece e annotation
let ann = 'teste';
let inf = 'teste';
//5-Desafio 2
let numero = 30;
let newNumero = numero.toString();
console.log(`${typeof newNumero + ' ' + newNumero} / ${typeof numero + ' ' + numero}`);
