// var pode ser redeclarado. let não permite.
// ECMAScript = padronização da linguagem Javascript criada pela empresa ECMA International. ECMAScript 2015 = ES6.
var name = 'Rodrigo';
console.log(name);

var name = 'Rodrigo redeclarado';
console.log(name);

name = 'Rodrigo Global'; // NÃO FAÇA ISSO - cria variável global
console.log(name);

// NUNCA CRIAR VARIÁVEIS SEM UTILIZAR cont OU let.