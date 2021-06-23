// Assignment Code
var generateBtn = document.querySelector("#generate");

// array of all possible charactes
var lowerDataSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperDataSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numDataSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialDataSet = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/"];
var myPassword = [];
// generator function
function generatePassword(){
  // get user data from prompt and confirms
  var passlength = prompt("Choose a password length with a numerical value between 8 and 128", "8");
  var passlengthInt = parseInt(passlength);
  var lowerChars = confirm("Do you want to include lower case characters?");
  var upperChars = confirm("Do you want to include upper case characters?");
  var numChars = confirm("Do you want to include numerical characters?");
  var specialChars = confirm("Do you want to include special characters?");
  
  //array of chars to allow for randomization later
  var randomChars = [lowerChars, upperChars, numChars, specialChars];

  //creation based on input
  // if (lowerChars || upperChars || numChars || specialChars){
  //   return;
  // }

  console.log(passlength);
  console.log(passlengthInt);
  console.log(lowerChars);
  console.log(upperChars);
  console.log(numChars);
  console.log(specialChars);
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

