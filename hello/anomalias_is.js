var x = "";
var y = 0;
//Valoress vazio e 0 são iguais a false, e é convertido para true se for 1 ex: 1 == true vai ser true
if (x == y) {
    console.log("X e Y são iguais"); //Dará este resultado -> a string e o numérico são convertidos para false, logo false == false
}
else {
    console.log("X e Y são diferentes");
}

//Resolvemos isso utilizando igualdade estrita -> === que checa pelo valor e pelo tipo