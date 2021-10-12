function solve(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        if (k >= i) {
            let current = result.slice(0, i);
            current = current.reduce((x, y) => x + y);

            result.push(current);

        } else {
            let current = result.slice(i - k, i);
            current = current.reduce((x, y) => x + y);

            result.push(current);
        }

    }
    return result;
}

solve(9, 5)