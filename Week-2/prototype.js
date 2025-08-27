const arr = [1,2,3]
const str = "Rahul"
str .length // 5 
const obj = {
    x:1

}
// .prototype object create karegi base class ka  
obj.x 
// Dot operator object ke properties ko access karne ma help karta hai 
if(!Array.prototype.length){
    // FallBack - Polyfill -> Backup Function 
    Array.prototype.length = function(arr)
    {
        // Own function 
        
    }
}