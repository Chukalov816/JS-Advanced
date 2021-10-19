function solve(inputArr) {
    let input = inputArr.map(x => x.split(' ').map(Number));
    let firstSum = 0;
    let secondSum = 0;
    for (let i = 0; i < input.length; i++) {
        firstSum += input[i][i];
        secondSum += input[i][input.length - 1 - i];
    }
    if (firstSum !== secondSum) {
        input.forEach(element => {
            console.log(element.join(' '));
        });
    } else {
        for (let q = 0; q < input.length; q++) {
            for (let r = 0; r < input.length; r++) {
                if (q != r && q != input.length-1-r) {
                    input[q][r] = firstSum;
                }

            }

        }
        input.forEach(element => {
            console.log(element.join(' '));
        });
    }
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)