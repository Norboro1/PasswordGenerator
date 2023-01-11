// Assignment code here
function generatePassword() {
  var passwordLength;
  var lowercase;
  var uppercase;
  var numeric;
  var special;

  /* prompt for password length and check for invalid inputs. Uses while loop to continue prompting until either valid input is selected or user presses "cancel" */
  passwordLength = prompt("Choose a password length from 8-128.");
  if(passwordLength != null){
    while(passwordLength < 8 || passwordLength > 128 || isNaN(+passwordLength)){
      passwordLength = prompt("Please choose a valid length between 8 and 128.");
      if(passwordLength == null){
        return "";
      }
    }
  } else { 
    return "";
  }
  console.log(passwordLength);

  /* Same as password length but to get a boolean for lowercase, uppercase, numeric, and special text options 
  This repetitive code here could surely be made into a function to save time/space but this works just as well*/
  lowercase = prompt("Would you like to include lowercase characters? (y/n)");
  if(lowercase != null){
    while(lowercase.toLowerCase() != "y" && lowercase.toLowerCase() != "n"){
      lowercase = prompt("Please enter 'y' for yes or 'n' for no");
      if(lowercase == null){
        return "";
      }
    }
  } else { 
    return "";
  }

  if(lowercase.toLowerCase() == "y"){
    lowercase = true;
  } else {
    lowercase = false;
  }

  console.log(lowercase);

  uppercase = prompt("Would you like to include uppercase characters? (y/n)");
  if(uppercase != null){
    while(uppercase.toLowerCase() != "y" && uppercase.toLowerCase() != "n"){
      uppercase = prompt("Please enter 'y' for yes or 'n' for no");
      if(uppercase == null){
        return "";
      }
    }
  } else { 
    return "";
  }

  if(uppercase.toLowerCase() == "y"){
    uppercase = true;
  } else {
    uppercase = false;
  }

  console.log(uppercase);

  numeric = prompt("Would you like to include numeric characters? (y/n)");
  if(numeric != null){
    while(numeric.toLowerCase() != "y" && numeric.toLowerCase() != "n"){
      numeric = prompt("Please enter 'y' for yes or 'n' for no");
      if(numeric == null){
        return "";
      }
    }
  } else { 
    return "";
  }

  if(numeric.toLowerCase() == "y"){
    numeric = true;
  } else {
    numeric = false;
  }

  console.log(numeric);

  special = prompt("Would you like to include special characters? (y/n)");
  if(special != null){
    while(special.toLowerCase() != "y" && special.toLowerCase() != "n"){
      special = prompt("Please enter 'y' for yes or 'n' for no");
      if(special == null){
        return "";
      }
    }
  } else { 
    return "";
  }

  if(special.toLowerCase() == "y"){
    special = true;
  } else {
    special = false;
  }

  console.log(special);

  /* Include response incase user does not select 'y' for any character options */
  if(!lowercase && !uppercase && !numeric && !special){
    return "Cannot generate a passsword with no characters.";
  }

  /* declare empty strings to store generated password and which characters to include*/
  var result = '';
  var characters = '';

  /* include characters based on user choice */
  if(lowercase){
    characters += 'abcdefghijklmnopqrstuvwxyz';
  }
  if(uppercase){
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if(numeric){
    characters += '0123456789';
  }
  if(special){
    characters += '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  }

  console.log(characters);

  /* generate password using loop, based on selected password length, and Math.Random function to select random characters from the 'characters' string and add to result. */
  for(i = 0; i<passwordLength; i++){
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
