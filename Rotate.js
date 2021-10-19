function solve(input,n){
for (let i = 0; i < n; i++) {
  let last = input.pop();
  input.unshift(last);
}
console.log(input.join(' '));
}

solve(['1', 
'2', 
'3', 
'4'], 
2

)