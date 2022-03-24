//Criar data
//Instanciar o objeto do tipo Date
//Manipular
//Date é um objeto que nos permite trabalhar com data e hora no JS

//Sem parâmetro: Data atual
const hoje = new Date(); //Criamos uma instância do objeto do tipo Date
console.log(hoje);
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
//Timestamp é uma representação numérica de uma data UTC
