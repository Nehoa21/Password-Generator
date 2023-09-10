//create variables that hold arrays of different types of characters
//need a function called generate password
//need a function to get random integers
//2 empty arrays to store the random integers

//Arrays for characters to include in password
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialChar = ["~","!","@","#","$","%","^","&","*","(",")","_","+","-","=","[","]","|",";","'",":",",",".","/","<",">","?"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];

//function for the window prompts
var windPrompts = function (){
  var passLength = window.prompt("What length of password do you want? Min: 8 Max: 127");
  if (passLength >= 8 && passLength <= 127) {
    window.alert("Password length will be " + passLength + " characters long.");
  } else {
    window.alert("Invalid amount, choose again.");
    return;
  }

  var incLowerCase = window.confirm("Do you want to add lowercase letters? OK: yes, Cancel: no");
  if (incLowerCase === true) {
    window.alert("Include lowercase letters.")
  } else {
    window.alert("No lowercase letters.")
  }

  var incUpperCase = window.confirm("Do you want to add uppercase letters?");
  if (incUpperCase === true) {
    window.alert("Include uppercase letters.");
  } else {
    window.alert("No uppercase letters.");
  }

  var incSpecial = window.confirm("Do you want to add special characters?");
  if (incSpecial === true) {
    window.alert("Include special characters.");
  } else {
    window.alert("No special characters.");
  }

  var incNums = window.confirm("Do you want to add numbers?");
  if (incNums === true) {
    window.alert("Include numbers.");
  } else {
    window.alert("No numbers.");
  }
}

//return booleans for window prompts, then make 'if' for them to include in get random function
var userChoiceTypes = function() {
  var userChoices = [];
  if (windPrompts.incLowerCase || windPrompts.incUpperCase || windPrompts.incSpecial || windPrompts.incNums) {
    userChoices.push;
  }  
}

var randChar = function(){
  var randIndex = [];
  var randInts = [];
  randIndex = math.floor(math.random() * passLength.length);
  randInts = userChoices[randIndex];

  return randInts;
}

//function to start the password generator, from start to finish
var generatePassword = function() {
  windPrompts();
  var choices = userChoiceTypes();
  var potentChoices = [];
  var finalPicks = [];
  
  //error with making the array
  if (choices.incLowerCase) {
    potentChoices = potentChoices.concat(lowerCaseLetters);
    finalPicks.push(randChar(lowerCaseLetters))
  }

  if (choices.userChoiceTypes(incUpperCase)) {
    potentChoices = potentChoices.concat(upperCaseLetters);
    finalPicks.push(randChar(upperCaseLetters))
  }

  if (choices.userChoiceTypes(incSpecial)) {
    potentChoices = potentChoices.concat(specialChar);
    finalPicks.push(randChar(specialChar))
  }

  if (choices.userChoiceTypes(incNums)) {
    potentChoices = potentChoices.concat(numbers);
    finalPicks.push(randChar(numbers))
  }

  console.log()
  return finalPicks;
}
  

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
