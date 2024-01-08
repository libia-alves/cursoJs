/*  VALORES PRIMIIVOS E POR REFERENCIA 
 PRIMITIVOS (imutáveis) - string, number, boolean, undefined
 NULL (bigint, symbol)
 REFERENCIA (MUTÁVEL) - array, object, function 

 */

 let a = [1, 2 , 3];
 let b = [...a];
 let c = b;

 console.log(a, b);

 a.push(4);
 console.log(a, b);

 b.pop();
 console.log(a, b);
 
 a.push('Luiz');
 console.log(a, c);

