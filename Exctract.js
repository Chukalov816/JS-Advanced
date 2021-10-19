function solve(input){
    let biggest= Number.NEGATIVE_INFINITY;
for (let i = 0; i < input.length; i++) {
    if (input[i]>=biggest) {
        biggest=input[i]
    }else{
        input.splice(i,1,'No')
    }

} let result=input.filter(x=>x!=='No');
return result;
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )