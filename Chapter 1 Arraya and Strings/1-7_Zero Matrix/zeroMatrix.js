function zeroMatrix(matrix) {
    var rows = matrix.length;
    var cols = matrix[0].length;
   var rowsToZero = []; 
   var colsToZero = [];
    
    //Store the row and column index with value 0
    for(var row = 0; row < rows; row++){
        for(var col = 0; col < cols; col++) {
            if(matrix[row][col] == 0) {
                rowsToZero[row] = true;
                colsToZero[col] = true;
            }
        }
    }
    
    //Set matrix[i][j] to 0 if either row i or column j has a 0
    for(var row = 0; row < rows; row++){
        for(var col = 0; col < cols; col++) {
            if(rowsToZero[row] || colsToZero[col]) {
                matrix[row][col] = 0;
            }
        }
    }
    return matrix;
}
// Testing
var testMatrix = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
];

document.write("<br/>" + 'before');
document.write("<br/>" + testMatrix);

document.write("<br/>" + 'after');
document.write("<br/>" + zeroMatrix(testMatrix));
