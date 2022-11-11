// Assignment code here


var numericNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-', '[', ']', '\\', '{', '}', '|', ';', '\'', ':', '"', '<', '>', '?'];
var charLength = 0;
var password = "";


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
  

  if (numericNums === false && lowerCases === false && upperCases === false && specialChars === false){
    alert("Please at least choose one character type to proceed.");
    return pwCriteria();
    } else{
      var arr1 = [];
      var num = 'o';
      var answer = [];

    if (numericNums){arr1 = arr1.concat(numericNum);}
    if (lowerCases){arr1 = arr1.concat(lowerCase);}
    if (upperCases){arr1 = arr1.concat(upperCase);}
    if (specialChars){arr1 = arr1.concat(specialChar);}

    for (let i = 0; i < charLength; i++) {
      num = arr1[Math.floor(Math.random() * arr1.length)];
      answer.push(num);
    };
    console.log(answer);

    password = answer.join('');
  }
    
}

function generatePassword() {
  passwordChar();
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


document.querySelector("#app > section > div > div.generator > div.input-container > div.generator-input > div.password")

