
//Method 1
function reverseString(str) {
  var result = str.split("").reverse().join("");
  return result;
}

document.write(reverseString(" N ina "));

//Method 2
function reverseString2(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
    newString += str[i];      
  }
  return newString;
}
document.write(reverseString2("hello"));

//Method 3
function reverseString3(str) {
  if (str === "") return "";  
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}
document.write(reverseString3("hello"));