// Filter 
// Signature : Return a new array | Input -> userFn ,
// agar user ka function True return karta hai toh current value ko new array mai include kar do

if(!Array.prototype.myfilter){
    Array.prototype.myfilter = function(userFn)
    {
        const result = [];
        for (let i = 0 ;i<this.length;i++)
        {
            if(userFn(this[i],i) == true)
            {
                result.push(this[i]);
            }
        }
        return result;
    }
}


const arr =[1,2,3,4,5,6];
const n3 = arr.filter((e)=> e%2 == 0); // Even value 
const n4 = arr.myfilter((e)=> e%2 !=0)
console.log(n3);
console.log(n4);
// H.w -> 