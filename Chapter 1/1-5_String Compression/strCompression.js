function compression(str) {
    var compressed = "";
    var count = 1;
    var ch1 = str.charAt(0);
    var result;
    for(var i = 1; i < str.length; i++) {
        var ch2 = str.charAt(i);
        if(ch1 == ch2) {
            count++;
        } else {
            compressed += ch1 + "" + count;
            ch1 = str.charAt(i);
            count = 1;
        }
    }
    result = compressed + ch1 + count;
    console.log(result + "<br/>");
    console.log(str + "<br/>");
    console.log(result.length + "<br/>");
    console.log(str.length + "<br/>");
    if(result.length >= str.length) {
        return str;
    } else {
        return result;
    }
}
document.write(compression("aabcccccaaa"));
document.write("<br/>" + compression("abbcaaa"));