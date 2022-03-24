
//break para um único elemento
let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false}
];

let contador = 0;
let encontrouHabilitado = false;

while ( contador < funcionarios.length ) {

    let funcionario = funcionarios[contador];

    if( funcionario.habilitado == true ){
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break; //Ele sai do bloco while
    }

    contador++;
}

if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}
// Funcionário habilitado encontrado: Renan


//continue para mais elementos
let alunos = [
    {id: 1, nome: "Bruna", media: 8},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José", media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 5, nome: "Rafael", media: 10},
];

let contador2 = 0;

while ( contador2 < alunos.length ) {

    let aluno = alunos[contador2];

    contador2++;

    if ( aluno.media < 6 ) {
        continue; //Ele interrompe bloco while -> ele volta 
    }

    console.log("Id: " + aluno.id);
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.media);
    console.log("\n");

}

// Id: 1
// Nome: Bruna
// Média: 8


// Id: 2
// Nome: Laura
// Média: 7


// Id: 5
// Nome: Rafael
// Média: 10