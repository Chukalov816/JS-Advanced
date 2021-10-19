function solve(input) {
    let sorted = input.sort((a, b) => a.localeCompare(b));
    let number = 1;
    for (const line of sorted) {
        console.log(`${number}.${line}`);
        number++;
    }
}

solve(["John", "Bob", "Christina", "Ema"])