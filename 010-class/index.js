// Tipos de dados primitivos
// String, number, undefined, null, boolean, symbol (será visto futuramente)

// String
const string = 'String';
const string1 = "String";
const string2 = `String`; // template strings

// Number
const num = 10;
const num1 = 10.52;

// Undefined -> não aponta para nenhum local na memória
let variableUndefined;
console.log(typeof variableUndefined, variableUndefined);

// Null -> não aponta para nenhum local na memória. Por um bug na linguagem javascript, null é considerado do tipo object.
const variableNull = null;
console.log(typeof variableNull, variableNull);

// undefined é diferente de null. Null é utilizado quando queremos retirar o valor já setado para alguma variável. Null é utilizado para explicitamente dizer que desejo que uma variável não possua valor. Undefined é setado apenas pela engine. O programador só utiliza null.

// Boolean -> valor lógico
const verdadeiro = true;
const falso = false;

// Tipo de dado passado por referência
const a = [1, 2];
const b = a;
console.log(a, b); // [1, 2], [1 , 2]

a.push(3);
console.log(a, b);// [1, 2, 3], [1 , 2, 3]
// a e b apontam para a mesma referência de memória

// Para tipos primitivos, o valor não é passado por referência de memória
let p1 = 2;
let p2 = p1;
console.log(p1, p2); // 2 e 2

p1 = 3;
console.log(p1, p2);// 3 e 2