function power(num , p){
    if(p === 0){
        return 1;
    }
    let result = num * power(num , p-1);
    return result;
}
console.log(power(2,6));