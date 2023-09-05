//create variables that hold arrays of different types of characters

//need a function called generate password



var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "~!@#$%^&*()_+-=[]\{}|;':,./<>?";
var numbers = "1234567890";

var randPassword = "";


// var numStart = 1;
// var numEnd = 127;
// var numbers = [];
// for (var i = numStart; i <= numEnd; i++) {
//   numbers.push(i);
// }

// console.log(numbers);




var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword)

var generatePassword = function() {
  var userStart = window.prompt("What length of password do you want? Min: 8 Max: 127");
  if (!userStart) {
    return;
  }
  
  
  var passLength = [];
  for (var i = 8; i <= 127; i++) {
    passLength.push(i);
    
  }
  window.alert("Password length will be " + passLength[i]);



  var incLowerCase = window.prompt("Do you want to add lowercase letters?");
  if (incLowerCase == true) {
    window.alert("Include lowercase letters.")
  } else {
    window.alert("No lowercase letters.")
  }

  var incUpperCase = window.prompt("Do you want to add uppercase letters?");
  if (incUpperCase == true) {
    window.alert("Include uppercase letters.");
  } else {
    window.alert("No upercase letters.");
  }

  var incSpecial = window.prompt("Do you want to add special characters?");
  if (incSpecial == true) {
    window.alert("Include special characters.");
  } else {
    window.alert("No special characters.");
  }

  var incNums = window.prompt("Do you want to add numbers?");
  if (incNums == true) {
    window.alert("Include numbers.");
  } else {
    window.alert("No numbers.");
  }




  // if(passLength === i) {
  
  // } else {
  //   window.alert("Invalid");
  // }

  
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
