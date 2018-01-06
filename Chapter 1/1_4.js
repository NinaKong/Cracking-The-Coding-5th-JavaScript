//Method 1
function replaceSpace(str) {
  var replaced = str.split(' ').join('%20');
  return replaced;
}
document.write(replaceSpace("nina meow meow"));

//Method 2
function replaceSpace2(str) {
  var result = "";
  for(var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    if(ch == " ") {
      ch = "%20"; 
    }
    result += ch;
  }

  return result;
}
document.write(replaceSpace2("nina meow meow"));