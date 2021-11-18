function carFactory(order){
    
let car={};
car.model=order.model;
if (order.power <= 90) {
    car.engine={power :90, volume: 1800};
}else if (order.power<=120) {
    car.engine={power: 120, volume : 24000};
}else if (order.power<=200) {
    car.engine={power : 200, volume:3500};
}
car.carriage={};
car.carriage.type=order.carriage;
car.carriage.color=order.color;

if (order.wheelsize%2 ===0) {
    order.wheelsize-=1;
}
car.wheels=[0,0,0,0].fill(order.wheelsize);
return car;
}

carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
)