// Assignment Code
let generateBtn = document.querySelector("#generate");
let specialChar = "~`!@#$%^&*()_-+={}[]\|;:'<,>./?";
let numberChar = "123456789";
let lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
let uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let passwordLength;
let uppercaseCheck;
let numberCheck;
let specialCheck;

//Function to ask User password length
function promptlength () {
  passwordLength = prompt("Please enter the number of characters for password length. Between 8-128 characters.");
  
  if (passwordLength<8){
    alert("Password length is too short. Must be between 8-128 characters");
    promptlength();
  } else if (passwordLength>128) {
    alert("Password length is too long. Must be between8-128 characters");
    promptlength();
  }else {
    alert("Complete the following three prompts to format your password.");
  }
  return passwordLength;
}

//Function used to ask the User if the password should include uppercase characters
function promptUppercase(){
  checkuppercase = prompt("Would you like to include uppercase characters? \n(Yes or No)");
  checkuppercase = checkuppercase.toLowerCase();

  if (checkuppercase === null ||checkuppercase ===""){
    alert("Please enter Yes or No");
    promptUppercase();

  }else if (checkuppercase === "yes" ||checkuppercase ==="y"){
    checkuppercase = true;
    return checkuppercase

  }else if (checkuppercase === "no" || checkuppercase==="n"){
    checkuppercase = false;
    return checkuppercase;

  }else {
  alert ("Please enter Yes or No");
  promptUppercase();
  }
return checkuppercase
}

//Function used to ask the User if the password should included numebers
function promptNumbers(){
  numberCheck = prompt("Would you like to include numerical characters? \n(Yes or No)");
  numberCheck.numberChar.toLowerCase();

  if (numberCheck === null || numberCheck === ""){
    alert("Please enter Yes or No.")
    promptNumbers();

  }else if (numberCheck === "yes" || numberCheck ==="y"){
    numberCheck = true; 
    return numberCheck;
  
  }else if (numberCheck === "no" || numberCheck ==="n"){
    numberCheck = false;
    return numberCheck;

  }else {
    alert("Please enter Yes or No");
    promptNumbers();
  }
  return numberCheck;
}







//Generate Password Function based on the above functions
function generatePassword () {
  promptlength();
  console.log(passwordLength);
  promptUppercase();
  console.log(uppercaseCheck)
  promptNumbers()
  console.log(numbercheck)
}



//Write password to the #password input
function writePassword() {
  let passwordA1="";
  passwordA1 = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = passwordA1;
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

