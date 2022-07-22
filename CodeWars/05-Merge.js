
// You are given two sorted arrays that both only contain integers. Your task 
// is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), 
// where arr1 and arr2 are the original sorted arrays. You don't need to worry about validation, since arr1 and arr2 must
// be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

const arrayOne = [1,2,3]
const arrayTwo = [4,5,6]

function mergeArrays(arr1, arr2) {
    if(arr1 == null && arr2 == null){
      return"please choose two filled arrays."
  }
  else if(arr1 == null || arr2 == null){
    
    
    
    return arr1.concat(arr2).sort((a,b) => a - b)
    
    
  }
  else{

    for(let i = 0; i < arr1.length; i++){

        if(arr1.includes(arr2[i])){

            arr2[i] 
        }



    }

  


    return arr1.concat(arr2)
    
    }
  }
  
  console.log(mergeArrays(arrayOne,arrayTwo))