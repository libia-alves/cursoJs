let nome = 'joao';
let cidade = 'Cuiaba';


console.log(nome, 'nasceu em 2004');
console.log('comelou o verão em', cidade);


const primeironumero = 5;
const segundoumero = 10;
const resultado = primeironumero * segundoumero;
const resultadoduplicado = resultado * 2;
console.log(resultado);
console.log(resultadoduplicado);

//verificar o tipo de dados 
console.log(typeof primeironumero);

const pessoa = 'libia alves';
const idade = 19;
const peso = 52;
const altura = 1.60;
let imc;

imc = peso / (altura * altura);
anoNascimento = 2023 - idade;

console.log(imc);
console.log(anoNascimento);
console.log(pessoa, 'tem', idade, 'anos', ' seu imc é de', imc, 'e sua data de nascimento é' , anoNascimento);
console.log(`tem ${altura} de altura e seu imc é de ${imc}`);


let contador = 1;
contador++;
contador++;
console.log(contador);

let contando = 2;
console.log(contando++);
console.log(contando--);