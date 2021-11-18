function solve(input){
let city={};
for (const line of input) {
    let [name, population]=line.split(' <-> ');
    if (city[name]) {
        city[name]+=Number(population)
    }
    else{
        city[name]=Number(population);
    }
}
let entries= Object.entries(city);
entries.forEach(el=>{
    console.log(el.join(' : '));
})
}


solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)