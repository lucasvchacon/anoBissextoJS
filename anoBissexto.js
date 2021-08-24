console.log("Calculadora de ano bissexto");
console.log("Escolha um Ano");
// Colocar aqui pro usuário ler o ano

const ano = 2021;

if((ano % 4) == 0 && (ano % 100  != 0 ) ){
     console.log("Ano Bissexto1");
}
if((ano % 100 == 0 ) && (ano % 400 == 0 ) ){
    console.log("Ano Bissexto2");
}
else{
    console.log("Não Bissexto");
}
