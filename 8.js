let monthName = function(date){ 
    monthList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
      return monthList[date.getMonth()]; 
    } 
    console.log(monthName(new Date("10/11/2009"))); 
    console.log(monthName(new Date("11/13/2014")));