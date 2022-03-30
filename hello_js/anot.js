/*
Tipos: 
Number
Boolean
String
*/
//Variável
let valor = 4;
console.log(typeof valor);
//Imprime 'number'


//Array
let estados = ["RS","SP","BH"]
console.log(estados[0]); //Imprime RS

let estado2 = "MG"
estados[2] = estado2
console.log(estados[2]); //Agora é MG no lugar de BG

let vaga = ['Prog. PHP', 5, true]; //A boa prática é com objetos
console.log(vaga.length); //Vai imprimir 3

//Undefined
let nome; //let nome = '' -> dessa forma funciona
console.log(nome); //Vai imprimir undefined e gera um erro e erro NaN com numbers, mas basta atribuir um 0

//null
let nome2 = null; //Intencional e imprime null no log
//Utilizar caso não saiba o valor que irá colocar
//Se não atribuir dará erro se tentar acessar
console.log(nome2 + 1); //O valor de nome2 é convertido para 0

//Const
const aula = "JS"; //Esse valor não pode ser alterado por causa da const
//const aula2; //Dará erro pois a const pede um valor
//teste2

const dataAtual1 = new Date();
console.log( dataAtual1.getFullYear() );
console.log( dataAtual1.getMonth() );
console.log( dataAtual1.getDate() );
console.log( dataAtual1.getHours() );
console.log( dataAtual1.getMinutes() );
console.log( dataAtual1.getSeconds() );
console.log( dataAtual1.getMilliseconds() );
console.log( dataAtual1.getDay() );
