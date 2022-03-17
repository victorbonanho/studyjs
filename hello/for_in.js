//A estrutura de repetição for .. in permite percorrer todas as propriedades de um objeto.
/*
let aluno = { nome: "Marcos", email: "marcos@email.com", idade: 25 };

for ( let dados in aluno ) {
    console.log(dados); //dados é o nome, email e idade que é a propriedade do objeto no loop
    console.log(aluno[dados]);
}

//É POSSÍVEL REPETIR A VARIÁVEL POIS AQUELA FOI DECLARADA DENTRO DA ESTRUTURA FOR.
let dados = 1;
console.log(dados);

// Marcos
// marcos@email.com
// 25
*/




/*
let carro = { nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020 };

let percentual_desconto = 5;

for ( let propriedade in carro ) {
    console.log(propriedade == "preco");

    if ( propriedade == "preco" ) {

        let preco = propriedade;

        let desconto = ( carro[preco] * percentual_desconto ) / 100;

        let novo_preco = carro[preco] - desconto;

        console.log("novo preço: R$" + novo_preco + ",00");

    } else {

        console.log(propriedade + ": " + carro[propriedade]);

    }

}
// nome: Argo
// marca: Fiat
// Novo preço: R$47500,00
// ano: 2020

//Ou seja o for .. in vavi percorrer todo o objeto
*/

//Exemplo prático
let produtos = [
    { id: 1, nome: "pizza", preco: 50 },
    { id: 2, nome: "macarronada", preco: 25 },
    { id: 3, nome: "lasanha", preco: 45 },
    { id: 4, nome: "nhoque", preco: 30 }
];

let desconto = 5;

for ( let contador = 0; contador < produtos.length; contador++ ){

    let produto = produtos[contador];

    for ( let propriedade in produto ){

        if ( propriedade == "preco" ) {

            let preco = propriedade; //Desnecessário essa propriedade ao meu ver

            let novo_preco = produto[preco] - desconto;

            console.log("preço atualizado: R$" + novo_preco + ",00");

        } else {

            console.log(propriedade + ": " + produto[propriedade]);
        }

    }

    console.log("\n");
}

// id: 1
// nome: pizza
// preço atualizado: R$45,00


// id: 2
// nome: macarronada
// preço atualizado: R$20,00


// id: 3
// nome: lasanha
// preço atualizado: R$40,00


// id: 4
// nome: nhoque
// preço atualizado: R$25,00
