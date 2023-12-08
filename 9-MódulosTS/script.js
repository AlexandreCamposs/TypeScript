"use strict";
// 1- Importação de arquivo funções
// 2- Importando variáveis
// 3- Multiplas importações
// 4- Alias
// 5- Import all
// 6- Importando tipos
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1- Importação de arquivo funções
const greet_1 = __importDefault(require("./greet"));
(0, greet_1.default)();
console.log('-------------');
// 2-Importando variáveis
const variable_1 = require("./variable");
console.log('o nome é: ' + variable_1.name);
console.log('-------------');
// 3- Multiplas importações
const mult_1 = require("./mult");
console.log(mult_1.nome, mult_1.age, (0, mult_1.myFunction)());
console.log('-------------');
// 4- Alias
const changeName_1 = require("./changeName");
console.log(changeName_1.someName);
console.log('-------------');
// 5- Import all
const allNumbers = __importStar(require("./numbers"));
console.log(allNumbers);
console.log(allNumbers.n);
console.log('-------------');
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const user = new User('Paulo', 27);
console.log(user);
console.log(user.name);
