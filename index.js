// Console log a welcome message with instructions to mad libs
console.log("Welcome to Mad Libs! IN htis gane you will recieve a list of words and you will come up with words that match the parts of a speech.")


// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words
let adjective = prompt("Give me an adjective")
let pluralNoun = prompt("Give me an plural noun")
let verb = prompt("Give me an verb")
let adjectiveTwo = prompt("Give me another adjective.")


// Create an array that stores the values the user entered
let storeArray = []
storeArray.push(adjective)
storeArray.push(pluralNoun)
storeArray.push(verb)
storeArray.push(adjectiveTwo)

// Console log the story with the array values passed into the blanks
console.log(`In a small ${storeArray[0]} school in the Bronx, there was a problem with too many ${storeArray[1]}. These ${storeArray[2]} loved to ${storeArray[3]}, which cause Mr. P so many headaches. However, no one wanted to remove them because they were too ${storeArray[3]} so they stayed there forever.`)
// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive








