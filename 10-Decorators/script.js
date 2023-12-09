"use strict";
// 1- Exemplo decorator "Decorator sempre retorna uma função"
// 2- Multiplos decorators
// 3- class decorator
// 4- method decorator
// 5- Acessor decorator
// 6- Property  decorator
// 7- Real class decorator
// 8- Real method decorator
// 9- Real property decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1- Exemplo decorator
function myDecorator() {
    console.log('Iniciando decorator');
    return function (target, propertKey, description) {
        console.log('Executando decorator');
        console.log(target);
        console.log(propertKey);
        console.log(description);
    };
}
class myClas {
    testing() {
        console.log('terminando execução do método');
    }
}
__decorate([
    myDecorator()
], myClas.prototype, "testing", null);
const obj = new myClas();
console.log(obj);
// obj.testing();
console.log('------');
// 2- Multiplos decorators executa o que esta mais próximo do método
function a() {
    return function (target, propertKey, description) {
        console.log('Executou A');
    };
}
function b() {
    return function (target, propertKey, description) {
        console.log('Executou B');
    };
}
function c() {
    return function (target, propertKey, description) {
        console.log('Executou C');
    };
}
class MultipleDecorators {
    testing() {
        console.log('Terminou a execução');
    }
}
__decorate([
    a(),
    b(),
    c()
], MultipleDecorators.prototype, "testing", null);
const myTesting = new MultipleDecorators();
console.log(myTesting);
myTesting.testing();
console.log('----');
// 3- class decorator
function classDec(constructor) {
    console.log(constructor.name);
    if (constructor.name === 'User') {
        console.log('Criando usuário');
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec
], User);
const ale = new User('ale');
console.log(ale);
console.log('-----');
// 4- method decorator
function enumerable(value) {
    return function (target, propertKey, description) {
        description.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da máquina é : ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine('Trator');
console.log(trator);
console.log(trator.showName());
console.log('--------');
// 5- Acessor decorator
class Moster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `O nome do mostro é ${this.name}`;
    }
    get showAge() {
        return `A idade do mostro é ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Moster.prototype, "showName", null);
__decorate([
    enumerable(false)
], Moster.prototype, "showAge", null);
const squardal = new Moster('squardal', 12);
console.log(squardal);
console.log('------');
// 6- Property  decorator
function formtNumber() {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, '0');
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter,
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formtNumber()
], ID.prototype, "id", void 0);
const newItem = new ID('1');
console.log(newItem);
console.log(newItem.id);
console.log('-----');
// 7- Real class decorator
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book(12);
const newPen = new Pen(2);
console.log(newBook);
console.log(newBook.createdAt);
console.log(newPen);
console.log(newPen.createdAt);
console.log('-----');
// 8- Real method decorator
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log('Usuário já postou!');
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const somePost = new Post();
somePost.post('Meu primeiro post!', somePost.alreadyPosted);
somePost.post('Meu segundo post!', somePost.alreadyPosted);
console.log('-----');
// 9- Real property decorator
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} dígitos.`);
                return;
            }
            else {
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
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "username", void 0);
let pedro = new Admin('pedroadmin123');
let lee = new Admin('lee');
