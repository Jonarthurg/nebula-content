// let newName = "jon"

// for(let i = 0; i < newName.length; i++){

// console.log(newName[i].toUpperCase())

// }




// const randomNumArray = [0,1,2,3,4,5]
// let evenCount = 0

// for(let i = 0; i <randomNumArray.length; i++ ){

//    if(randomNumArray[i] % 2 == 1){

//    evenCount++
// }


// }
// console.log(evenCount)




// let count = 3
// let color = "grey"
// while(color != "green"){

// if( count == 3){

// color = "red"
// count--
// console.log("Get Ready!")
// }
// else if(count == 2){
// color = "yellow"
// count--
// console.log("Get Set!")
// } 
// else{
// color = "green"
// console.log("Go!!!")
// }
// }




// for(let i = 0; i < 100; i++ ){
//     console.log("were at number: " + i)
//     if(i ==10){
//     console.log("prison break, starring TENtworth Miller")
//     break;
//     }
    
//     }






    const randomNewNumArray = [1,2,3,4,5,6]

    // const randomNewNumArray = [5,4,4,7,8]


    function meanMedianRange(numArray){

     //finding the range   
    let range = Math.max(...numArray) - Math.min(...numArray)



    //finding the mean
    let mean = 0
   for(let i =0; i < numArray.length; i++){

    mean += numArray[i]

   }

    mean = mean / numArray.length



    //finding the median


   const medianArray = numArray.sort(function(a,b){return a-b})
   let median = 0

   if(medianArray.length % 2 == 1){

    median = medianArray[(Math.ceil(medianArray.length/2)-1)]


   } else {


    median = (medianArray[(Math.ceil(medianArray.length/2)-1)] + medianArray[(Math.ceil(medianArray.length/2))]) / 2


   }






console.log("range: " + range)
console.log("mean: " + mean)
console.log("median: " + median)


    }



    meanMedianRange(randomNewNumArray)