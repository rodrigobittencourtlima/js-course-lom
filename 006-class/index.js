// Duas maneiras de utilizar variáveis em JS. Apresentam algumas diferenças. "var" é um uso antigo. Atualmente utiliza-se "let".
let nome;
console.log(nome); // undefined
nome = 'Definido';
console.log(nome); // = Definido
nome = 'Definido pela segunda vez';
console.log(nome);

/* Regras para identificador de variáveis:

- Não é possível utilizar palavras reservas. Ex: "let if = 'reserved';".
- Variáveis precisam ter nomes significativos.
- Não é possível iniciar o identificador de uma variável com número. Ex: 1nome.
- Iniciar com letras minúsculas.
- Identificador não pode conter espaços ou traços. Ex: nome-client.
- Utilizar camel case para identificadores compostos.
- Variáveis são case sensitive.
- Não podemos redeclarar variáveis cridas com 'let'.
- Não utilizar 'var', utilizar 'let'.
*/
let name = 'Rodrigo';
//var name = 'João'; 

// não é possível utilizar o mesmo identificador para uma variável.


console.log(name, 'nasceu em 1984.');
console.log('Em 2000', name, 'conheceu Maria.');
console.log(name, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', name, 'em 2015.');
console.log('O filho de', name, 'se chama Eduardo.');