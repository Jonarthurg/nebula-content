
//variable with 1 piece of data

// const jeep = "grandcherokee"


//  // an object not using a class instance, holding multiple key value pairs (key --> properties --> variables  )

// const jeep2 = { 

//      model: "wrangler",
//     year: 2018,
//     color: "white",



//      mpg(){


//             console.log("25.0 mpg")

//     }
// };
 

// jeep2.mpg()



  

const randomStr = "lot"


function solution(str){

    let newStr = ""
    
    for(let i = 0; i < str.length; i++){
      
        newStr += str[str.length - 1 - i]
     
      
    }
    return newStr
  }

  console.log(solution(randomStr))
  




  