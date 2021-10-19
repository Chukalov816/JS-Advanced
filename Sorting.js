function solve(input) {
    let sorted = input.sort((a, b) => b - a);
    let result = [];
    while (sorted.length > 1) {
        let biggest = sorted.shift();
        let smallest = sorted.pop();

        result.push(smallest);
        result.push(biggest);
    }
    if (sorted.length == 1) {
        result.push(sorted[0])
    }
    return result;
}

solve([1, 65, 0, 52, 48, 63, 31, -3, -3, 18, 56, 11])