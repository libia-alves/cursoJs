const numero = prompt('Digite um numero');
numero = Number(numeroTitulo);

//NO DOCUMENT POSSUI METODOS PARA SELECIONAR
// getElementById  significa quero obter um elemento por id
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p> Raiz quadrada: ${numero ** 0.5}. <p/>`;
texto.innerHTML = `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML = `<p> Arredondado para baixo:  ${Math.floor(numero)} <p/>`;
texto.innerHTML = `<p> <p/>`

