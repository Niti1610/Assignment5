//1. Find the longest word in a sentence without using functions.

alert("1. Find the longest word in a sentence without using functions.");
console.log(" \n 1. Find the longest word in a sentence without using functions.");
let sentence_ = prompt("Enter a sentence"); //input a sentence
let longestWord = "";
let currentWord = "";
// Iterate over the string
for (let i = 0; i < sentence_.length; i++) {
  // Get the current character
  const char = sentence_[i];
  if (char === " ") {
    if (currentWord.length > longestWord.length) {
      // Update the longest word to be the current word
      longestWord = currentWord;
    }
    // Clear the current word
    currentWord = "";
  } else {
    // Add the current character to the current word
    currentWord += char;
  }
}
// Check the last word
if (currentWord.length > longestWord.length) {
  // Update the longest word to be the last word
  longestWord = currentWord;
}
console.log(longestWord); //give the output of longest word



//2. Check if two strings are anagrams of each other without using functions.

alert("2. Check if two strings are anagrams of each other without using functions.");
console.log("\n 2. Check if two strings are anagrams of each other without using functions.");
let str1 = prompt("Enter a string 1:");
let str2 = prompt("Enter a string 2:");

// Remove spaces and convert to lowercase
str1 = str1.replace(/\s/g, '').toLowerCase();
str2 = str2.replace(/\s/g, '').toLowerCase();

let areAnagrams = true; // Assume they are anagrams initially

if (str1.length !== str2.length) {
  areAnagrams = false; // If lengths are different, they can't be anagrams
} else {
  const charCount = {};

  // Count occurrences of characters in the first string
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Decrement count for characters in the second string
  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (!charCount[char]) {
      areAnagrams = false; // If a character isn't present in str1, they can't be anagrams
      break; // Exit the loop early
    }
    charCount[char]--;
  }

  // Check if all character counts are zero
  for (const char in charCount) {
    if (charCount[char] !== 0) {
      areAnagrams = false; // If any character count is not zero, they can't be anagrams
      break; // Exit the loop early
    }
  }
}

if (areAnagrams) {
  console.log('The strings are anagrams.');
} else {
  console.log('The strings are not anagrams.');
}



//3. Replace all occurrences of a given substring with another substring in a string without using functions.

alert("//3. Replace all occurrences of a given substring with another substring in a string without using functions.");
console.log("\n //3. Replace all occurrences of a given substring with another substring in a string without using functions.");
let originalString = prompt("Enter a original string: //for example : hello world hello");  //for example : hello world hello
let oldSubstring = prompt("Enter a old string://for example : hello");         //for example : hello
let newSubstring = prompt("Enter a new string string://for example : hi");  //for example : hi
let replacedString = '';

let i = 0;

while (i < originalString.length) {
    let match = true;

    for (let j = 0; j < oldSubstring.length; j++) {
        if (originalString[i + j] !== oldSubstring[j]) {
            match = false;
            break;
        }
    }

    if (match) {
        replacedString += newSubstring;
        i += oldSubstring.length;
    } else {
        replacedString += originalString[i];
        i++;
    }
}

console.log(replacedString); // Output: 'hi world hi'



//4. Truncate a string to a specified length and add "..." at the end if the string is longer than the specified length without using functions.

alert("4. Truncate a string to a specified length and add (...) at the end if the string is longer than the specified length without using functions");
console.log("\n  4. Truncate a string to a specified length and add (...) at the end if the string is longer than the specified length without using functions.");
let original_String = prompt('Enter a original string ://for ex: This is a long string that needs to be truncated');
let maxLength = 20;
let truncatedString = '';

if (original_String.length <= maxLength) {
    truncatedString = original_String;
} else {
    for (let i = 0; i < maxLength; i++) {
        truncatedString += original_String[i];
    }
    truncatedString += '...';
}

 console.log(truncatedString); // Output: 'This is a long stri...'



//5. Determine if a string has balanced parentheses (e.g., "(()())" is balanced, but "())(" is not) without using functions.

alert("5. Determine if a string has balanced parentheses (e.g., (()()) is balanced, but ())( is not) without using functions.");
console.log("5.\n Determine if a string has balanced parentheses (e.g., (()()) is balanced, but ())(is not) without using functions.");
let inputString = prompt("Enter a string with parentheses:"); // the user to input a string with parentheses
// Initialize counters for open and close parentheses
let openCount = 0;
let closeCount = 0;
// Iterate through each character in the input string
for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === '(') {
        openCount++;  // Increment open parentheses count when encountering '('
    } else if (inputString[i] === ')') {
        closeCount++;  // Increment close parentheses count when encountering ')'
        
        // Check if there's a closing parenthesis without a corresponding opening parenthesis
        if (closeCount > openCount) {
            console.log("Unbalanced parentheses");
            break;  // Exit the loop if parentheses are unbalanced
        }
    }
}
// Compare the counts of open and close parentheses to determine balance
if (openCount === closeCount) {
    console.log("Balanced parentheses");
} else {
    console.log("Unbalanced parentheses");
}
