// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


function find_average(array) {
    let returnAVG = 0
    
    
    if(array.length == 0){
      
      return 0
      
    } else{
      
     for(let i = 0; i < array.length; i++){
       returnAVG += array[i]
     }
     
       return returnAVG / array.length;
     
     }
   
   }