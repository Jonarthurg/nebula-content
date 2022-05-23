//Parent class of what a person looks like
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    sayHi(){
        console.log(`Hi, my name is ${this.name}`)
    }
}

// Branch off of Person Class and create two types of People (Teacher, Student)
class Teacher extends Person {
    constructor(name, age, subject, roomNumber, teacherGrade){
        super(name, age)
        this. subject = subject
        this.roomNumber = roomNumber
        this.teacherGrade = teacherGrade
        this.assignmentsToGrade = []
    }
    teach(){
        console.log("I'm teaching")
    }

    //Calls the classroom's method for adding a student to class
    // Passes the name of the instance as argument
    addStudent(student, classroom){
        classroom.addStudentToClass(student, this.name)
    }

    // Teacher has the ability to accept an assignment and place it in the HW bin
    addAssignments(assignment, studentName){
        this.assignmentsToGrade.push({
            assignmentName : assignment,
            studentName
        })
    }
}

class Student extends Person {
    constructor(name, age, grade, favoriteSubject){
        super(name, age)
        this.grade = grade
        this.favoriteSubject = favoriteSubject
    }

    learn(){
        console.log("Look I'm learning right now!")
        // return "Look I'm learning right now!"
    }
    // Call the teacher's menthod for accepting and placing HW in bin
    handInHW(teacher, assignment){
        teacher.addAssignments(assignment, this.name)
    }
}


class Classroom {
    constructor(roomNumber, floor){
        this.roomNumber = roomNumber
        this.floor = floor
        this.studentCount = 0
        this.studentList = []
    }

    showStudentCount(){
        console.log(`There are ${this.studentCount} students in here`)
    }

    // Method for adding student to its student list
    addStudentToClass(student, teacher){
        student.teacher = teacher
        this.studentList.push(student)
        this.studentCount++
    }
}


// Creating instances of our Classes
const mrJones = new Teacher("Mr. Jones", 35, "Math", 105, "5th" )
const billy = new Student('Billy', 10, "5th", "gym")
const mary = new Student('Mary', 10, "5th", "english")
const franky = new Student('Franky', 10, "5th", "math")
const room105 = new Classroom(105, 1)

//Teacher adding student to a classroom
mrJones.addStudent(billy, room105)
mrJones.addStudent(mary, room105)
mrJones.addStudent(franky, room105)

// Student submiting HW to the teacher
billy.handInHW(mrJones, 'math lesson 2.5')


console.log(mrJones)
console.log(room105)

