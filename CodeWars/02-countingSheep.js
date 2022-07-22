// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(sheepArray) {
  
    let totalSheep = 0
    for(let i = 0; i < sheepArray.length; i ++){
      
      if(sheepArray[i] === true)
        {
          totalSheep++
        }
      
    }
    
    return totalSheep
  }