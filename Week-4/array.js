let chaiType = ["Ginger Tea","Red Tea","Mango Tea"];
// console.log(chaiType[0]);
// chaiType.push("Herbel Tea");
// const chai = chaiType.pop();
// console.log(chai);
let index = chaiType.indexOf("Ginger- Tea");
if(index !=-1){
    chaiType.splice(index,1);
}
console.log(index);
console.log(chaiType);
// ... unpacking the array or spreading in other words concat 