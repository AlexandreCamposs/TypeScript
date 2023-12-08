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
// 11-Sobre a visibilidade de propriedades e métodos
// 12-Visibilidade: public
// 13-Visibilidade: protected
// 14-Visibilidade: private
// 15-Static members
// 16-Generic class
// 17-Parameter properties
// 18-Class expressions
// 19-Classe abstrata
// 20-Relação entre classes
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
console.log('-------');
// 5-Métodos
console.log('-------');
// 6-this em classes
console.log('-------');
// 7-Getters
console.log('-------');
// 8-Setters
console.log('-------');
// 9-Herdando interfaces
console.log('-------');
// 10-Override de métodos
console.log('-------');
// 11-Sobre a visibilidade de propriedades e métodos
console.log('-------');
// 12-Visibilidade: public
console.log('-------');
// 13-Visibilidade: protected
console.log('-------');
// 14-Visibilidade: private
console.log('-------');
// 15-Static members
console.log('-------');
// 16-Generic class
console.log('-------');
// 17-Parameter properties
console.log('-------');
// 18-Class expressions
console.log('-------');
// 19-Classe abstrata
console.log('-------');
// 20-Relação entre classes
console.log('-------');
