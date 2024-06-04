function conutVowels(str) {
    if(typeof str !== 'string') {
        return "O argumento deve ser uma string";
    }

    const vowels = new Set(['a', 'b', 'c', 'd', 'e', 'i', 'o', 'u']);

    let vowelCount = 0;

    for (const char of str) {
        if (vowels.has(char)) {
            vowelCount++;
        }
    }

    return vowelCount;
}

const myString = "Exemplo de String com Voagis";
console.log(`O número de vogais na string "${myString}" é: ${conutVowels(myString)}`);