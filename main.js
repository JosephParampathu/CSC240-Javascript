/*
Name: Joseph Parampathu
Date: 06/16/2021
Assignment Title: Week 6 Programming Lab
*/
function validateForm()
{
  //This initializes the variables
  var userNumber = ""; var charOne = ""; var charTwo = "";
  var charThree = ""; var charFour = ""; var charFive = "";
  var charSix = ""; var charSeven = ""; var charEight = "";
  var charNine = ""; var charTen = ""; var charEleven = "";
  var charTwelve = ""; var charThirteen = "";
  //This grabs the value of the phone number entry
  var userNumber = document.getElementById('phonenumber').value;
  //These assign each character to a substring
  charOne = userNumber.substr(0,1);
  charTwo = parseInt(userNumber.substr(1,1));
  charThree = parseInt(userNumber.substr(2,1));
  charFour = parseInt(userNumber.substr(3,1));
  charFive = userNumber.substr(4,1);
  charSix = parseInt(userNumber.substr(5,1));
  charSeven = parseInt(userNumber.substr(6,1));
  charEight = parseInt(userNumber.substr(7,1));
  charNine = userNumber.substr(8,1);
  charTen = parseInt(userNumber.substr(9,1));
  charEleven = parseInt(userNumber.substr(10,1));
  charTwelve = parseInt(userNumber.substr(11,1));
  charThirteen = parseInt(userNumber.substr(12,1));

//This performs the validation

  if(charOne != "(" || isNaN(charTwo)|| isNaN(charThree) || isNaN(charFour)
      || charFive != ")" || isNaN(charSix) || isNaN(charSeven) || isNaN(charEight)
      || charNine != "-" || isNaN(charTen) || isNaN(charEleven) || isNaN(charTwelve)
      || isNaN(charThirteen))
    { window.alert("Please use the format (XXX)XXX-XXXX")}
  else
    {window.alert("That is a valid phone number!")}
}

function validateUserName()
{
  //This initializes the variables
  var userName = "";
  //This grabs the value of the user name entry
  var userName = document.getElementById('username').value;
  //This verifies the length of the username
  if (userName.length > 20 || userName.length < 4)
    window.alert("Username must be between 4 and 20 characters.")
  else
    window.alert("Valid username!")
}

function validatePassword()
{
  //This initializes the variables
  var pass = ""; var charOne = ""; var charTwo = "";
  var charThree = ""; var charFour = ""; var charFive = "";
  var charSix = ""; var charSeven = ""; var charEight = "";
  var charNine = ""; var charTen = ""; var charEleven = "";
  var charTwelve = "";

  //This grabs the value of the password entry
  var pass = document.getElementById('password').value;

  //These assign each character to a substring
  charOne = pass.substr(0,1);
  charTwo = pass.substr(1,1);
  charThree = pass.substr(2,1);
  charFour = pass.substr(3,1);
  charFive = pass.substr(4,1);
  charSix = pass.substr(5,1);
  charSeven = pass.substr(6,1);
  charEight = pass.substr(7,1);
  charNine = pass.substr(8,1);
  charTen = pass.substr(9,1);
  charEleven = pass.substr(10,1);
  charTwelve = pass.substr(11,1);

  //This verifies the length of the password
  if (pass.length > 20 || pass.length < 4)
    window.alert("Password must be between 4 and 12 characters.")

    //This verifies password contains at least one digit
  else if (isNaN(parseInt(charOne)) && isNaN(parseInt(charTwo)) && isNaN(parseInt(charThree)) &&
      isNaN(parseInt(charFour)) && isNaN(parseInt(charFive)) && isNaN(parseInt(charSix)) &&
      isNaN(parseInt(charSeven)) && isNaN(parseInt(charEight)) && isNaN(parseInt(charNine)) &&
      isNaN(parseInt(charTen)) && isNaN(parseInt(charEleven)) && isNaN(parseInt(charTwelve)))
      window.alert("Password must contain at least one digit")

    //This verifies that the password has at least one upper case letter
  else if (!pass.includes("A") && !pass.includes("B") && !pass.includes("C") && !pass.includes("D") &&
            !pass.includes("E") && !pass.includes("F") && !pass.includes("G") && !pass.includes("H") &&
            !pass.includes("I") && !pass.includes("J") && !pass.includes("K") && !pass.includes("L") &&
            !pass.includes("M") && !pass.includes("N") && !pass.includes("O") && !pass.includes("P") &&
            !pass.includes("Q") && !pass.includes("R") && !pass.includes("S") && !pass.includes("T") &&
            !pass.includes("U") && !pass.includes("V") && !pass.includes("W") && !pass.includes("X") &&
            !pass.includes("Y") && !pass.includes("Z"))
            {window.alert("Password must contain at least one uppercase letter")}
            //This verifies that the password has at least one lower case letter
  else if (!pass.includes("a") && !pass.includes("b") && !pass.includes("c") && !pass.includes("d") &&
            !pass.includes("e") && !pass.includes("f") && !pass.includes("g") && !pass.includes("h") &&
            !pass.includes("i") && !pass.includes("j") && !pass.includes("k") && !pass.includes("l") &&
            !pass.includes("m") && !pass.includes("n") && !pass.includes("o") && !pass.includes("p") &&
            !pass.includes("q") && !pass.includes("r") && !pass.includes("s") && !pass.includes("t") &&
            !pass.includes("u") && !pass.includes("v") && !pass.includes("w") && !pass.includes("x") &&
            !pass.includes("y") && !pass.includes("z"))
            {window.alert("Password must contain at least one lowercase letter")}
            //This verifies that the password has at least one of the special characters
  else if (!pass.includes("&") && !pass.includes("@") && !pass.includes("#") && !pass.includes("!"))
            {window.alert("Password must contain at least one of these four symbols: & # @ !")}
//If all conditions are met, this shows the password is valid
  else
    window.alert("Valid password!")
}
