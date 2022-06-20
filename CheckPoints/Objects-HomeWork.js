// 1.   Create an object for your dream vehicle
//      Give it a minimum of 6 key-value pairs
//      This object should contain many datatypes (string, number, boolean, null, array)

class dreamCar{
   constructor(year,make,model,color,fourWD,miles,maintenceDates){
    this.year = year

    this.make = make

    this.model = model
    
    this.color = color

    this.fourWD = fourWD

    this.miles = miles
   }




}


let jeep = new dreamCar(2018,"Jeep","Grandcherokee","white",true, 6000)




// 2.   Using dot-notation Log to the console 3 properties from the previous object

console.log(jeep.color)

console.log(jeep.year)

console.log(jeep.model)

// 3.   Using bracket-notation Log to the console 3 properties from the previous object

console.log(jeep["miles", "fourWD", "make"])

// 4.   Try and log a property that doesn't already exist - what output do we get?

console.log(jeep["suv"]) //prints "undefined" to the console.



// 5.   Add a new key-value pair to the vehicle. 

jeep.suv = true

// 6.   Using bracket-notation update a property on the vehicle. 

jeep["miles"] = 7000

console.log(jeep["miles"])

// 7.   Using dot-notation update a property on the vehicle. 

jeep.name = "super jeep"
console.log(jeep.name)

// 8.   Create a method for turning your vehicle on

jeep.onOrOff = "off"


const startCar =()=>{

jeep.onOrOff = "on"

}




// 9.   Create a method for turning your vehicle off

jeep.onOrOff = "off"


const turCarOff =()=>{

    jeep.onOrOff = "off"
    
    }


//10.   
//      a. Check if your vehicle is on (it should be off)

    console.log(jeep.onOrOff)
//      b. Start your vehicle

jeep.startCar()
//      c. Check if your vehicle is on (it should be on)
console.log(jeep.onOrOff)

//      d. Stop your vehicle

jeep.turCarOff()
//      e. Check if your vehicle is on (it should be on)
console.log(jeep.onOrOff)


