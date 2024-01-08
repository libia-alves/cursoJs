// Aula para recordar funções


// o nome seria um parametro
function saudacao(nome){
 
    return (`Bom dia ${nome}`);
}

const variavel =  saudacao('Luiz');
console.log(variavel);


function soma(x, y){
    const resultado = x + y;
    console.log('recordando funções');
    return resultado;
 
}

console.log(soma(2, 2));
console.log(soma(3, 2));

soma(2, 2);

//  recordar os varios tipos de se criar funções 

const raiz = function (n) {
    return n ** 0.5 ;
};

console.log(raiz(9));


//ESTA FUNÇÃO 

const pessoa1 = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 25,

    fala() {
        console.log(` Esta é a minha idae atual ${this.idade}`);
    },

    incrementaIdade(){
        ++this.idade;
    }

};

pessoa1.fala;
pessoa1.incrementaIdade;



console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

//TEM O MESMO EFEITO QUE ESTA 

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
const pessoa2 = criaPessoa('Luiz', 'Otavio', 25);

// funcionara tambem

