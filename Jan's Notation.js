function solve(input) {
    let arr = [];
    isNotEnough = false;
    for (let i = 0; i < input.length; i++) {
        if (!isNaN(input[i])) {
            arr.push(input[i]);
        } else {
            if (arr.length < 2) {
                isNotEnough = true;
                break;
            }
            if (input[i] === '+') {
                let currentSum = arr[arr.length - 2] + arr[arr.length - 1];
                arr.splice(arr.length - 2, 2, currentSum)
            }
            if (input[i] === '-') {
                let currentDivide = arr[arr.length - 2] - arr[arr.length - 1];
                arr.splice(arr.length - 2, 2, currentDivide)
            }
            if (input[i] === '*') {
                let currentMultiply = arr[arr.length - 2] * arr[arr.length - 1];
                arr.splice(arr.length - 2, 2, currentMultiply)
            }
            if (input[i] === '/') {
                let currentMinus = arr[arr.length - 2] / arr[arr.length - 1];
                arr.splice(arr.length - 2, 2, currentMinus)
            }
        }
    }
    if (isNotEnough) {
        console.log('Error: not enough operands!');
    } else {
        if (arr.length == 1) {
            console.log(arr.join(''));
        } else if (arr.length > 1) {
            console.log("Error: too many operands!");
        }
    }
}

solve([5,
    3,
    5,
    6,
    8,
    12,
    25,


    '*',
    '-']
)