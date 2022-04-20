function power(num , p){
    if(p === 0){
        return 1;

    } else if (p == 1){
        return num;

    }else if (p < 0){
        let negExponent = Math.abs(p);
        let result = num * power(num , negExponent-1);
        return 1/result;
    }

    return num * power(num , p-1);
}
console.log(power(2,-4));