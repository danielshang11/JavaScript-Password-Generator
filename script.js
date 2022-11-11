// Assignment code here

// get the user's requirement choices for the element of the password
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria


//varible the caracters of number, lowercase, uppercase, and specialcase for array
var numericNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// var specialCase = ['!', '"', '#', '$', '%', '&', ''', '(', ')', '*', '+', ',-./:;<=>?@[\]^_`{|}~]
var specialChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-', '[', ']', '\\', '{', '}', '|', ';', '\'', ':', '"', '<', '>', '?'];

// function pwGenerate (randomNum, randomLower, randomUpper,randomSpecial){
//   const randomChar = {
//     randomNum: getrandomNum,
//     randomLower: getrandomLower,
//     randomUpper: getrandomUpper,
//     randomSpecial: getrandomSpecial,
//   }
// }

// function getrandomLower(){
//   return String.fromCharCode(Math.floor(Math.random()*26)+97);
// }
// function getrandomUpper(){
//   return String.fromCharCode(Math.floor(Math.random()*26)+65);
// }
// function getrandomNumber(){
//   return String.fromCharCode(Math.floor(Math.random()*10)+48);
// }
// function getrandomSymbol(){
//   return String.fromCharCode(Math.floor(Math.random()*10)+48);
// }



// console.log(Math.floor(Math.random()*26)+97);



// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
var charLength = 0;

function passwordChar(){
  charLength = window.prompt( "Please let me know how many caracters you'd like to have in password? please enter the number which is between 8 and 128.", "8"
  ); if (charLength < 8){
    alert("The length you enter is too short! Please enter the length between 8 - 128");
    return passwordChar();
  } else if (charLength > 128){
    alert("The length you enter is too long! Please enter the length between 8 - 128");
    return passwordChar();
  } else if (isNaN(length)){
    alert("Must to be numbers, please enter the valid number to proceed.");
    return passwordChar();
  } else pwCriteria();
}


// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

function pwCriteria(){
  var numericNums = confirm("Do you want your password contains Numbers?");//numericNums is boolean
  var lowerCases = confirm("Do you want your password come with lower-case characters?"); //lowerCases is boolean
  var upperCases = confirm("What about upper-case?");
  var specialChars = confirm("Do you want your password including special characters?");
  
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  if (numericNums === false && lowerCases === false && upperCases === false && specialChars === false){
    alert("Please at least choose one character type to proceed.");
    return pwCriteria();
  } else{
    var arr1 = [];
    var num = 'o';

    if (numericNums){arr1 = arr1.concat(numericNum);}
    if (lowerCases){arr1 = arr1.concat(lowerCase);}
    if (upperCases){arr1 = arr1.concat(upperCase);}
    if (specialChars){arr1 = arr1.concat(specialChar);}
    var result = []

  
    // const arr1 = array[Math.floor(Math.random() * array.length)];
    for (let i = 0; i < charLength; i++) {
      num = arr1[Math.floor(Math.random() * arr1.length)];
      console.log(num);
    }
    var result  = '';
    for(var i = 1; i < 11; i += 1) {
       result = result + i;
     }
    console.log(result)
    
    console.log(arr1);
    console.log(charLength);
    console.log(num);
    
  }
  

  
}




function generatePassword(){
  passwordChar();
  // const arr1 = array[Math.floor(Math.random() * array.length)];

  

}


// function pwGenerate(){
//   const 
// }




// function pwGenerate (randomNum, randomLower, randomUpper,randomSpecial){
  
// }

// function pwGenerate(){
//   for (let i =0; i <=charLength.length; i++);
// }






// var password = document.getElementById;




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


document.querySelector("#app > section > div > div.generator > div.input-container > div.generator-input > div.password")

