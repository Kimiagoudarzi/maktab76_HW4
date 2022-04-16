function sumOfTheRoundedNumber(arr){
    let result = arr.reduce((a, b) => a+b, 0);
    return Math.round(result);
}
console.log(sumOfTheRoundedNumber( [15.5, 2.3, 1.1, 4.7]));