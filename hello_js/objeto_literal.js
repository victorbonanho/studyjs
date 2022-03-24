//Exemplo de um objeto literal
var produto = {
    id: 9,
    nome: "Cafeteira Elétrica",
    valor: 99.00
};
//Organiza os dadoscom propriedades -> chave/valor

//Organização mesmo com propriedades de nome igual
var produto = {
    id: 9,
    nome: "Cafeteira Elétrica",
    valor: 99.00
};

//Acessando os dados de um objeto
console.log(produto.id); // 9
console.log(produto.nome); // Cafeteira Elétrica
console.log(produto.valor); // 99.00
//Se tentar acessar uma propriedade que não existe === undefined

var cliente = {
    id: 40,
    nome: "Jorge Mendes",
    telefone: "(21) 9999-9999"
};

console.log(cliente.id); // 40
console.log(cliente.nome); // Jorge Mendes

//Um objeto deve conter somente dados de um MESMO DOMÍNIO/CONTEXO.

//Exemplo1
var usuario = {
    id: 2,
    nome: "Rafael Nogueira Lemos",
    idade: 17
};

var atendeAClassificacaoEtaria = usuario.idade >= 18

if ( atendeAClassificacaoEtaria === true ) {

    console.log("O usuário ainda pode assistir o conteúdo");

} else {

    console.log("O usuário ainda não pode assistir o conteúdo");

}

//Exemplo2 + toFixed(2)
var aluno_academia = {
    id: 10,
    nome: "Gerson Silva Campos",
    altura: 1.75,
    peso: 69
};

var nome_aluno = aluno_academia.nome;
var peso_aluno = aluno_academia.peso;
var altura_aluno = aluno_academia.altura;

var imc_aluno = peso_aluno / ((altura_aluno * altura_aluno)).toFixed(2);

console.log("O IMC do aluno é de: " + imc_aluno);

if ( imc_aluno < 18.5 ) {
    console.log("O aluno " + nome_aluno + " está abaixo do peso");
} else if( imc_aluno >= 18.5 && imc_aluno <= 24.99) {
    console.log("O aluno " + nome_aluno + " está com o peso normal");
} else {
    console.log("O aluno " + nome_aluno + " está acima do peso");
}
// O IMC do aluno é de: 22.53061224489796 -> com toFixed(2) === 22.53
// O aluno Gerson Silva Campos está com o peso normal