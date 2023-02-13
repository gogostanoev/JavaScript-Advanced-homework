console.log("connected");

// #Exercises

// Exercise 1
// Create a Person constructor function that has:

// firstName
// lastName
// age
// getFullName - method

// Create a Student constructor function that inherits from Person and has:
// academyName
// studentId
// study - method that writes in the console: The student firstName is studying in the academyName
// Create two Student objects



class Person {

    constructor(firstName, lastName, age){

        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
    }

    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }

    studentAcademy(){
        console.log(`${this.firstName} ${this.academyName}`)
    }
}


/**
 * The keyword "extends" is used to create a child class of another class, in this specific case the class Student is a child to the class parent Person
 * It inherits all the methods from the parent class. The reason why this is useful is because the code can be reused
 * It can reuse properties and methods from the parent class when we create the child class
 */
class Student extends Person {

    constructor(firstName, lastName, age, studentId){
        // the keyword "super" is used to call the constructor of the parent class and access the properties and methods of that very same parent class
        super(firstName, lastName, age)

        this.academyName = "SEDC",
        this.studentId = studentId
    }

    study(){
        console.log(`${this.firstName} is studying in the ${this.academyName}`)
    }
}


let studentOne = new Student("Marko", "Gigovski", "31", 6);
console.log(studentOne);

// Prosti mi ako sum pogreshil za godinite, ne znam kolku godini imash Aneta :)
let studentTwo = new Student("Aneta", "Stankovska", "27", 1);
console.log(studentTwo);



// Exercise 2
// Create a method on the Person prototype that accepts a Student of any academy and returns the academy that that student is in.

// Create DesignStudent, CodeStudent and NetworkStudent constructor functions that inherit from Student.

// DesignStudent
// isStudentOfTheMonth - boolean
// attendAdobeExam - method that writes in console: The student firstName is doing an adobe exam!
// CodeStudent
// hasIndividualProject - boolean
// hasGroupProject - boolean
// doProject(type) - method that accepts string. If the string is individual or group it should write that the person is working on the project of that type and set the value to true on the property of the project
// NetworkStudent
// academyPart - number
// attendCiscoExam - method that writes in console: the student firstNAme is doing a cisco exam!
// Note: For all students, the academyName property should be auto generated based on which Student we are creating ( design, code or network )

// Create one of each students Check all students with the Student method for checking students academy


// Tuka ja povikav funkcijata bidejki e vo exercise 2 pa posle nea ja staviv
studentTwo.studentAcademy()


class DesignStudent extends Student {

    constructor(firstName, lastName, age, studentId, isStudentOfTheMonth){

        super(firstName, lastName, age, studentId)

        this.isStudentOfTheMonth = true
        this.academyName = "Innovation Academy"
    }

    attendAdobeExam(){
        console.log(`${this.firstName} is doing an adobe exam!`)
    }
};

let designStudentOne = new DesignStudent("George", "Dimitrov", 29, 2, true)
console.log(designStudentOne);
designStudentOne.attendAdobeExam();






class CodeStudent extends Student {

    constructor(firstName, lastName, age, studentId){

        super(firstName, lastName, age, studentId)

        this.hasIndividualProject = false
        this.hasGroupProject = false
        this.academyName = "SCEC"
    }

    doProject(type){
        if(type === "Individual"){
            console.log(`${this.firstName} is working on an individual project`)
            this.hasIndividualProject = true
            return
        };
        console.log(`${this.firstName} is working on a group project`)
        this.hasGroupProject = true
    };
}

let codeStudentOne = new CodeStudent("Dimitar", "Sarafiloski", 20, 3)
codeStudentOne.doProject("Individual");
console.log(codeStudentOne);






class NetworkStudent extends Student {

    constructor(firstName, lastName, age, studentId, academyPart){

        super(firstName, lastName, age, studentId)

        this.academyPart = academyPart
        this.academyName = "Brainster"
    }

    attendCiscoExam(){
        console.log(`${this.firstName} is doing a cisco exam!`)
    };
};

let networkStudentOne = new NetworkStudent("John", "Doe", 45, 9, 3)
networkStudentOne.attendCiscoExam();
console.log(networkStudentOne)
