// Função para formatar uma data
function formatarData(dia, mes, ano) {
  let diaFormatado = dia.toString().padStart(2, '0');
  let mesFormatado = mes.toString().padStart(2, '0');
  return `${diaFormatado}/${mesFormatado}/${ano}`;
}

// Exemplo de datas
let dia1 = 1, mes1 = 1, ano1 = 2022;
let dia2 = 12, mes2 = 11, ano2 = 2021;
let dia3 = 5, mes3 = 6, ano3 = 2020;

// Formatando as datas
let dataFormatada1 = formatarData(dia1, mes1, ano1);
let dataFormatada2 = formatarData(dia2, mes2, ano2);
let dataFormatada3 = formatarData(dia3, mes3, ano3);

console.log("Data 1:", dataFormatada1); // "01/01/2022"
console.log("Data 2:", dataFormatada2); // "12/11/2021"
console.log("Data 3:", dataFormatada3); // "05/06/2020"
