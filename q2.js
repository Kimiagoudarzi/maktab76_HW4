function sumOfArray (array){
    let sum = 0;
    for (let num of array){
        sum += num;
    }
    return sum;
}
console.log(sumOfArray([1,2,3,4,5,6]));