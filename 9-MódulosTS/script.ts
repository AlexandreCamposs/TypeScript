// 1- Importação de arquivo funções
// 2- Importando variáveis
// 3- Multiplas importações
// 4- Alias
// 5- Import all
// 6- Importando tipos

// 1- Importação de arquivo funções
import importGreet from './greet';

importGreet();

console.log('-------------');

// 2-Importando variáveis
import { name } from './variable';

console.log('o nome é: ' + name);

console.log('-------------');

// 3- Multiplas importações
import { nome, age, myFunction } from './mult';

console.log(nome, age, myFunction());

console.log('-------------');

// 4- Alias
import { someName as newName } from './changeName';

console.log(newName);

console.log('-------------');

// 5- Import all

import * as allNumbers from './numbers';

console.log(allNumbers);

console.log(allNumbers.n);

console.log('-------------');

// 6- Importando tipos

import { Human } from './myType';

class User implements Human {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const user = new User('Paulo', 27);

console.log(user);

console.log(user.name);
