function solve(input){
    let biggestNumber=Number.NEGATIVE_INFINITY;
for (let line of input) {
    if (line.length>0) {
        line=line.sort((a,b)=>b-a);
    let currentBiggest=line[0];
    biggestNumber=Math.max(currentBiggest,biggestNumber);

}
    }
return biggestNumber;    

}

solve([[3, 5, 17, 12, 91, 5],
    [-1, 7, 4, 33, 6, 22],
    [1, 8, 99, 3, 10, 43]])