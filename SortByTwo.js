function solve(input){
let sorted = input.sort((x,y)=>x.length-y.length || x.localeCompare(y));
sorted.forEach(element => {
    console.log(element);
});
}

solve(['alpha', 
'beta', 
'gamma']

)
