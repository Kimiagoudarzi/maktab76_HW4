function mergeTwoArray(array1, array2){
    let merge = array1.concat(array2);
    let arr = [];
    for(let i of merge) {
        if(arr.indexOf(i) === -1) {
             arr.push(i)
        }
    }
    return arr;
}
console.log(mergeTwoArray( [1, 2, 3], [2,30,1]));