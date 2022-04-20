// function sumOfArray (array){
//     let sum = 0;
//     for (let num of array){
//         sum += num;
//     }
//     return sum;
// }
// console.log(sumOfArray([1,2,3,4,5,6]));

function sumOfArray (array){
    let result = array.reduce((sum, num) => sum + num, 0);
    return result;
}
let arr = [1, 2, 3, 4, 5, 6]
console.log(sumOfArray(arr));