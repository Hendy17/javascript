// Função para somar um número variável de argumentos
function somar(...numeros) {
    return numeros.reduce((acc, num) => acc + num, 0);
  }
  
  // Exemplo de uso da função
  console.log(somar(1, 2, 3));        // 6
  console.log(somar(4, 5, 6, 7, 8));  // 30
  console.log(somar(10));             // 10
  console.log(somar());               // 0
  