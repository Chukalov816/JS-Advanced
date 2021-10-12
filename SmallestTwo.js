function solve(input){
input=input.sort((a,b)=>a-b);
input.length=2;
console.log(input.join(' '));

}

solve([30, 15, 50, 5])