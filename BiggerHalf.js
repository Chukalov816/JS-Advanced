function solve(input){
input=input.sort((a,b)=>a-b);
let n = Math.ceil(input.length/2);
let result=input.slice(input.length-n);
return result;
}

solve([3, 19, 14, 7, 2, 19, 6])