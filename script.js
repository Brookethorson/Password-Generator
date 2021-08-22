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
 uppercaseCheck = prompt("Would you like to include uppercase characters? Selecting No will produce an password that only contains lowercase characters. \n(Yes or No)");
  uppercaseCheck = uppercaseCheck.toLowerCase();

  if (uppercaseCheck === null ||uppercaseCheck ===""){
    alert("Please enter Yes or No");
    promptUppercase();

  }else if (uppercaseCheck === "yes" ||uppercaseCheck ==="y"){
    uppercaseCheck = true;
    return uppercaseCheck

  }else if (uppercaseCheck === "no" || uppercaseCheck==="n"){
    uppercaseCheck = false;
    return uppercaseCheck;

  }else {
  alert ("Please enter Yes or No");
  promptUppercase();
  }
return uppercaseCheck
}

//Function used to ask the User if the password should included numbers
function promptNumbers(){
  numberCheck = prompt("Would you like to include numerical characters? \n(Yes or No)");
  numberCheck = numberCheck.toLowerCase();

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

////Function used to ask the User if the password should included special charcters
function promptSpecial(){
  specialCheck = prompt("Would you like to include special characters? \n(Yes or No)");
  specialCheck = specialCheck.toLowerCase();

  if (specialCheck === null || specialCheck === ""){
    alert("Please enter Yes or No.")
    promptSpecial();

  }else if (specialCheck === "yes" || specialCheck ==="y"){
    specialCheck = true; 
    return specialCheck;
  
  }else if (specialCheck=== "no" || specialCheck ==="n"){
    specialCheck = false;
    return specialCheck;

  }else {
    alert("Please enter Yes or No");
    promptSpecial();
  }
  return specialCheck;
}





//Generate Password Function 
function generatePassword() {
  promptlength();
  console.log(passwordLength);
  promptUppercase();
  console.log(uppercaseCheck)
  promptNumbers()
  console.log(numberCheck)
  promptSpecial()
  console.log(specialCheck)
  
  let characters = lowercaseChar;
  let password = "";
  if (uppercaseCheck && numberCheck && specialCheck){
  characters +=uppercaseChar + numberChar + specialChar;

  }else if (uppercaseCheck && numberCheck) {
  characters += uppercaseChar + numberChar;

  }else if (numberCheck && specialCheck){
  characters += numberChar + specialChar;

  }else if (uppercaseCheck && specialCheck){
  characters += uppercaseChar + specialChar;

  }else if (uppercaseCheck){
  characters += uppercaseChar;

  }else if (numberCheck){
  characters += numberChar;

  }else if (specialCheck){
  characters += specialChar;

  }else{
  characters ===lowercaseChar;
  }

  for(let i = 0; i <passwordLength; i++){
  password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password
}



//Write password to input field 
function writePassword() {
  let password1="";
  password1 = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password1;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

