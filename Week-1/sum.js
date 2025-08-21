let arr=[1,2,3,4,6];
let sum = SumArray(arr);
function SumArray(arr){
    let sum =0;
    for (let h = 0; h<arr.length;h++){
        sum+=arr[h];

    }
    return sum;

}

console.log(sum);