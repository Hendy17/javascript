let contador = 1;

while (contador <= 5) {
    console.log("O valor de contador é: " + contador);
    contador++;
}

let numero = 0;

while (numero !== 10) {
    numero = parseInt(prompt("Digite um número (Digite 10 para parar):"), 10);
    console.log("Você digitou: " + numero);
}

console.log("Você digitou 10, o loop terminou.");
