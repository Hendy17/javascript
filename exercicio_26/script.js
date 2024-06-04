function faixaEtaria(idade) {
   if (idade < 12) {
       return "Criança";
   } else if (idade >= 12 && idade <= 24) {
       return "Jovem";
   } else {
       return "Adulto";
   }
}

let crianca = faixaEtaria(10);  
let adulto = faixaEtaria(30);   

console.log(crianca);  
console.log(adulto);   
