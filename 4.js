function remove(array){
    let arr = [];
    let result = array.filter((array) => { return array > 0 || isNaN(array) === true;})
   return arr += result;
    
}
console.log(remove([0, 1, 2, 3, 'hi', null , false]));