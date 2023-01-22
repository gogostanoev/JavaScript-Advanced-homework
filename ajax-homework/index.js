console.log("connected");

// Exercise 1
// Create a function that makes api call to the url: "https://swapi.dev/api/people"
// After you retrieve the data print the first character in the HTML.
// Example:
// Character Name: Luke Skywalker
// Character Height: 172
// Character BirthYear: 19BBY



let firstButton = document.getElementById("firstButton");
let firstResult = document.getElementById("firstResult");


function firstCharacter(){
    
    $.ajax({
        url: "https://swapi.dev/api/people",

        success: function(response){
            console.log(response);
            console.log("Results retrieved")
            printResults(response.results)
        },



        error: function(error){
            console.log(error)
        }
    })
}


firstButton.addEventListener("click", function(){

    firstCharacter()
})


function printResults(firstCharacter){

    firstResult.innerHTML = `<h3> Character Name: ${firstCharacter[0].name} <br />
    Character Height: ${firstCharacter[0].height} cm <br />
    Character BirthYear: ${firstCharacter[0].birth_year} <br />
    Character EyeColor: ${firstCharacter[0].eye_color} <br />
    Character Gender: ${firstCharacter[0].gender} <br />
    Character HairColor: ${firstCharacter[0].hair_color} <br />
    Character Mass: ${firstCharacter[0].mass} KG <br />
    Character SkinColor: ${firstCharacter[0].skin_color} 
    </h3>`
}




// Exercise 2
// Create a function that makes api call to the url "https://swapi.dev/api/planets"
// After the data is retrieved print the planets on the HTML


let secondButton = document.getElementById("secondButton");
let secondResult = document.getElementById("secondResult");


function getSwapiPlanets(){

    $.ajax({
        url: "https://swapi.dev/api/planets",
        success: function(response){
            console.log(response);
            console.log("Results retrieved");
            printSecondResults(response.results)
        },

        error: function(error){
            console.error(error)
        }
    })
}


secondButton.addEventListener("click", function(){

    getSwapiPlanets()
})


function printSecondResults(planetsArray){

    secondResult.innerHTML = "";

    for(let i = 0; i < planetsArray.length; i++){

        secondResult.innerHTML += `
        <h3> The planet is called: ${planetsArray[i].name} </h3>
        `
    }
}




// BONUS: Exercise 3
// Find out in the documentation how can you request for "specific character resource"
// Using that url, make API request to get the data
// After you get the data, create a function that is going to print it in the HTML the properties: "birth_year, eye_color, name, homeworld"
// IMPORTANT: the property homeworld, should be informations of the homeworld not the url ;)
// HINT: You would have to do, a api request with the homeworld property value to retrieve it's infomartion.



// let thirdButton = document.getElementById("thirdButton");
// let thirdResult = document.getElementById("thirdResult");



// function getSwapiProperties(){

//     $.ajax({
//         url: "https://swapi.dev/api/people?1&homeworld",

//         success: function(response){
//             console.log("Results retrieved");
//             console.log(response.results)
//         },


//         error: function(error){
//             console.log(error)
//         }
//     })
// }


// thirdButton.addEventListener("click", () => {
//     getSwapiProperties()
// })


// function printThirdResult(){}