function solve(input,n){
    let result=[];
for (let i = 0; i < input.length; i+=n) {
    result.push(input[i]);
    
}
return result;
}

solve(['dsa',
'asd', 
'test', 
'tset'], 
2
)