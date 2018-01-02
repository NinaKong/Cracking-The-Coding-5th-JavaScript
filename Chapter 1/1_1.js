//Method 1
function unique(str) {
	for(var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if(str.indexOf(ch) != str.lastIndexOf(ch)) {
			return false;
			break;
		} 
	}
	return  true;
}
document.write(unique("nina"));

//Method 2
function isUnique(str) { 
  var len = str.length;
  if (len > 127) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    var ch = str[i];
    if (str.indexOf(ch, i + 1) > -1) {
      return false;
    }
  }  
  return true;
}
document.write(isUnique('nina')); // false
document.write(isUnique('tes')); // true