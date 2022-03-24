let contador = 0;

while ( contador < 5 ) {

            console.log(contador);
            contador++;

}
// 0
// 1
// 2
// 3
// 4

//Exemplo2
let numero = 3;
let contador2 = 0;

console.log("Tabuada de multiplicação - Nº " + numero);

while ( contador2 <= 10 ) {

    let resultado = numero * contador2;

    console.log( numero + " x " + contador2 + " = " + resultado );

    contador2++;

}
// Tabuada de multiplicação - Nº 3
// 3 x 0 = 0
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
// 3 x 6 = 18
// 3 x 7 = 21
// 3 x 8 = 24
// 3 x 9 = 27
// 3 x 10 = 30


let numero2 = 3;
let contador3 = 0;

console.log("Tabuada de multiplicação - Nº " + numero);

while ( contador3 <= 10 ) {

    let resultado = numero2 * contador3;

    console.log( numero2 + " x " + contador3 + " = " + resultado );

    contador3++;

}
// Tabuada de multiplicação - Nº 3
// 3 x 0 = 0
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
// 3 x 6 = 18
// 3 x 7 = 21
// 3 x 8 = 24
// 3 x 9 = 27
// 3 x 10 = 30

//taxa de juros
let capital_emprestado = 3000;
let taxa_juros = 0.02; // 2%

let contador4 = 1;
let parcelas_totais = 5;

while ( contador4 <= parcelas_totais ) {

    let numero_parcela = contador4;

    let juros_emprestimo = capital_emprestado * taxa_juros * numero_parcela;

    console.log("A taxa de juros no período de " + numero_parcela + " mes(es) é de R$" + juros_emprestimo + ",00");

    contador4++;
}
// A taxa de juros no período de 1 mes(es) é de R$60,00
// A taxa de juros no período de 2 mes(es) é de R$120,00
// A taxa de juros no período de 3 mes(es) é de R$180,00
// A taxa de juros no período de 4 mes(es) é de R$240,00
// A taxa de juros no período de 5 mes(es) é de R$300,00

//Com decremento
let contador5 = 10;

while ( contador5 > 0 ) {

    console.log( contador5 );
    contador5--;

}

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

//While percorrendo uma coleção de dados - array
let paises = ["Brasil", "Suíça", "França", "Japão"];

let contador6 = 0;

while ( contador6 < paises.length ) {

    console.log(paises[contador6]);
    contador6++;

}
// Brasil
// Suíça
// França
// Japão


//Verificar par e ímpar while + cond + array
let numeros = [10, 5, 7, 8, 9, 6, 12, 4];

let total_impares = 0;
let total_pares = 0;

let contador7 = 0;

while ( contador7 < numeros.length ) {

    if( numeros[contador7] % 2 == 0 ){
        total_pares++;
    } else {
        total_impares++;
    }

    contador7++;

}

console.log(" O total de números ímpares é: " + total_impares);
console.log(" O total de números pares é: " + total_pares);

// O total de números ímpares é: 3
// O total de números pares é: 5