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

//Password Length Function
function asklength () {
  passwordLength = prompt("Please enter the number of characters for password length. Between 8-128 characters.");
  
  if (passwordLength<8){
    alert("Password length is too short. Must be between 8-128 characters");
    asklength();
  } else if (passwordLength>128) {
    alert("Password length is too long. Must be between8-128 characters");
    asklength();
  }else {
    alert("Complete the following three prompts to format your password.");
  }
  return passwordLength;
}

//Uppercase inquiry Function
function askUppercase(){
  checkuppercase = prompt("Would you like to include uppercase characters? \n(Yes or No)");
  checkuppercase = checkuppercase.toLowerCase();

  if (checkuppercase === null ||checkuppercase ===""){
    alert("Please enter Yes or No");
    askUppercase();

  }else if (checkuppercase === "yes" ||checkuppercase ==="y"){
    checkuppercase = true;
    return checkuppercase

  }else if (checkuppercase === "no" || checkuppercase==="n"){
    checkuppercase = false;
    return checkuppercase

  }else {
  alert ("Please enter Yes or No");
  askUppercase();
  }
return checkuppercase
}

//Generate Password Function based on the above functions
function generatePassword () {
  asklength();
  console.log(passwordLength);
  askUppercase();
  console.log(uppercaseCheck)
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

