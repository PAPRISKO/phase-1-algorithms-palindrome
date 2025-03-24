function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
function isPalindrome(word) {
  // Convert the string to lowercase to ensure case insensitivity
  word = word.toLowerCase();
  
  // Reverse the word and compare it to the original
  return word === word.split('').reverse().join('');
}

/* 
  Pseudocode:
  - Convert the input word to lowercase.
  - Split the word into an array of characters.
  - Reverse the array.
  - Join the reversed array back into a string.
  - Compare the original word with the reversed string.
  - If they are the same, return true (it is a palindrome), otherwise return false.
*/

/*
  Explanation:
  A palindrome is a word that reads the same forward and backward.
  To check if a word is a palindrome:
  1. Convert the word to lowercase to avoid case mismatch.
  2. Reverse the word and compare it with the original.
  3. If both are equal, return true; otherwise, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Test cases
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
  
  console.log("");
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
