function digitSum(number) {
    let sum = 0;

    do {
        sum += number % 10;

        number = Math.floor(number / 10);
    } while (number > 0);

    return sum;
}

console.log(digitSum(248));