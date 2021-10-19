function solve(input){
    let result=[];
    let number=1;
for (const line  of input) {
    switch (line) {
        case 'add':
            result.push(number);
            break;
        case 'remove':
            result.pop();
            break;
    }
    number++;
}
if (result.length===0) {
    console.log('Empty');
}else{
    result.forEach(el => console.log(el));
}
}

solve(['remove', 
'remove', 
'remove']

)