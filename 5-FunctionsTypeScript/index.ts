// 1-Void Funcpes sem retorno
// 2-Callback como argumento
// 3-Generic function
// 4-Constraints em generic function
// 5-Definindo tipo de argumento
// 6-Argumentos opcionas
// 7-Parâmetro default
// 8-Tipo unknown
// 9-Tipo never
// 10-Rest operator com ts
// 11-Destructuring com ts

// 1-Void
function withoutReturn(): void {
  console.log('Função sem retorno');

  // return 2
}

withoutReturn();

// 2-Callback como argumento
function greeting(name: string): string {
  return `Olá ${name}`;
}

function preGreeting(f: (name: string) => string, userName: string) {
  console.log('Preparando a função');

  const greet = f(userName);

  console.log(greet);
}

preGreeting(greeting, 'ale');
preGreeting(greeting, 'Caio');
preGreeting(greeting, 'Fabio');

// 3-Generic function
function firstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(firstElement([1, 2, 3, 4, 5]));
console.log(firstElement(['a', 'b', 'c', 'd']));

function mergeObject<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2,
  };
}

const newObject = mergeObject(
  { name: 'Alexandre' },
  { age: 30, job: 'Programmer' },
);

console.log(newObject);

// 4-Constraints em generic function "Este tipo é quando tem opção de editar, quando o programador cria."
function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T;

  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }

  return biggest;
}

console.log(biggestNumber(5, 3));
console.log(biggestNumber('12', '5'));

let number = '5';
console.log(+number);

// 5-Definindo tipo de argumento "Este tipo é quando usa pronto de alguma biblioteca"
function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays<number | string>([1, 2, 3], ['teste1', 'teste2']));

// 6-Argumentos opcionas
function modernGreeting(name: string, greet?: string) {
  if (greet) {
    return `Olá ${greet} ${name}`;
  }

  return `Olá ${name}`;
}

console.log(modernGreeting('Carlos', 'Dr.'));
console.log(modernGreeting('Carlos'));

// 7-Parâmetro default
function somaDefault(n: number, m = 10): number {
  return n + m;
}

console.log(somaDefault(10));
console.log(somaDefault(10, 15));

// 8-Tipo unknown
function doSomething(x: unknown) {
  if (Array.isArray(x)) {
    console.log(x[0]);
  } else if (typeof x === 'number') {
    console.log('x é um número');
  }
}

doSomething([1, 2, 3]);
doSomething(1);

// 9-Tipo never
function showErrorMessage(msg: string): never {
  throw new Error(msg);
}
// showErrorMessage('Algum erro!');

// 10-Rest operator com ts
function sumAll(...n: number[]) {
  return n.reduce((num, sum) => num + sum);
}

console.log(sumAll(1, 2, 3));

// 11-Destructuring com ts
function showProductDetails({
  name,
  price,
}: {
  name: string;
  price: number;
}): string {
  return `O nome do produto é ${name} e custa ${price}`;
}
const shirt = { name: 'Camisa', price: 49.9 };

console.log(showProductDetails(shirt));
// console.log(showProductDetails({name:'ale', age:30}));
// console.log(showProductDetails([1,2]));
