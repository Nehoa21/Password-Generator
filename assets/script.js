//create variables that hold arrays of different types of characters

//need a function called generate password

var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "~!@#$%^&*()_+-=[]\{}|;':,./<>?";
var numbers = "1234567890";

var randPassword = [];

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword)

var generatePassword = function() {
 
  var passLength = window.prompt("What length of password do you want? Min: 8 Max: 127");

  if (passLength >= 8 && passLength <= 127) {
    window.alert("Password length will be " + passLength + " characters long.");
  } else {
    window.alert("Invalid amount, choose again.");
    return;
  }

  var incLowerCase = window.confirm("Do you want to add lowercase letters? OK: yes, Cancel: no");
  if (incLowerCase == true) {
    var lower = Math.floor(Math.random() * lowerCaseLetters.length);
    window.alert("Include lowercase letters.")
  } else {
    window.alert("No lowercase letters.")
  }

  var incUpperCase = window.confirm("Do you want to add uppercase letters?");
  if (incUpperCase == true) {
    var upper = Math.floor(Math.random() * upperCaseLetters.length);
    window.alert("Include uppercase letters.");
  } else {
    window.alert("No uppercase letters.");
  }

  var incSpecial = window.confirm("Do you want to add special characters?");
  if (incSpecial == true) {
    var spec = Math.floor(Math.random() * specialChar.length);
    window.alert("Include special characters.");
  } else {
    window.alert("No special characters.");
  }

  var incNums = window.confirm("Do you want to add numbers?");
  if (incNums == true) {
    var nums = Math.floor(Math.random() * numbers.length);
    window.alert("Include numbers.");
  } else {
    window.alert("No numbers.");
  }

  window.alert(randPassword.push(lower, upper, spec, nums, passLength));
}

  

// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
