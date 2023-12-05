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
function showData<T>(arg: T): string {
  return `O dado é : ${arg}`;
}

console.log(showData(5));
console.log(showData('teste generic'));
console.log(showData(true));
console.log(showData(['teste']));
console.log('--------');

// 2-Constraint em generic
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do meu produto é ${obj.name}`;
}

const myObj = { name: 'Porta', cor: 'Branca' };
const otherProduct = { name: 'Carro', porta: 4, motor: 1.0 };
const thirdObj = { price: 19.99, category: 'Roupa' };

console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
// console.log(showProductName(thirdObj));
console.log('--------');

// 3-Generics com Interface
interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}

type Car = MyObject<number, number, string>;
type Caneta = MyObject<boolean, boolean, string>;

const myCar = { name: 'Ferrari', wheels: 2, engine: 2.0, color: 'preto' };
const myPen = { name: 'Bic', wheels: false, engina: false, color: 'blue' };

console.log(myCar);
console.log(myPen);
console.log('--------');
// 4-Type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${[key]} está presente no objeto e tem o valor de ${
    obj[key]
  }`;
}

const server = {
  hd: '2TB',
  ram: '32GB',
};

console.log(getSomeKey(server, 'ram'));
// console.log(getSomeKey(server, 'teste'));
console.log('-----');

// 5-Keyof type operator
type Character = { name: string; age: number; hasDriveLicense: boolean };

type C = keyof Character;

function showCharName(obj: Character, key: C): string {
  return `${obj[key]}`;
}

const myChar: Character = {
  name: 'alexandre',
  age: 30,
  hasDriveLicense: true,
};

console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
// console.log(showCharName(test, 'teste'));
console.log('-----');

// 6-Typeof type operator
const userName: string = 'alexandre';

const userName2: typeof userName = 'Alex';

// const userName3: typeof userName = 14

type x = typeof userName;

const userName4: x = 'Pedro';

// 7-Indexed access types
type Truck = { km: number; kg: number; description: string };

type Km = Truck['km'];

const newTruck: Truck = {
  km: 1000,
  kg: 2000,
  description: 'Carro uso casual',
};

function showKm(km: Km) {
  console.log(`O veículo tem a km de ${km}`);
}

showKm(newTruck.km);

const newCar = {
  km: 9000,
  kg: 700,
};

showKm(newCar.km);
console.log('------');

// 8-Conditional types
interface A {}

interface B extends A {}

interface Teste {
  showName(): string;
}

type myType = B extends A ? number : string;

const someVar: myType = 5;
// const someVar2:myType = 'teste'

type myTypeB = Teste extends { showNumber(): number } ? string : boolean;

console.log('-----');

// 9-Template literals type
type testeA = 'text';

type CustomType = `some ${testeA}`;

const testing: CustomType = 'some text';
// const testing2: CustomType = 'some    txt';

type a1 = 'testando';
type a2 = 'union';

type a3 = `${a1}` | `${a2}`;
