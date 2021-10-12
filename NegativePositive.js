function solve(input){
    let result=[];
for (const line of input) {
    let number=Number(line);
    if (number>=0) {
        result.push(number)
    }else{
        result.unshift(number)
    }
}console.log(result.join('\n'));
}

solve([7, -2, 8, 9])