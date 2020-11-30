/* Regras para identificador de constantes:

- Não é possível utilizar palavras reservas. Ex: "let if = 'reserved';".
- Constantes precisam ter nomes significativos.
- Não é possível iniciar o identificador de uma constante com número. Ex: 1nome.
- Iniciar com letras minúsculas.
- Identificador não pode conter espaços ou traços. Ex: nome-client.
- Utilizar camel case para identificadores compostos.
- Constantes são case sensitive.
- Não podemos modificar o valor de uma constante.
- Não utilizar 'var', utilizar 'const'.
*/

// const name; // não é possível inicializar uma constante sem atribuir um valor.
const name = 'Rodrigo';
console.log(name);

// name = 'Valor alterado'; // não é possível alterar o valor de uma constante.


const firstNumber = 5;
const firstNumberString = '5';
const secondNumber = 10;

// + - * /
const result = firstNumber * secondNumber;
const doubleResult = result * 2;
console.log(result);
console.log(doubleResult);

// É mais interessante utilizar constantes do que modificar valores de variáveis. Evita erros.

// Descobrir o tipo de uma variável / constante
console.log(typeof firstNumber);


// O sinal de '+' é utilizado para realizar somas e para concatenar strings.
console.log(firstNumber + secondNumber);
console.log(firstNumberString + secondNumber);

console.log(typeof (firstNumber + secondNumber));
console.log(typeof (firstNumberString + secondNumber));