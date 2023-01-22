console.log("connected");


// Exercise 1
// Make 3 anonymous functions (function expressions)

// Function that takes a number through a parameter and returns how many digits that number has
// Function that takes a number through a parameter and returns if its even or odd
// Function that takes a number through a parameter and returns if its positive or negative

// BONUS: Create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console. Ex: Code: getNumberStats(-25); Console: 2 Digits, Odd, Negative





let howManyDigits = (randomNumber) => {
    // I used .string to stringify the number so I can read it's length and add a .replace method that returns a new string (in this case an empty one)
    // with the value being replaced
    let result = randomNumber.toString().replace('.', '');
    // I used the .include method, whether the number I've provided contains a -(minus), and it it does, in way remove it so it doesn't count it as an
    // additional number of digit
    if(result.includes('-')){
        result = result.slice(1)
    }
    return `${result.length} Digits`
}

console.log(howManyDigits(-14.56));
console.log(howManyDigits(45823676451441))



let oddOrEven = (randomNumber) => {
    if(randomNumber % 2 === 0){
        return `Even`
    }else {
        return `Odd`
    }
}

console.log(oddOrEven(583176));
console.log(oddOrEven(37))


let positiveOrNegativeNum = (randomNumber) => {
    if(randomNumber > 0){
        return `Positive`

    }else {
        return `Negative`
    }
}

console.log(positiveOrNegativeNum(340));
console.log(positiveOrNegativeNum(-500))


let getNumberStats = (finalNumber) => {

    return `The number ${finalNumber} has ${howManyDigits(finalNumber)}, is ${oddOrEven(finalNumber)}, and it's ${positiveOrNegativeNum(finalNumber)}`
}

console.log(getNumberStats(-583176.925));
console.log(getNumberStats(1995))










// Exercise 2
// Create a function that takes a string and returns the number (count) of vowels contained within it. (Use anonymous functions/Arrow functions for the implementation)

// Ex: Code: countVowels("Pineapple"); Console: 4 vowels

// BONUS: Provide the input from the HTML, and print the result on the HTML



// Made a function that returns all the vowels

let areThereVowels = (char) => {
    char = char.toLowerCase();

    return char === "a" || char === "e" || char === "i" || char === "o" || char === "u";
}



// Another function that iterates through a given word and if the word contains all of the given vowels then display how many vowels are there

let countVowels = (word) => {

    let helperVariable = 0;
    for(let i = 0; i < word.length; i++){
        if(areThereVowels(word[i])){
            helperVariable++
        }
    }return `There are ${helperVariable} vowels in this word` 
}


console.log(countVowels("Beautiful"));






// I tried with a simple regex, it works but if there is more than one same vowel it will count it just as one vowel
// If the word is (Banana) it will say it has only one vowel

// let newCount = (randomWord) => {
    
//     let littleHelper = randomWord.match(/[^aeiou]/gi);
//     return littleHelper === null ? 0 : littleHelper.length
// }


// console.log(newCount("Avocado"))



let randomWord = document.getElementById("randomWord");
let clickButton = document.getElementById("clickButton");
let containerWord = document.getElementById("containerWord");


let printNumberOfVowel = (anyWord, elementsToPrintIn) => {
    elementsToPrintIn.innerHTML = "";
    let helperVariable = 0;

    for(let i = 0; i < anyWord.length; i++){
        if(areThereVowels(anyWord[i])){
            helperVariable++
        }
    }elementsToPrintIn.innerHTML += `<h3> ${anyWord} has ${helperVariable} vowels <h3/>`
}


clickButton.addEventListener("click", () => {
    
    printNumberOfVowel(randomWord.value, containerWord)

    randomWord.value = "";
})
