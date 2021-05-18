/* Aula JS - NODEJS - 17/05/2021 */
var fs = require("fs");  // carrega biblioteca File System do NODE

var nome = "Marcio";  // string
var idade = 53;  // number integer
var peso = 91.5  // number float
var andando = false;  //  boolean

console.log("Olá Turma !!!");
console.log("Olá " + nome);

function oi() {
    console.log("Oi tudo bem ?")
}
  
console.log("Antes da função");

// função async (assincrona) - roda não necessariamente na mesma ordem de linhas que foi escrita
fs.writeFile("turma.txt", "Olá " + nome, oi);

console.log("Depois da função");

// alert("oi");
