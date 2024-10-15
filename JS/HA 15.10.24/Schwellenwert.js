let arr = [10, 23, 35, 47, 52, 66, 71, 88, 90];
let threshold = 50;

// Lösung mit einer for-Schleife
function countGreaterThanFor(arr, threshold) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > threshold) {
            count++;
        }
    }
    return count;
}

console.log(countGreaterThanFor(arr, threshold));

// Lösung mit einer while-Schleife
function countGreaterThanWhile(arr, threshold) {
    let count = 0;
    let i = 0;
    while (i < arr.length) {
        if (arr[i] > threshold) {
            count++;
        }
        i++;
    }
    return count;
}

console.log(countGreaterThanWhile(arr, threshold));


// Lösung mit einer do-while-Schleife
function countGreaterThanDoWhile(arr, threshold) {
    let count = 0;
    let i = 0;
    do {
        if (arr[i] > threshold) {
            count++;
        }
        i++;
    } while (i < arr.length);
    
    return count;
}

console.log(countGreaterThanDoWhile(arr, threshold));
