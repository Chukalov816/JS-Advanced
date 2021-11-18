function solve(input){
let list={};
for (const line of input) {
    let [product,price]=line.split(' : ');
    price=Number(price);
    let letter= line[0];
    if (!list[letter]) {
        list[letter]={};
    }
    list[letter][product]=price;
}
let sortedKeys=Object.keys(list).sort((a,b)=>a.localeCompare(b));
sortedKeys.forEach(el=>{
    console.log(el);
    let sortedProducts=Object.keys(list[el]).sort((a,b)=>a.localeCompare(b));
    sortedProducts.forEach(element=>{
        console.log(`  ${element}: ${list[el][element]}`);
    })
})
      
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)