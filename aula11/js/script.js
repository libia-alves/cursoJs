
// o destino das variaveis que antes eram strings, mudamos o percurso para number

let num1 = prompt('Digite um numero ');
let num2 = prompt('Digite outro numero ');

num1 = Number(num1);
num2 = Number(num2);


const resultado = num1 + num2;

alert(`O resultado da sua conta foi: ${resultado}`);



// Trocar os valores das variaveis, um valor da variavel passara pra outra seguinte 
let varA = 'A'; 
let varB = 'B';
let varC = 'C';

// é necessario criar uma outra variavel
const varAtemp = varA;
varA = varB;
varB = varC;
varC= varAtemp;

//possui uma outra forma de fazer
/* [varA, varB, varC] = [VarB, VarC, VarA];  */

console.log(varA, varB, varC);

