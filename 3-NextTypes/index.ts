// 1- Array
// 2- next sintaxe array
// 3- any
// 4- parametros tipados
// 5- Retorno funcao
// 6- Funções anônimas
// 7- tipos de objetos
// 8- Propriedades opcionais
// 9- validando parametros opcional
// 10- union types
// 11- avançando em union types
// 12- type alias
// 13- interfaces
// 14- Diferença entre type e alias
// 15- literal types
// 16- non null assetion operators
// 17- bigInt
// 18- symbol

// 1- Array
const nomes: string[] = ['alexandre', 'Pedro'];
console.log(nomes);

nomes.push('Fernando');

console.log(nomes);

// nomes.push(5);

const numeros: number[] = [1, 2, 3, 4, 5, 6];

console.log(numeros);

numeros.push(7);

console.log(numeros);

// numeros.push('alex');

// console.log(numeros);

// 2- next sintaxe array

const nums: Array<number> = [100, 200];

console.log(nums);

// 3- any

const arr1: any = ['teste', 1, 2, 'teste2', { teste: 'valor' }];
console.log(arr1);

arr1.push('testando');

console.log(arr1);

// 4- parametros tipados

function sum(a: number, b: number) {
  console.log(a + b);
}

sum(40, 50);

// sum('40', '3');

// 5-Retorno funcao

function nome(nome: string): string {
  // return 5;
  return ` Olá ${nome}`;
}

nome('alexandre');

// 6-Funções anônimas

setTimeout(function () {
  const salary: number = 3000;

  // console.log(parseFloat(salary));
  // console.log(salary);
}, 2000);

// 7-tipos de objetos
function passCordenadas(coord: { x: number; y: number }) {
  console.log('x cordenada: ' + coord.x);
  console.log('x cordenada: ' + coord.y);
}

const objCord = { x: 329, y: 85.6 };

passCordenadas(objCord);

// passCordenadas({ nome: 1, sobreNome: 2 });

const pessoaObj: { nome: string; sobrenome: string } = {
  nome: 'Alexandre',
  sobrenome: 'Campos',
};

// 8- Propriedades opcionais

function showNumber(a: number, b: number, c?: number) {
  console.log('A -' + a);
  console.log('B -' + b);
  if (c) {
    console.log('C -' + c);
  }
}

showNumber(1, 2, 3);

// 9-validando parametros opcional

function advanceGrenting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Olá ${firstName} ${lastName}`;
  }

  return `Olá ${firstName}`;
}

console.log(advanceGrenting('alexandre', 'campos'));

// 10-union types
function showBalance(balance: string | number) {
  console.log(`Saldo da conta ${balance}`);
}

showBalance(500);
showBalance('500');

const arr2: Array<number | string | boolean> = [1, 'alex', true];
console.log(arr2);

//11 avançando em union types
function showUserRole(role: boolean | string) {
  if (typeof role === 'boolean') {
    return `Usuário não aprovado`;
  }
  return `A função do usuário é ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole('adm'));

// 12-type alias

type ID = string | number;

function showId(id: ID) {
  return `Meu id é : ${id}`;
}

console.log(showId(12));
// console.log(showId('12'));
// console.log(showId(false));

// 13-interfaces
interface Point {
  x: number;
  y: number;
  z: number;
}

// function showCoords(obj: {x:number,y:number,z:number}) {
//   console.log(`X:${obj.x},y:${obj.y},z:${obj.z},`);
// }

function showCoords(obj: Point) {
  console.log(`X:${obj.x},y:${obj.y},z:${obj.z},`);
}

const coordObj: Point = {
  x: 10,
  y: 12,
  z: 15,
};

// 14-Diferença entre type e alias

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const somePerson: Person = { name: 'alexandre', age: 30 };
console.log(somePerson);

type personType = {
  name: string;
};

// type personType = {
//   age:number
// }

// 15- literal types
let teste: 'testando';

// teste = '1'

teste = 'testando';

function showDirection(direction: 'left' | 'right' | 'center') {
  console.log(`A direção é :${direction}`);
}

// showDirection('bottom');

showDirection('left');

// 16-non null assetion operators

const p = document.getElementById('x');

console.log(p!.innerText);

// 17-bigInt

let n: bigint;

// n =1

n = 1000n;

console.log(n);

// 18-symbol
let symbolA: symbol = Symbol('A');
let symbolB = Symbol('A');

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
