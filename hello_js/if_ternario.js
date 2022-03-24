//Estrutura if/else cconvencional
var status2 = "";
if ( nota > 7 ) {
status2 = "Aprovado";
}
else {
 status2 = "Reprovado";
}

//If ternário
//Exemplo 1
var status = (nota > 7) ? "Aprovado" : "Reprovado";

//Exemplo2
var mensagem = (mes == 11 || mes == 12) ? "Promoção" : "Preço normal";
//? == if
//: == else

//Define a variavel com o dia da semana (0 = Domingo, 1 = Segunda...)
var dia_semana = 5;

//Verifica a condição e define o resultado na variável 'status_loja' 
var status_loja = (dia_semana == 0 || dia_semana == 6) ? "Funcionamos apenas de Segunda à Sexta" : "Loja aberta";
//0 ==sábado e 6 == domingo
//Imprime o resultado no console
console.log(status_loja);