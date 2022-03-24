//Acessar inesistente retornará undefined

var cursos = [
    "Introdução ao Dart",
    "Variáveis em PHP",
    "Tipos de dados em Java",
    "Estruturas condicionais em Python",
    "Funções em JavaScript"
];

console.log(cursos[0]); // Introdução ao Dart
console.log(cursos[1]); // Variáveis em PHP
console.log(cursos[2]); // Tipos de dados em Java
console.log(cursos[3]); // Estruturas condicionais em Python
console.log(cursos[4]); // Funções em JavaScript

//Exemplo prático
var notas_bimestre = [
    7, 6, 8, 5
];

var total_notas = 4;

var soma_notas = notas_bimestre[0] + notas_bimestre[1] + notas_bimestre[2] + notas_bimestre[3];

var media_aluno = soma_notas / total_notas;

console.log("Média do aluno: " + media_aluno); // Média do aluno: 6.5