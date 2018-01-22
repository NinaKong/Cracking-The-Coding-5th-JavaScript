function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}
function BinarySearchTree(){
  this.root = null;
}
function BSTSize(node) {
    if (node) {
        return 1 + BSTSize(node.left) + BSTSize(node.right);
    }
    return 0;
}
BinarySearchTree.prototype.push = function(val){
   var root = this.root;

   if(!root){
      this.root = new Node(val);
      return;
   }

   var currentNode = root;
   var newNode = new Node(val); 

   while(currentNode){
      if(val < currentNode.value){
          if(!currentNode.left){
             currentNode.left = newNode;
             break;
          }
          else{
             currentNode = currentNode.left;
        }
     }
     else{
         if(!currentNode.right){
            currentNode.right = newNode;
            break;
         }
         else{
            currentNode = currentNode.right;
         }
     }
  }
}
//Method 1 In order traversal
function copyBST(root, array) {
  var index = 0;
  if(root == null) return;
  copyBST(root.left, array);
  array[index] = root.value;
  index++;
  copyBST(root.right, array);
}

function CheckBST(root, size) {
  var array = new Array(size);
  copyBST(root, array);
  for(var i  = 1; i < array.length; i++) {
    if(array[i] < array[i - 1]) return false;
  }
  return true;
}
//Method 2 Min/Max solution
function CheckBST2(node) {
  return checkEachTree(node, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}
function checkEachTree(tree, min, max) {
  if(tree == null) {
    return true;
  } 
  if(tree.value <= min ||tree.value > max) {
    return false;
  }
  if(!checkEachTree(tree.left, min, tree.value)||!checkEachTree(tree.right, tree.value, max)) {
    return false;
  }
  return true;
}

var bst = new BinarySearchTree();
bst.push(3);
bst.push(2);
bst.push(4);
bst.push(1);
bst.push(5);
var size = BSTSize(bst.root);
console.log("check BST: " + CheckBST(bst.root, size));
console.log("check BST2: " + CheckBST2(bst.root));