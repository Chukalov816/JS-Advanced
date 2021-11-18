function heroInventory(input){
    let list=[];
    for (const line of input) {
        let [name,level,data]=line.split(' / ');
        let items=data !== undefined ? data.split(', ') : [];
        level=Number(level);
      list.push({name,level,items});
    }
    return JSON.stringify(list);
}

heroInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)