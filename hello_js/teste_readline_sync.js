import entradaDados from 'readline-sync'; //Entra dados é o apelido de sua escolha e readiline-sync é o nome do plugin
const nome = entradaDados.question('Digite seu nome: '); 
//Funão question, que já é inclusa no readline-sync, e é ela quem implementa o imput 
//Question recebe como parâmentro uma mensagem 

console.log('Olá, '+ nome);