const arr = [1, 2, 3, 4, 5, 6, 7, 8]; // Array original
const semPares = []; // Array para armazenar apenas os números ímpares

// Loop para percorrer o array arr
for (let i = 0; i < arr.length; i++) {
    // Verifica se o número é ímpar
    if (arr[i] % 2 !== 0) {
        semPares.push(arr[i]); // Adiciona o número ímpar ao array semPares
    }
}

// Exibe o array semPares no console
console.log("Array sem números pares:", semPares);
