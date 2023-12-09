// 1- Exemplo decorator "Decorator sempre retorna uma função"
// 2- Multiplos decorators
// 3- class decorator
// 4- method decorator
// 5- Acessor decorator
// 6- Property  decorator
// 7- Real class decorator
// 8- Real method decorator
// 9- Real property decorator

// 1- Exemplo decorator
function myDecorator() {
  console.log('Iniciando decorator');

  return function (
    target: any,
    propertKey: string,
    description: PropertyDescriptor,
  ) {
    console.log('Executando decorator');
    console.log(target);
    console.log(propertKey);
    console.log(description);
  };
}

class myClas {
  @myDecorator()
  testing() {
    console.log('terminando execução do método');
  }
}

const obj = new myClas();

console.log(obj);

// obj.testing();

console.log('------');

// 2- Multiplos decorators executa o que esta mais próximo do método
function a() {
  return function (
    target: any,
    propertKey: string,
    description: PropertyDescriptor,
  ) {
    console.log('Executou A');
  };
}

function b() {
  return function (
    target: any,
    propertKey: string,
    description: PropertyDescriptor,
  ) {
    console.log('Executou B');
  };
}

function c() {
  return function (
    target: any,
    propertKey: string,
    description: PropertyDescriptor,
  ) {
    console.log('Executou C');
  };
}

class MultipleDecorators {
  @a()
  @b()
  @c()
  testing() {
    console.log('Terminou a execução');
  }
}

const myTesting = new MultipleDecorators();
console.log(myTesting);

myTesting.testing();

console.log('----');

// 3- class decorator
function classDec(constructor: Function) {
  console.log(constructor.name);

  if (constructor.name === 'User') {
    console.log('Criando usuário');
  }
}

@classDec
class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const ale = new User('ale');

console.log(ale);

console.log('-----');

// 4- method decorator
function enumerable(value: boolean) {
  return function (
    target: any,
    propertKey: string,
    description: PropertyDescriptor,
  ) {
    description.enumerable = value;
  };
}

class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }

  @enumerable(false)
  showName() {
    console.log(this);
    return `O nome da máquina é : ${this.name}`;
  }
}

const trator = new Machine('Trator');

console.log(trator);
console.log(trator.showName());

console.log('--------');

// 5- Acessor decorator
class Moster {
  name?;
  age?;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @enumerable(true)
  get showName() {
    return `O nome do mostro é ${this.name}`;
  }

  @enumerable(false)
  get showAge() {
    return `A idade do mostro é ${this.age}`;
  }
}

const squardal = new Moster('squardal', 12);

console.log(squardal);

console.log('------');

// 6- Property  decorator
function formtNumber() {
  return function (target: Object, propertKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      value = newVal.padStart(5, '0');
    };

    Object.defineProperty(target, propertKey, {
      set: setter,
      get: getter,
    });
  };
}

class ID {
  @formtNumber()
  id;

  constructor(id: string) {
    this.id = id;
  }
}

const newItem = new ID('1');

console.log(newItem);
console.log(newItem.id);

console.log('-----');

// 7- Real class decorator
function createdDate(created: Function) {
  created.prototype.createdAt = new Date();
}
@createdDate
class Book {
  id;
  createdAt?: Date;

  constructor(id: number) {
    this.id = id;
  }
}

@createdDate
class Pen {
  id;
  createdAt?: Date;

  constructor(id: number) {
    this.id = id;
  }
}

const newBook = new Book(12);

const newPen = new Pen(2);

console.log(newBook);
console.log(newBook.createdAt);
console.log(newPen);
console.log(newPen.createdAt);

console.log('-----');

// 8- Real method decorator
function checkIfUserPosted() {
  return function (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor,
  ) {
    const childFunction = descriptor.value;
    descriptor.value = function (...args: any[]) {
      if (args[1] === true) {
        console.log('Usuário já postou!');
        return null;
      } else {
        return childFunction.apply(this, args);
      }
    };
    return descriptor;
  };
}

class Post {
  alreadyPosted = false;

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true;
    console.log(`Post do usuário: ${content}`);
  }
}

const somePost = new Post();

somePost.post('Meu primeiro post!', somePost.alreadyPosted);

somePost.post('Meu segundo post!', somePost.alreadyPosted);

console.log('-----');

// 9- Real property decorator
function Max(limit: number) {
  return function (target: Object, propertyKey: string) {
    let value: string;
    const getter = function () {
      return value;
    };
    const setter = function (newVal: string) {
      if (newVal.length > limit) {
        console.log(`O valor deve ter no máximo ${limit} dígitos.`);
        return;
      } else {
        value = newVal;
      }
    };
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  };
}

class Admin {
  @Max(10)
  username;

  constructor(username: string) {
    this.username = username;
  }
}

let pedro = new Admin('pedroadmin123');
let lee = new Admin('lee');
