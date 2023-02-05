console.log("connected");

// Exercise
// Get bordering countries function
// Call the countries API for a country by code.
// Create a function that gets all the neighbors from a country and returns them in console
// When the call to the countries API for a country is made immediately show the bordering countries in the console
// Example:

// Call -> MKD

// In console:

// Country:

// macedonia object

// Neighbors:

// albania object

// greece object

// bulgaria object

// serbia object

// Countries Api Documentations; https://restcountries.com/v3.1/alpha/{code}



// This is done with fetch/then, it may seem redundant and I need to work on it

// let fetchApiCall = (code) => {
//     fetch(`https://restcountries.com/v3.1/alpha/${code}`)

//     .then((response) => {
//         console.log("The response from fetch is:", response);
//         return response.json();
//     })
//     .then((result) => {
//         console.log(result);
//         countryInfo(result)

//     })
//     .catch((error) => {
//         console.log(error)
//     })
// }



// function countryInfo(objectInfo){
//     console.log("I have selected:", objectInfo[0]);

//     // let newArray = objectInfo[0].borders;
//     objectInfo[0].borders.forEach((country) => {
//         fetch(`https://restcountries.com/v3.1/alpha/${country}`)
//         .then((response) => {
//             // console.log(borderingCountry)
//             return response.json();
//         })
//         .then((result) => {
//             // console.log("The border country is:", result)
//             // console.log(result)
//             borderCountryInfo(result)
//         })
//         .catch((error) => {
//             console.log(error)
//         })
        
//     })
// }


// function borderCountryInfo(objectInfoTwo){
//     console.log("The border country is", objectInfoTwo[0])
// }


// fetchApiCall("mkd")



// This is done with async/await and is a much cleaner code

let modernApiCall = async (code) => {
    try {
        let response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        let parsedData = await response.json();
        // console.log(parsedData)
        return parsedData
    }
    catch (err) {
        console.log("An error has occurred", err)
    }
}


let countryData = async (code) => {
    let chosenCountry = await modernApiCall(code)
    console.log("I have selected:", chosenCountry[0])

    let countriesAround = chosenCountry[0];
    countriesAround.borders.forEach(async country => {
        let borderingCountry = await modernApiCall(country)
        console.log("The border country is:", borderingCountry[0])
    })
}


countryData("mkd")
