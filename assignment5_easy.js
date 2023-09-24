//1. Reverse a string without using the reverse method or a function.

alert("1. Reverse a string without using the reverse method or a function.");
console.log("1. Reverse a string without using the reverse method or a function.");
const str = prompt("Enter the string :"); //User give the input for revesring the string
function reverseString(str) {
    if (str === "")
     return "";
  
    // Create an empty variable to store the reversed string.
    let reversedString = "";
    // Iterate over the string from the end to the beginning.
    for (let i = str.length - 1; i >= 0; i--) {
      // Add the current character to the reversed string.
      reversedString += str[i];
    }
    // Return the reversed string.
    return reversedString;
  }
  const reversedString = reverseString(str);
  console.log(reversedString); // give the reversed Outputs

  
  
// 2. Count the number of vowels in a string without using functions.

alert("2. Count the number of vowels in a string without using functions.");
console.log("\n 2. Count the number of vowels in a string without using functions.");
const str_ = prompt("Enter the string :"); // String enter by the user 

// Create a variable to store the number of vowels
let vowelCount = 0;

// Iterate over the string
for (let i = 0; i < str_.length; i++) {
  // Check if the current character is a vowel
  if (str_.charAt(i) === "a" || str_.charAt(i) === "e" || str_.charAt(i) === "i" || str_.charAt(i) === "o" || str_.charAt(i) === "u") {
    // Increment the vowel count
    vowelCount++;
  }
}
// Print the number of vowels
console.log(`The number of vowels in the string "${str_}" is ${vowelCount}`);



//3. Check if a string is a palindrome without using functions.

alert("3. Check if a string is a palindrome without using functions.");
console.log("\n 3. Check if a string is a palindrome without using functions.");
let input = prompt("Enter string to check:");
let rev_input = "";

while (input === null) {
    console.log("String cannot be empty!");
    input = prompt("Enter string to check:");
}
if (input === null) {
    console.log('Please Enter string');
}
else {
    // Reversing string
    for (let index = input.length - 1; index >= 0; index--)
        rev_input += input.charAt(index);

    // Comparing strings
    if (input.toLocaleLowerCase() === rev_input.toLocaleLowerCase())
        console.log(`Reverse is: ${rev_input} \n Palindrome!`);
    else
        console.log(`Reverse is: ${rev_input} \n Not Palindrome!`);
}



//4. Capitalize the first letter of each word in a sentence without using functions.

alert("4. Capitalize the first letter of each word in a sentence without using functions.");
console.log("\n 4 Capitalize the first letter of each word in a sentence without using functions.");
let sentence = prompt("Enter a sentence"); // Input a sentence
let capitalizedSentence = ""; // Initialize an empty string to store the capitalized sentence
let capitalizeNext = true;  // Flag to indicate whether the next character should be capitalized
// Iterate through each character in the sentence
for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i]; // Get the current character
    
    if (char === ' ') { 
        capitalizedSentence += ' '; // Add the space to the capitalized sentence
        capitalizeNext = true; // Set the flag to capitalize the next character
    } else {
        if (capitalizeNext) { // If the flag is set to capitalize the next character
            capitalizedSentence += char.toUpperCase(); // Capitalize the character
            capitalizeNext = false; // Reset the flag
        } else {
            capitalizedSentence += char.toLowerCase(); // Keep the character as lowercase
        }
    }
}
// Output the capitalized sentence
console.log(capitalizedSentence);  



//5. Remove all spaces from a string without using functions.

alert("5. Remove all spaces from a string without using functions.");
console.log("\n 5. Remove all spaces from a string without using functions.");
let input_String = prompt("Enter a string");
let stringWithoutSpaces = ""; // Initialize an empty string to store the result without spaces
// Iterate through each character in the input string
for (let i = 0; i < input_String.length; i++) {
    const char = input_String[i]; // Get the current character
    // If the current character is not a space, add it to the result string
    if (char !== ' ') {
        stringWithoutSpaces += char;
    }
}
// Output the result string without spaces
console.log(stringWithoutSpaces);  