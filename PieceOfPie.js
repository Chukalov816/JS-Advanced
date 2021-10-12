function solve(input,flavor1,flavor2){
let index1=input.indexOf(flavor1);
let index2=input.indexOf(flavor2);
let result=input.slice(index1,index2+1);
return result;
}

solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)