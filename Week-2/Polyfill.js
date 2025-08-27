
if(!Array.prototype.myforEach){
    Array.prototype.myforEach = function(userFn)
    {
        const originalArr= this // Doubt -> Current Object ko point karta hai 
        for(let i = 0;i<originalArr.length;i++)
        {
            userFn(originalArr[i],i);

        }

    }
}


const arr = [1,2,3,4,5,6];
// Error : . forEach function does not exist on arr variable 
// Real Signature ko samjho i.e input output format
// no return , function
// Call my function for every value   
 const ret = arr.myforEach(function(value, index)
{
    console.log(`Value at Index ${index} is ${value}`);

});
console.log(ret) // Does not return anything.