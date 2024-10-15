function sumEvenNumbersDoWhile() {
    let sum = 0;
    let i = 1;

    do {
        if (i % 2 === 0) {
            sum += i;
        }
        i++;
    } while (i <= 100);

    return sum;
}

console.log(sumEvenNumbersDoWhile());