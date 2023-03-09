// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let passwordLength = 0; // Variable to store password length

// Function to prompt user for password options and generate password
function getPasswordOptions() {
  let choiceArr = []; // Empty array to store selected characters
  passwordLength = prompt(
    "The number of characters you would like in your password? (between 10 - 64 characters)"
  );
  if (passwordLength < 10 || passwordLength > 64 || isNaN(passwordLength)) {
    alert("Please enter a number between 10 and 64");
    return;
  }
  if (confirm("Would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCasedCharacters);
  }
  if (confirm("Would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCasedCharacters);
  }
  if (confirm("Would you like numeric characters in your password?")) {
    choiceArr = choiceArr.concat(numericCharacters);
  }
  if (confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharacters);
  }
  if (choiceArr.length === 0) {
    alert("Please select at least one character type");
    return;
  }
  return generatePassword(choiceArr);
}
// Function to prompt user for password options and generate password
// Function for getting a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword(choiceArr) {
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += getRandom(choiceArr);
  }
  return password;
}

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = getPasswordOptions();
  if (password) {
    const passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
