function solve(matrix) {
    let magicSum = Number.MIN_SAFE_INTEGER;
    let isMagic = true;
    for (let j = 0; j < matrix.length; j++) {
        let sum = matrix[j].reduce((x, y) => x + y, 0);
       if (magicSum===Number.MIN_SAFE_INTEGER) {
           magicSum=sum;
       }
       if (sum!== magicSum) {
           isMagic= false;
       }

    }
    for (let i = 0; i < matrix[0].length; i++) {
        let sum = 0;
        for (let j = 0; j < matrix.length; j++) {
            let el = matrix[j][i];
            sum += el;
        }
        if (sum !== magicSum) {
            isMagic= false;
        }
    }
    return isMagic;
}

solve([[4, 5, 6],
[6, 5, 4],
[5, 2, 5]]
)