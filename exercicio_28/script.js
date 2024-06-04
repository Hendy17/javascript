function calculateAverage(numbers) {
    if (numbers.length === 0)
        return 0;

    let sum = 0;
    for (let number of numbers) {
        sum += numbers;
    }

let average = sum / numbers.length;
return average;

}

console.log(calculateAverage([1,2,3,4,5]));
console.log(calculateAverage([10,20,30]));
console.log(calculateAverage([]));

