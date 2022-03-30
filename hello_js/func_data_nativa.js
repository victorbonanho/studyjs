//Criar data
//Instanciar o objeto do tipo Date
//Manipular
//Date é um objeto que nos permite trabalhar com data e hora no JS

//Sem parâmetro: Data atual
const hoje1 = new Date(); //Criamos uma instância do objeto do tipo Date
console.log(hoje1);
//ex: 2020-11-09T13:58:44.603Z

// Com parâmetro: String com a data
const exemplo1 = new Date(  "2020-02-28"  );
const exemplo2 = new Date(  "2020-02-27 10:35:00"  );
console.log(exemplo1);
console.log(exemplo2);

//  Com parâmetro: Um número para ano, mês, dia, hora, minuto, segundo e milissegundo
const exemplo3 = new Date(  2020, 2, 28, 13, 20, 2, 15  );
console.log(exemplo3);

//UTC -> Tempo Universal Coordenado. Uma referência para se calcular os fusos horários.
//Timestamp é uma representação numérica de uma data UTC --> podemos verificar quanto tempo passou entre uma data e outra

const hoje = new Date();

// Imprimindo uma string com a data e a hora local
console.log( hoje.toLocaleString() );

// Imprimindo uma string com a data armazenada
console.log( hoje.toString() );

// Imprimindo uma string com a data universal (UTC)
console.log( hoje.toUTCString() );

// Imprimindo timestamp
console.log( hoje.valueOf() );
const dataAtual = new Date();
const dataPostagem = new Date('2020-11-11T00:00');

// Pegando o timestamp das datas
const timeAtual = dataAtual.getTime();
const timePostagem = dataPostagem.getTime();

// Verifica a diferença em milissegundos
const diferenca = timeAtual - timePostagem;

// Convertendo em horas
const segundos = diferenca / 1000;
const minutos = segundos / 60;
const horas = minutos / 60;

// Exibindo a diferença
console.log(horas);

//O objeto do tipo Date possui funções nativas que são utilizadas para retornar um valor referente a data. Essas funções são chamadas de métodos
//Getters --> Métodos do objeto Date --> Valores do tipo Number
const dataAtual1 = new Date();
console.log( dataAtual1.getFullYear() );
console.log( dataAtual1.getMonth() );
console.log( dataAtual1.getDate() );
console.log( dataAtual1.getHours() );
console.log( dataAtual1.getMinutes() );
console.log( dataAtual1.getSeconds() );
console.log( dataAtual1.getMilliseconds() );
console.log( dataAtual1.getDay() );
//Métodos para retornar a data em UTC
console.log( dataAtual1.getUTCFullYear() );
console.log( dataAtual1.getUTCMonth() );
console.log( dataAtual1.getUTCDate() );
console.log( dataAtual1.getUTCHours() );
console.log( dataAtual1.getUTCMinutes() );
console.log( dataAtual1.getUTCSeconds() );
console.log( dataAtual1.getUTCMilliseconds() );
console.log( dataAtual1.getUTCDay() );

//Retornar um timestamp e o fuso horário
console.log( dataAtual1.getTime() ); //Retorna o timestamp da data
console.log( dataAtual1.getTimezoneOffset() ); //Representa 180 minutos de diferença de fuso horário do computador para UTC
console.log( dataAtual1.valueOf() ); //Valor primitivo do objeto Date --> É um timestamp

//Getters de Conversão --> Métodos do objetto Date
//Retornando uma string
const personalizandoData =  {
    weekday: 'long', // segunda-feira
    weekday: 'short', // seg.
    weekday: 'narrow', // S

    month: "numeric", // 2
    month: "2-digit", // 02
    month: "long", // Março
    month: "short", // Mar
    month: "narrow", // M

    year: 'numeric', // 2020
    year: '2-digit', // 20

    day: 'numeric', // 1
    day: '2-digit', // 01
  };
  console.log(dataAtual.toLocaleDateString('pt-BR', personalizandoData));

  const personalizandoTempo = {
    hour: 'numeric', // 1
    hour: '2-digit', // 01,

    minute: 'numeric', // 1
    minute: '2-digit', // 01,

    second: 'numeric', // 1
    second: '2-digit', // 01,
  }
  console.log( dataAtual.toLocaleTimeString('pt-BR', personalizandoTempo) );

  const personalizandoDataTempo = {
    dateStyle: "full", // segunda-feira, 9 de novembro de 2020
    dateStyle: "long", // 9 de novembro de 2020
    dateStyle: "medium", // 9 de nov. de 2020
    dateStyle: "short", // 09/11/2020

    timeStyle: "full", // 01:05:09 Horário Padrão de Brasília
    timeStyle: "long", // 01:05:09 BRT
    timeStyle: "medium", // 01:05:09
    timeStyle: "short", // 01:05
  }
  console.log( dataAtual.toLocaleString('pt-BR', personalizandoDataTempo) );


  //Setters
  //Depois que criamos uma data é possível alterar algumas informações sobre ela. Para isso utilizamos algumas funções nativas chamadas de métodos setters.
  //Os métodos setters são usados para alterar uma informação do objeto. Ela pode ser referente a data ou a hora.
  dataAtual.setFullYear(1998);
console.log( dataAtual );

dataAtual.setMonth(1);
console.log( dataAtual );

dataAtual.setDate(20);
console.log( dataAtual );

dataAtual.setHours(11);
console.log( dataAtual );

dataAtual.setMinutes(0);
console.log( dataAtual );

dataAtual.setSeconds(59);
console.log( dataAtual );

dataAtual.setMilliseconds(15);
console.log( dataAtual );
//Assim como os getters, para cada método setter acima existe um similar para setar o valor UTC. Veja na Figura 1 quais são esses métodos.
dataAtual.setUTCFullYear(1998);
dataAtual.setUTCMonth(5);
dataAtual.setUTCDate(20);
dataAtual.setUTCHours(11);
dataAtual.setUTCMinutes(0);
dataAtual.setUTCSeconds(59);
dataAtual.setUTCMilliseconds(15);
//O método .setTime() altera uma data através de um timestamp
const dataAtual2 = new Date("2020-11-09 01:05:09");
console.log(dataAtual2.toDateString());
//Impressão: Mon Nov 09 2020

dataAtual2.setTime(886302309000);
console.log(dataAtual2.toDateString());
//Impressão: Sun Feb 01 1998

//PRÁTICA
const dataUltimoAcesso = new Date('2020/11/11 17:00:00');
const dataAtual4 = new Date();

const hora = dataAtual4.getHours();

const timeUltimoAcesso = dataUltimoAcesso.getTime();
const timeAtual4 = dataAtual4.getTime();

const diferencaTime = timeAtual - timeUltimoAcesso;

const milissegundosHora = 1000 * 60 * 60;
const milissegundosDia = milissegundosHora * 24;

let msg = "";

if ( hora < 6 || hora >= 18 ) {
  msg = 'Boa noite\n';
} else if (hora >= 6  && hora < 12 ) {
  msg = 'Bom dia\n';
} else {
  msg = 'Boa tarde\n';
}

if ( diferencaTime > milissegundosDia ) {
  msg += "Você está ausente há dias!!!";
} else if (diferencaTime > milissegundosHora) {
  msg += "Você está ausente há horas!!!";
} else {
  msg += "Que bom que ainda está aqui!";
}

console.log(msg)


