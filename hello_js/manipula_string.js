//Quebra linha
let texto = "asasdasdasd \n após";
console.log(texto);

//Template string
let nome = 'Victor';
let tecnologia = `JavaScript`;
let frase = `O programador ${nome} domina ${tecnologia}.`;
console.log(frase);

//Exemplo prático
let linguagem = "JavaScript";
let stack = "mobile";

switch (stack) {
  case "back-end":
    console.log(`Estude Node.js para programação ${ stack } em ${ linguagem }`);
    break;

  case "front-end":
    console.log(`Estude React para programação ${ stack } em ${ linguagem }`);
    break;

  case "mobile":
    console.log(`Estude React Native para programação ${ stack } em ${ linguagem }`);
    break;

  default:
    console.log(`Tecnologia indisponível para ${ stack }`);
    break;
}

//Tamanho de string
let cep = "23010-090";
if ( cep.length != 9 ){
    console.log("O CEP deve ter 9 caracteres");
}

//Letras maiúsculas e minúsculas
let programador_1 = "Flávia";
let programador_2 = "Rogério";
console.log(programador_1.toUpperCase()); // FLÁVIA
console.log(programador_2.toLowerCase()); // rogério

//Remover espaços em branco
let nome1 = "   Diego     ";
let resultado = nome1.trim();
console.log(resultado); // Diego

//Preenchendo strings (padStart())
let label_nome = "Nome:";
let valor_nome = "Jorge Luiz";

let label_profissao = "Profissão:";
let valor_profissao = "Professor";

let label_endereco = "Endereço:";
let valor_endereco = "Rua Cruzeiro do Sul";

console.log( label_nome.padEnd(25, '.') + valor_nome );
console.log( label_profissao.padEnd(25, '.') + valor_profissao );
console.log( label_endereco.padEnd(25, '.') + valor_endereco );
// Nome:....................Jorge Luiz
// Profissão:...............Professor
// Endereço:................Rua Cruzeiro do Sul

//Substituindo partes de string
let texto1 = "A linguagem PHP é muito poderosa";
let resultado1 = texto1.replace("PHP", "JavaScript");
console.log(resultado1); // A linguagem JavaScript é muito poderosa

//Retornando partes de string
let frase2 = "Ana é especialista em JavaScript";
let substring_1 = frase2.substring(6, 12); //Casa 6 e extrai 12 caracteres
console.log(substring_1); // especialista

//Procurando substring dentro de string
let frase3 = "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.";
let posicao = frase.indexOf("sonho");
console.log(posicao); // 14

//Separando strings em partes
let cores_string = "vermelho,azul,branco,cinza,roxo";
let cores_array = cores_string.split(",");
console.log(cores_array); // (5) ["vermelho", "azul", "branco", "cinza", "roxo"]
