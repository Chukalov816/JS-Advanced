function rectangle(width,height,color){
   function capitalLetter(str){
    let newStr=str.charAt(0).toUpperCase()+str.slice(1);
    return newStr;
   }
let obj={
    width:width,
    height:height,
    color:capitalLetter(color),
    calcArea(){
        let area=this.width* this.height;
        return area;
    }
    
}
return obj;
}


let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
