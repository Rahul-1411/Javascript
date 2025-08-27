// Signature -> map 
// Return -> New array , Each ele iterate , UserFn

if(!Array.prototype.myMap)
{
    Array.prototype.myMap = function(userFn)
    {
        const result = [];
        for (let i = 0; i<this.length; i++)
        {
           const value = userFn(this[i],i)
           result.push(value);

        }
        return result;
    }
}
const arr = [1,2,3,4,5];
// => arrow function h/w study 
const n = arr.map((e,index)=> e*2);
const n2 = arr.myMap((e,index)=> e*3);
console.log(n);
console.log(arr);
console.log(n2);
// const n3 = arr.map(function(value, index)
// {
//     return value*2;

// }
// );