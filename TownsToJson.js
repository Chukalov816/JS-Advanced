function solve(input){
input.shift();
let result=[];
for (const line of input) {
    let [town,latitude, longitude]= line.split(/\s*\|\s*/g).filter(x=>x!=='');
    latitude=Number(latitude).toFixed(2);
    longitude=Number(longitude).toFixed(2);
   let list={
       Town:town,
       Latitude: Number(latitude),
       Longitude: Number(longitude)
   };
   result.push(list);

}
console.log(JSON.stringify(result));


}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)