function getDate(sp){
    let now = new Date();
    let day = now.getDay();
    let month = now.getMonth() +1;
    let year = now.getFullYear();
    
    if(day < 10) day = "0" + day;
    
    if(month < 10 ) month = "0" + month;
    
        return (month +sp + day+ sp + year);
    }
    console.log(getDate(' / '));