function findElement(matrix, ele) {
	var row = 0;
	var col = matrix[0].length - 1;
	while(row < matrix.length && col >= 0) {
		if(matrix[row][col] == ele) {
			return true;
		} else if(matrix[row][col] > ele) {
			col--;
		} else {
			row++;
		}
	}
	return false;
}