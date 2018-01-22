function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}
function BinarySearchTree(){
  this.root = null;
}

function createMinimalBST(arr, start, end) {
  if(end < start) {
    return null;
  }
  var mid = Math.floor((start + end) / 2);
  var n = new Node(arr[mid]);
  n.left = createMinimalBST(arr, start, mid - 1);
  n.right = createMinimalBST(arr, mid + 1, end);
  return n;
} 
function MinimalBST(arr) {
  return createMinimalBST(arr, 0 ,arr.length - 1);
} 
var arr = [1, 2, 3, 4, 5, 6];
console.log("mininal BST: " + MinimalBST(arr));