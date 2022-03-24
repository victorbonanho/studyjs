//Não tem else

//If convencional
var aprovado = true;

if (aprovado) {
    console.log("Parabéns");
}


//Curto circuito
var aprovado = true;

aprovado && console.log("Parabéns"); //aprovado == condição booleana e depois do && executa se for true

//Exemplo prático
//Declaração da constante nome
const nome = 'Camila';

//Aqui é verificado se o nome possui ao menos um caractere
//Retorna true se possuir e false caso contrário
const nomeValido = nome.length > 0 && true;

//Imprime o nome no console se for diferente de vazio
nomeValido && console.log(nome); //if nomeValido for true retorna o log nome