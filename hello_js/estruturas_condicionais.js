if (idade >= 16) {
    console.log('Pode votar');
}
else {
    console.log('Não pode votar');
}


//Se o ddd for 11 sp e se for 21 rio
switch (ddd) {
    case 11:
        console.log("São Paulo");
        break;
    case 21:
        console.log("Rio de Janeiro")
        break;
}

//Exemplo com operador lógico
if ( idade > 17 && idade < 25 ) {
    console.log("Entre 18-24 anos");
}
else {
    console.log("Fora da faixa etária");
}

//Define a variavel com o dia da semana (0 = Domingo, 1 = Segunda...)
var dia_semana = 5;

//Verifica se o dia da semana é sábado ou domingo
if(dia_semana == 0 || dia_semana == 6) {
    //Imprime uma mensagem informando o horário de funcionamento
    console.log("Funcionamos apenas de Segunda à Sexta");
}
else
{
    //Do contrário, informa que a loja está aberta
    console.log("Loja aberta");
}