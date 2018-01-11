function isRotation(s1, s2) {
  var len = s1.length;
  if(s2.length == len && len > 0) {
    var s1s1 = s1.concat(s1);//s1 + s1
    return isSubstring(s1s1, s2);
  }
  return false;
}