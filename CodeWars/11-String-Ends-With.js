function solution(str, ending){

  
  
    if(str.slice(str.length - ending.length,str.length) == ending){
      
        console.log(str.slice(str[ending.length -1],str.length))
        return true

      
    }
    else{
      
      return false
    }
  
  
  }


  let newString = "abc"

  let newEnding = "bc"

  console.log(solution(newString,newEnding))

