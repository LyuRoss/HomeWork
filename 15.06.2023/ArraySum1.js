let arr1 = [-1, 3, 5, -7, 9];
let arr2 = [0.1, 1, 0.2, 2];
let sum1 = 0;
for (let i = 0;i < arr1.length;i++){
    sum1 += arr1[i];
    
}
console.log(sum1);

function SumArray(){
    let sum2 = 0;
    for (let i = 0;i < arr2.length;i++){
        sum2 += arr2[i];
}
console.log(sum2.toFixed(1));
}
SumArray(arr2);