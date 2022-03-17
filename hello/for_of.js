// A estrutura de repetição for .. of permite iterar coleções, onde podemos manipular os valores iterados no loop.

let emails_alunos = [
    "danilo@email.com",
    "jessica@email.com",
    "luana@email.com",
    "gustavo@email.com"
];

for ( let email of emails_alunos ) { 
//Os valores do array serão percorridos e em cada iteração um valor será atribuido à variável email
//Sendo assim, não precisa de um contador

    console.log("Email: " + email);

}

// Email: danilo@email.com
// Email: jessica@email.com
// Email: luana@email.com
// Email: gustavo@email.com




//Exemplo 2
let clientes_array = [
    {id: 1, nome: "Mônica", telefone: "99999-6565"},
    {id: 2, nome: "Tânia", telefone: "99999-0778"},
    {id: 3, nome: "Carlos", telefone: "99999-0551"}
];

for ( let cliente of clientes_array ) {

    let nome = cliente.nome;
    let telefone = cliente.telefone;

    console.log("Nome: " + nome + " - Telefone: " + telefone);
//Ou posso simplesmente colocar no log diretamente sem criar variáveis extras
}
// Nome: Mônica - Telefone: 99999-6565
// Nome: Tânia - Telefone: 99999-0778
// Nome: Carlos - Telefone: 99999-0551

//Exemplo3
let produtos_array = [
    { id: 1, nome: "mouse", preco: 50 },
    { id: 2, nome: "teclado", preco: 90 },
    { id: 3, nome: "monitor", preco: 350 },
    { id: 4, nome: "nobreak", preco: 600 },
];

let percentual_desconto = 10;

for ( let produto of produtos_array ) {

    let nome = produto.nome;
    let preco = produto.preco;

    let valor_desconto = (preco * percentual_desconto) / 100;
    let novo_preco = preco - valor_desconto;

    console.log("Novo valor do produto " + nome + ": R$" + novo_preco + ",00");

}

// Novo valor do produto mouse: R$45,00
// Novo valor do produto teclado: R$81,00
// Novo valor do produto monitor: R$315,00
// Novo valor do produto nobreak: R$540,00


//Exemplo prático
//No exemplo utilizamos a estrutura for .. of para percorrer uma coleção de notas. Ao percorrer essa coleção somamos todas as notas para obter a média. E com ajuda da estrutura condicional imprimimos o status de acordo com o valor da média.

let notas_trimestrais = [9, 7, 6, 7];

let total_notas = notas_trimestrais.length;
let soma_notas = 0;

for ( let nota of notas_trimestrais ) {
console.log(nota + " TESTE AQUI MANO"); //A cada passo o let nota recebe os vavlores do array em ordem
    soma_notas = soma_notas + nota;

}

let media = soma_notas / total_notas;

console.log("Média: " + media);

if ( media >= 7 ) {

    console.log("Aprovado");

} else if ( media >= 6 && media < 7 ) {

    console.log("Recuperação");

} else {

    console.log("Reprovado");

}

// Média: 7.25
// Aprovado