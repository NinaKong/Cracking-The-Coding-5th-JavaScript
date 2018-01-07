//Method 1
function isPermutation(str1, str2) {
  if(str1.length != str2.length) {
    return false;
  }
  var sortStr1 = str1.split("").sort().join("");
  var sortStr2 = str2.split("").sort().join("")
  return sortStr1 === sortStr2;
}
// Time complexity: O(nlogn)
document.write(isPermutation("Nina Meow", "MeN iowna"));

//Method 2
// Time complexity: O(n)

function isPermutation2(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    var letters = {},
        length = str1.length;

    for (var i = 0; i < length; i++) {
        var l = str1.charAt(i);
        var temp = letters[l];
        //isNaN(undefined) //true
        if(isNaN(temp)) {
            letters[l] = 1;
        } else {
            letters[l] = letters[l] + 1;
        }
    }

    for (var j = 0; j < length; j++) {
        var m = str2.charAt(j);
        letters[m]--;
    }

    for (var z in letters) {
        if (letters[z] !== 0) {
            return false;
        }
    }

    return true;
}

document.write(isPermutation2("ni na", "na ni")); // true