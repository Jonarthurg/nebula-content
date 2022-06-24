class Person {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    sayHi(){
        console.log("Hi, my name is " + this.name);
    }
}




class JediKnight extends Person{
constructor(name,age,rank){
    super(name,age)
    this.rank = rank
}

presentRank(jediKnight){

console.log("What is your rank " + jediKnight.name + "?")

}


}



class YoungPadawan extends Person{
    constructor(name,age,rank){
        super(name,age)
        this.rank = rank

    }

    response(jediKnight){


        console.log("I am a Padawan, " + jediKnight.name + " sir")
        // console.log(`i am a padawn, ${jediKnight}, sir`)


    }







}


class JediTemple{
constructor(jediKnight,youngPadawan){
    this.teacher = jediKnight
    this.student = youngPadawan
}

apprentice(){

console.log("I am " + this.teacher.name + ", " + this.student.name + " is under my care")

}

}



const obiwan = new jediKnight("obiwan",27,"jedi knight")




const anakin = new youngPadawan("anakin",21,"padawan")




const jtemple = new JediTemple(obiwan,anakin)





jtemple.apprentice()


obiwan.presentRank(anakin)


anakin.response(obiwan)