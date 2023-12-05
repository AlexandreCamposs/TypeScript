// 1-Interface como parâmetro
// 2-Interface com parâmetro opcional
// 3-Propriedades readonly
// 4-Index Signature
// 5-Herança de interfaces
// 6-Intersection types
// 7-Readonly array
// 8-Tuplas
// 9-Tuplas com readonly

// 1-Interface como parâmetro
// sem usar interface
// function showProductDetaills(name:string,price:number,isAvailable:boolean){}
// sem usar interface

interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails(product: Product) {
  console.log(
    `O nome do produto é ${product.name} e seu preço é ${product.price}`,
  );

  if (product.isAvailable) {
    console.log('O produto está disponível');
  }
}
const shirt: Product = {
  name: 'Camisa',
  price: 29.9,
  isAvailable: true,
};

showProductDetails(shirt);

showProductDetails({ name: 'Bermuda', price: 19.9, isAvailable: true });
showProductDetails({ name: 'Boné', price: 19.9, isAvailable: false });

console.log('----');

// 2-Interface com parâmetro opcional
interface User {
  email: string;
  role?: string;
}

function showProductDetaills(user: User) {
  console.log(`o usuário tem o e-mail: ${user.email}`);

  if (user.role) {
    console.log(`o usuário tem é ${user.role}`);
  }
}
const user1: User = { email: 'ale@email.com', role: 'Adm' };
const user2: User = { email: 'paulo@email.com' };
console.log(user1);

showProductDetaills(user1);
showProductDetaills(user2);

console.log('----');

// 3-Propriedades readonly
interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: 'VW',
  wheels: 4,
};

// fusca.wheels = 5;

console.log(fusca);
console.log('----');

// 4-Index Signature
interface CoordObj {
  [index: string]: number;
}

let coords: CoordObj = {
  x: 10,
};

coords.y = 15;

console.log(coords);

// coords.z = 'teste'

console.log('----');

// 5-Herança de interfaces
interface Human {
  name: string;
  age: number;
}
interface SuperHuman extends Human {
  superpowers: string[];
}

const ale: Human = {
  name: 'Ale',
  age: 30,
};

console.log(ale);

const goku: SuperHuman = {
  name: 'Goku',
  age: 50,
  superpowers: ['Kamehameha', 'Genki Dama'],
};

console.log(goku);
console.log(goku.superpowers);
console.log('----');

// 6-Intersection types união de interface
interface Character {
  name: string;
}

interface Gun {
  power: string;
  age: number;
}

type HumanSpecial = Character & Gun;

const naruto: HumanSpecial = {
  name: 'naruto',
  power: 'Rasengan',
  age: 20,
};

console.log(naruto);
console.log('----');
// 7-Readonly array não deixa modificar o array, pode modificar apenas se usar métodos
let myArray: ReadonlyArray<string> = [
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

// 8-Tuplas
type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];
// const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5,6]
// const mixed: fiveNumbers = [1,'teste',5,true]
console.log(myNumberArray);

type nameAndAge = [string, number];

const UserName: nameAndAge = ['alexandre', 30];

console.log(UserName);

UserName[0] = 'alex';

console.log(UserName);
console.log('----');

// 9-Tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
  // numbers[0] = 10;
  console.log(numbers[0]);
  console.log(numbers[1]);
}

showNumbers([1, 2]);
console.log('----');
