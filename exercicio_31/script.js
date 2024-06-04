function sumEvenNumbers(numbers) {
    if (!Array.isArray(numbers)) {
        return "O argumento deve ser um array";
    }

    let sum = 0;

    for (const num of numbers) {
        if (num % 2 === 0) {
            sum += num;
        }
    }

    return sum;
}

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`A soma dos números pares no array é; ${sumEvenNumbers(myNumbers)}`);
