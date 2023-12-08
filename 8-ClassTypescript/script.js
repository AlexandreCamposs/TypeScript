"use strict";
// 1-Campos em classes
// 2-Constructor
// 3-Propriedades readonly
// 4-Herança e super
// 5-Métodos
// 6-this em classes
// 7-Getters
// 8-Setters
// 9-Herdando interfaces
// 10-Override de métodos
// 11-Visibilidade: public
// 12-Visibilidade: protected
// 13-Visibilidade: private
// 14-Static members
// 15-Generic class
// 16-Parameter properties
// 17-Class expressions
// 18-Classe abstrata
// 19-Relação entre classes
// 1-Campos em classes
class User {
}
const alexandre = new User();
console.log(alexandre);
alexandre.name = 'alexandre';
// alexandre.job = "Programmer"
console.log(alexandre);
console.log('---------');
// 2-Constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const ale = new NewUser('Alexandr', 30);
console.log(ale);
console.log('-------');
// 3-Propriedades readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const gol = new Car('Gold');
console.log(gol);
console.log(gol.wheels);
gol.name = 'ferrari';
console.log(gol);
// gol.wheels = 2
console.log('-------');
// 4-Herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine('trator');
console.log(trator);
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const killerM = new KillerMachine('tank', 2);
console.log(killerM);
console.log('-------');
// 5-Métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log('Olá estranho');
    }
}
const jimmy = new Dwarf('Jimmy');
jimmy.greeting();
console.log(jimmy);
console.log('-------');
// 6-this em classes
class Truck {
    constructor(name, hp) {
        this.model = name;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminha do modelo: ${this.model}, tem ${this.hp} de potência`);
    }
}
const volvo = new Truck('volvo', 400);
console.log(volvo);
volvo.showDetails();
const scania = new Truck('Scania', 300);
console.log(scania);
scania.showDetails();
console.log('-------');
// 7-Getters
class Person {
    constructor(name, age) {
        this.name = name;
        this.surname = age;
    }
    get fullName() {
        return this.name + ' ' + this.surname;
    }
}
const aleC = new Person('alexandre', 'campos');
console.log(aleC);
console.log(aleC.name);
console.log(aleC.fullName);
console.log('-------');
// 8-Setters
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log('x inserido com sucesso');
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log('y inserido com sucesso');
    }
    get getCoords() {
        return `x: ${this.x} e y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 0;
myCoords.fillY = 10;
console.log(myCoords);
console.log(myCoords.getCoords);
console.log('-------');
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O títulodo post é : ${this.title}`;
    }
}
const myPost = new blogPost('Hello world');
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O títulodo é : ${this.title}`;
    }
}
const myPost2 = new TestingInterface('Olá mundo');
console.log(myPost2.itemTitle());
console.log('-------');
// 10-Override de métodos
class Base {
    someMethod() {
        console.log('Alguma coisa');
    }
}
class Nova extends Base {
    someMethod() {
        console.log('Outra coisa');
    }
}
const myObj1 = new Base();
const myObj2 = new Nova();
myObj1.someMethod();
myObj2.someMethod();
console.log('-------');
// 11-Visibilidade: public
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cInstance = new C();
console.log(cInstance.x);
const dInstance = new D();
console.log(dInstance.x);
console.log('-------');
// 12-Visibilidade: protected só pode ser acessado criando método
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log('Método protegido');
    }
}
class F extends E {
    showX() {
        console.log('x:' + this.x);
    }
    showProtectMethod() {
        this.protectedMethod;
    }
}
const fInstance = new F();
fInstance.showX();
fInstance.showProtectMethod();
console.log('-------');
// 13-Visibilidade: private
class PrivateClass {
    constructor() {
        this.name = 'Privado';
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log('Método privado');
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObjt = new PrivateClass();
// console.log(pObjt.name);
console.log(pObjt.showName());
// console.log(pObjt.privateMethod());
pObjt.showPrivateMethod();
// class TestingPrivate extends PrivateClass {
//   myMethod() {
//     this.privateMethod();
//   }
// }
console.log('-------');
// 14-Static members
class StaticMembers {
    static staticMethod() {
        console.log('Este é um método estático');
    }
}
StaticMembers.prop = 'Teste';
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
console.log('-------');
// 15-Generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showNome() {
        return `O nome é ${this.first}`;
    }
}
const newItem = new Item('lapis', 'caixa');
console.log(newItem.showNome);
console.log('-------');
// 16-Parameter properties
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Qtd total ${this.qty}`;
    }
    get showPrice() {
        return `Price ${this.price}`;
    }
}
const newShirt = new ParameterProperties('Camisa', 2, 29.99);
console.log(newShirt.name);
console.log(newShirt.showQty);
console.log(newShirt.showPrice);
console.log('-------');
// 17-Class expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass('Jonathan');
console.log(pessoa);
console.log(pessoa.name);
console.log('-------');
// 18-Classe abstrata
class AbstractClass {
}
// const newObjt = new AbstractClass()
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é ${this.name}`);
    }
}
const newAbstractObj = new AbstractExample('Alex');
console.log(newAbstractObj);
newAbstractObj.showName();
console.log('-------');
// 19-Relação entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
console.log('-------');
