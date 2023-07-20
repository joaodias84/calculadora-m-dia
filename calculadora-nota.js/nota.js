var nota1 =parseInt(prompt("digite a sua nota1: "));
var nota2 =parseInt(prompt("digite  sua nota2: "));
var soma = nota1+nota2;
var media = soma/2;
console.log ("soma:",soma);
console.log ("media:",soma);
if(media >=7){
  console.log("aprovado!")}
  else if(media >=5){
       console.log(" recuperação!")
  } else {
      console.log("reprovado!")
  }