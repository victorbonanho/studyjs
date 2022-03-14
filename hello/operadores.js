//OPERADORES ARITMÉTICOS
let vagas = 2 + 5; //Adição resultado: 7
let contratados = 7 - 2; //Subtração resultado: 5
let contribuicao = 2500 * 0.10; //resultado: 250
let parcela = 2500 / 2; // resultado: 1250
let resto1 = 15 % 4; //resto - operador módulo resultado: 3
let verificaSeEPar = 20 % 2 == 0;

function verificaJunta() {
    let juntar = "5" + "5"; // Concatena == 55
    console.log(juntar);
}
verificaJunta()
//Juntar strings com adição

console.log(5 + 20); // 25
console.log(5 + true); // 6
console.log(5 + null); // 5
console.log(true + true); // 2
console.log(true + null); // 1
console.log(null + null); // 0
console.log(null + false); // 0
console.log(5 + undefined); // NaN
console.log(null + undefined); // NaN

//Ordem de leitura do JS Primeiro os  operadores *,/ e % e depois + e -


//Incremento e decremento
var contador = 5;
contador++;
console.log(contador);// contador agora vale 6

contador--;
console.log(contador);// contador agora vale 5

var numero = 9;
console.log(++numero); //Resultado: 10


//OPERADORES RELACIONAIS
//Os operadores de comparação servem para comparar dois valores, retornando um booleano (true ou false).
//Os operadores de comparação são: ==, !=, <, >, <=, >=, === e !==.

console.log( 11 != 21 ); // vai imprimir true
console.log( 100 != 100); // vai imprimir false
console.log(  “20” == 20  ); // true
console.log(  true == 1 ) ; // true

//Igualdade e desigualdade restrita
"21" === 21 // o resultado será false
1 === true // o resultado será false
"21" !== 21 // o resultado será true
1 !== true // o resultado será true


//OPERADORES LÓGICOS
true && false // false
false || false // false
!true // false

1 == '1' || "a" == "a" // true
35 === '35' && 1 == 10 // false
!( 'a' == 1) // true

//A ordem que o JavaScript vai interpretar uma operação lógica será da esquerda para direita


