function paintFill(screen, x, y, nColor) {
    return paintFillMethod(screen, x, y, screen[x][y], nColor);
}
function paintFillMethod(screen, x, y, oColor, nColor) {
    if(x < 0 || x >= screen.length || y < 0 || y >= screen[0].length) {
        return false;
    }
    if(screen[x][y] == oColor){
        screen[x][y] == nColor;
        paintFillMethod(screen, x-1, y, oColor, nColor);//left
        paintFillMethod(screen, x+1, y, oColor, nColor);//right
        paintFillMethod(screen, x, y-1, oColor, nColor);//top
        paintFillMethod(screen, x, y+1, oColor, nColor);//bottom
    }
    return true;
}

var b = '#000000';
var w = '#ffffff';
var g = '#00ff00';

var testScreen = [
  [b, b],
  [b, w],
];
var testScreen2 = [
  [b, w, w, b],
  [b, w, w, b],
  [b, b, w, b],
  [b, w, w, b]
];
console.log(paintFill(testScreen, 1, 1, g));
console.log(testScreen);