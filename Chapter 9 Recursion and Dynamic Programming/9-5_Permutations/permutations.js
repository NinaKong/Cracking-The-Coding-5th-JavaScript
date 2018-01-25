function getPerms(str) {
    var permutations = [];
    var words = [];
    if(str.length == 0) {
        permutations.push("");
        return permutations;
    }
    var first = str.charAt(0);//get the first char
    var reminder = str.slice(1);//remove the first char
    words = getPerms(reminder);
    for(var i = 0; i < words.length; i++) {
        for(var j = 0; j <= words[i].length; j++) {
            var s = insertCharAt(words[i], first, j);
            permutations.push(s);
        }
    }
    return permutations;
}
function insertCharAt(word, c, i) {
    var start = word.slice(0, i);
    var end = word.slice(i);
    var result = start + c + end;
    return result;
}
console.log(getPerms("abc"));