function upperCase(str){

    let arr = str.split(" ");
    for (let i = 0; i<arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    let result = arr.join(" ");
    return result;
}



console.log(upperCase('the quick brown fox'));