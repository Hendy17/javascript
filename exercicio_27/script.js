function isPalindrome(palavra) {
    // Converte a palavra para minúsculas para garantir que a comparação seja case-insensitive
    palavra = palavra.toLowerCase();
    
    // Inverte a palavra
    let palavraInvertida = palavra.split('').reverse().join('');
    
    // Compara a palavra original com a palavra invertida
    return palavra === palavraInvertida;
}

// Exemplos de uso
console.log(isPalindrome('radar')); // Deve retornar true
console.log(isPalindrome('hello')); // Deve retornar false
