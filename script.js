// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passLength;
  var includeUpperCase;
  var includeLowerCase;
  var includeNumbers;
  var includeSpecialChars;

  do {
    passLength = prompt("How many characters would you like for your password (8-128)?");

    if (isNaN(passLength) || passLength < 8 || passLength > 128) {
      alert("Please enter a valid number between 8 and 128.");
    }
  } while (isNaN(passLength) || passLength < 8 || passLength > 128);

  includeUpperCase = confirm("Would you like to include uppercase letters?");
  includeLowerCase = confirm("Would you like to include lowercase letters?");
  includeNumbers = confirm("Would you like to include numbers?");
  includeSpecialChars = confirm("Would you like to include special characters?");

  return {
    length: passLength,
    upperCase: includeUpperCase,
    lowerCase: includeLowerCase,
    numbers: includeNumbers,
    specialChars: includeSpecialChars
  };

}
console.log(getPasswordOptions());

// Function for getting a random element from an array
function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  // Testing the getRandom function
  console.log(getRandom(upperCasedCharacters)); // Get a random uppercase character
  console.log(getRandom(lowerCasedCharacters)); // Get a random lowercase character
  console.log(getRandom(numericCharacters)); // Get a random numeric character
  console.log(getRandom(specialCharacters)); // Get a random special character

// Function to generate password with user input

function generatePassword() {
  var password = "";
  var options = getPasswordOptions();

  var allCharacters = [];

  if (options.upperCase) {
    allCharacters = allCharacters.concat(upperCasedCharacters);
  }

  if (options.lowerCase) {
    allCharacters = allCharacters.concat(lowerCasedCharacters);
  }

  if (options.numbers) {
    allCharacters = allCharacters.concat(numericCharacters);
  }

  if (options.specialChars) {
    allCharacters = allCharacters.concat(specialCharacters);
  }

  while (password.length < options.length) {
    var randomCharacter = getRandom(allCharacters);
    password += randomCharacter;
  }

  return password;
};
console.log(generatePassword());

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);