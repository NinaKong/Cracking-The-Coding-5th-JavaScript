function rotateMatrix(arr, n) {
    for(var layer = 0; layer < n/2; layer++) {
        var first = layer;
        var last = n - 1 - layer;
        for(var i = first; i < last; i++) {
            var offset = i - first;
            //save top
            var top = arr[first][i];
            //left->top
            //last-offset since rotate the index has change from 1,2,3,4 to 4,3,2,1
            arr[first][i] = arr[last-offset][first];
            //bottom->left
            arr[last-offset][first] = arr[last][last-offset];
            //right->bottom
            arr[last][last-offset]=arr[i][last];
            //top->right
            arr[i][last] = top;
        }
    }
    return arr;
}
var testMatrix = [
[1, 2, 3, 4],
[0, 1, 2, 3],
[0, 0, 1, 2],
[1, 0, 0, 1]
];
document.write(rotateMatrix(testMatrix, 4));