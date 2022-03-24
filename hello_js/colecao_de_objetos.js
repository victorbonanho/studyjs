//Coleção, mas de ARRAY
var alunos = [
    "Andréia Gomes",
    "Letícia Castro",
    "Lucas Silva",
    "Rogério Mendonça",
    "Tomás Mendes"
];

console.log(alunos[1]); // Letícia Castro

console.log(alunos[2]); // Lucas Silva

var notas_bimestre = [
    10,
    8,
    7,
    8
];

console.log(notas_bimestre[0]); // 10

console.log(notas_bimestre[3]); // 8


//Coleção de objetos
//Multiplos objetos agrupados reprentando um mesmo contexto, temos uma coleção de objetos

var colecao_disciplinas = [
    { id: 1, nome: "Português",     carga_horaria: 240 }, // índice 0
    { id: 2, nome: "Matemática",    carga_horaria: 220 }, // índice 1
    { id: 3, nome: "História",      carga_horaria: 160 }, // índice 2
    { id: 4, nome: "Geografia",     carga_horaria: 140 }, // índice 3
    { id: 5, nome: "Química",       carga_horaria: 160 }, // índice 4
    { id: 6, nome: "Física",        carga_horaria: 150 }, // índice 5
    { id: 7, nome: "Inglês",        carga_horaria: 120 }  // índice 6
];

console.log( colecao_disciplinas[0].id ); // 1

console.log( colecao_disciplinas[4].nome ); // Química

console.log( colecao_disciplinas[6].carga_horaria ); // 120
//Se tentar acessar um elemento que não existe dentro da coleção === undefined
//Se tentar acessar uma propriedade de um objeto que não existe === ERRO


//Exemplo 
var colecao_series_programacao = [
    { nome: "Breaking Bad",           horario: "21h",     sinopse: "Um professor de química se transforma quando descobre ter um câncer terminal. Daí ele usa suas habilidades a favor do crime"},
    { nome: "Fargo",                  horario: "22h",     sinopse: "Uma sequência de crimes saem errado e são investigados por uma detetive."},
    { nome: "Lost",                   horario: "20h",     sinopse: "Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver." },
    { nome: "Prison Break",           horario: "23h",     sinopse: "Um homem cria um plano para tirar o irmão sentenciado à morte por um suposto assassinato do vice-presidente dos EUA"},
    { nome: "Black Mirror",           horario: "23h",     sinopse: "Contos de ficção científica que refletem o lado negro da tecnologia, mostrando que nem toda novidade traz só benefícios." },
    { nome: "Pessoa de interesse ",   horario: "20h",     sinopse: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultrassecreto."},
    { nome: "Dark",                   horario: "22h",     sinopse: "O desaparecimento de crianças na cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos."}
];

var data_atual = new Date(); // Guarda o valor da data atual em uma variável        

var dia_semana = data_atual.getDay(); //getDay() retorna o dia da semana com valores de 0 a 6. Usamos o valor retornado para acessar um objeto da coleção

var serie_do_dia = colecao_series_programacao[dia_semana];

//Guardando os dados do objeto serie_do_dia em variáveis
var nome_serie = serie_do_dia.nome;
var horario_serie = serie_do_dia.horario;
var sinopse_serie = serie_do_dia.sinopse;

//Exibindo a série do dia
console.log("Hoje é dia de " + nome_serie + " às " + horario_serie);
console.log("A seguir uma visão geral da série: " + sinopse_serie);


//Exemplo 2
var curiosidades_chuck_norris = [
    { titulo: "Cuidados com a higiene bucal",           conteudo: "Chuck Norris usa arame farpado como fio dental."},
    { titulo: "Fórmula para maratonar séries",          conteudo: "Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos."},
    { titulo: "Suicida que não morre",                  conteudo: "Chuck Norris foi homem-bomba 34 vezes."},
    { titulo: "Olhos que tudo veem",                    conteudo: "Chuck Norris já viu o homem invisível."},
    { titulo: "Manipulando o tempo",                    conteudo: "Chuck Norris não usa relógio. Ele decide que horas são."},
    { titulo: "Praticando esportes radicais",           conteudo: "Chuck Norris faz bungee jump sem corda."},
    { titulo: "Não vale chorar",                        conteudo: "Chuck Norris faz cebolas chorarem."},
    { titulo: "Tempero de fogo",                        conteudo: "Chuck Norris usa pólvora como tempero."},
    { titulo: "Extinção dos dinossauros",               conteudo: "Chuck Norris encarou os dinossauros uma vez, apenas uma."},
    { titulo: "Contando sem parar",                     conteudo: "Chuck Norris contou até o infinito. Duas vezes."}
];

var tamanho_colecao = curiosidades_chuck_norris.length;

var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);
//Math.random() retorna um número aleatório entre 0 e < 1 -> 1 não é incluído
//Math.floor() arredonda um número para baixo para o número inteiro mais próximo que vai ser entre 0 e 9
//Mas agora Math.random() vai retornar um número que seja maior ou igual a zero e também menor que 1


var curiosidade_escolhida = curiosidades_chuck_norris[numero_sorteado];
//Armazenamos na variável curiosidade_escolhida um objeto da coleção, que contém fatos do Chuck

var titulo_curiosidade = curiosidade_escolhida.titulo;
var conteudo_curiosidade = curiosidade_escolhida.conteudo;

console.log("CURIOSIDADE SOBRE CHUCK NORRIS");
console.log("Título: " + titulo_curiosidade);
console.log("Conteúdo: " + conteudo_curiosidade);