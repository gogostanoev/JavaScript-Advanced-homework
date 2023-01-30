console.log("connected");

// Exercise 1
// There is a JSON file with students. Make a call to the file and get the following data from it:

// All students with an average grade higher than 3
// All female students names with an average grade of 5
// All male students full names who live in Skopje and are over 18 years old
// The average grades of all female students over the age of 24
// All male students with a name starting with B and average grade over 2


let getInfo = document.getElementById("getInfo");


function getStudentsInfo(){
    fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
    .then((response) => {
        console.log(response)

        return response.text()
    })
    .then((result) => {

        let parsedResult = JSON.parse(result);
        console.log(parsedResult)
        console.log("Proof it is console logging")
        multipleTasks(parsedResult)

    })
}


getInfo.addEventListener("click", () => {
    getStudentsInfo()
})



function multipleTasks(studentsArray){

    // All students with an average grade higher than 3
    let newStudentsArray = studentsArray.filter((student) => {
        return student.averageGrade > 3
    });
    console.log(newStudentsArray);
    // Used forEach() on the newly created array to display which exact students have an average grade higher than 3
    
    // newStudentsArray.forEach((studentInfo) => {
    //     console.log(`${studentInfo.firstName} ${studentInfo.lastName} has an average grade of ${studentInfo.averageGrade}`)
    // });



    // All female students names with an average grade of 5
    let newFemaleStudentsArr = studentsArray.filter((student) => {
        return student.averageGrade === 5 && student.gender === "Female"
    });
    console.log(newFemaleStudentsArr);
    // Used forEach() on the newly created array to display which exact female students have an average grade that is equal to 5

    // newFemaleStudentsArr.forEach((studentInfo) => {
    //     console.log(`${studentInfo.firstName} has an average grade of ${studentInfo.averageGrade}`)
    // })



    // All male students full names who live in Skopje and are over 18 years old
    let newMaleStudentsArr = studentsArray.filter((student) => {
        return student.gender === "Male" && student.city === "Skopje" && student.age > 18  
    });
    console.log(newMaleStudentsArr);
    // Used forEach() on the newly created array to display which exact male students live in Skopje and are older than 18 years

    // newMaleStudentsArr.forEach((studentInfo) => {
    //     console.log(`${studentInfo.firstName} ${studentInfo.lastName} lives in ${studentInfo.city} and is ${studentInfo.age} years old`)
    // })



    // The average grades of all female students over the age of 24
    let femaleStudentArray = studentsArray.filter((student) => {
        return student.gender === "Female" && student.age > 24
    })
    console.log(femaleStudentArray);
    // Used forEach() on the newly created array to display the average grades of all the female students that are older than 24 years

    // femaleStudentArray.forEach((studentInfo) => {
    //     console.log(`${studentInfo.firstName} has an average grade of ${studentInfo.averageGrade} and is ${studentInfo.age} years old`)
    // })



    // All male students with a name starting with B and average grade over 2
    let maleStudentArray = studentsArray.filter((student) => {
        if(student.firstName.includes("B")){
            return student.gender === "Male" && student.averageGrade > 2
        }
    })
    console.log(maleStudentArray)
    // Used forEach() on the newly created array to display the students name that starts with a "B" and the average grade higher than 2

    // maleStudentArray.forEach((studentInfo) => {
    //     console.log(`${studentInfo.firstName} has an average grade of ${studentInfo.averageGrade}`)
    // })
}
