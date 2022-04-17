function remove(array){
    let arr = [];
    let result = array.filter((array) => { return array > 0 || isNaN(array) === true;})
   return arr += result;
    
}
console.log(remove([0, 1, 2, 3, 'hi', null , false]));



// function removeItem(array) { 
//     let arr = array.filter(function(element){ 
//     return Boolean(element)===true 
//     }); 
//     return arr 
// } 

// let arr1 =["",1,null,2,false,56,78,0,3,99,NaN,4,5,undefined]; 
// console.log(removeItem(arr1))