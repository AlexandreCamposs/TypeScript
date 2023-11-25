//1-Number
let x: number = 10;
console.log(x);

x = 'alexandre';
console.log(x);

let y: number = 30.85646;
console.log(typeof y);
console.log(y.toPrecision(4));

let number2: number = 30;
console.log(typeof number2);

//2-String
const firstName: string = 'alexandre';
console.log(firstName.toUpperCase());

const lastName: string = 'campos';
console.log(lastName.toUpperCase());

const myName: string = firstName + ' ' + lastName;

console.log(myName);

let idade: number;

console.log(idade);

idade = 30;

console.log('idade: ' + idade);

//3-Boolean
let a: boolean = false;
console.log(a);

a = true;

console.log(a);

//4-intefernece e annotation

let ann: string = 'teste';

let inf = 'teste';

//5-Desafio 2
let numero: number = 30;

let newNumero = numero.toString();

console.log(
  `${typeof newNumero + ' ' + newNumero} / ${typeof numero + ' ' + numero}`,
);
