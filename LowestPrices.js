function solve(input){
let list={};
for (const line of input) {
    let [town,product,price]=line.split(' | ');
    price=Number(price);
   if (!list[product]) {
       list[product]={};
   }list[product][town]=price;
}
let result=[];
for (const key in list) {
   let sortedTowns=Object.entries(list[key]).sort((a,b)=>a[1]-b[1]);
  let cheapestTown=sortedTowns[0];
  result.push(`${key} -> ${cheapestTown[1]} (${cheapestTown[0]})`)
    }
    return result.join('\n');
}


solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 2',
'Sofia | Orange | 2',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Orange | 2']
)