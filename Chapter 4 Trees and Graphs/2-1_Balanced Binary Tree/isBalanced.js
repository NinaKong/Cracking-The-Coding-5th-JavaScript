function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}
function BinarySearchTree(){
  this.root = null;
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

function minDepth(node) {
  if (typeof node === 'undefined') {
    return 0;
  }
  if (node == null) {
    return 0;
  }
  var minLeft = minDepth(node.left);
  var minRight = minDepth(node.right);
  var resultMin = Math.min(minLeft, minRight);
  resultMin += 1;
  return resultMin;
}

function maxDepth(node) {
  if (typeof node === 'undefined') {
    return 0;
  }
  if (node == null) {
    return 0;
  }
  var maxLeft = maxDepth(node.left);
  var maxRight = maxDepth(node.right);
  var resultMax = Math.max(maxLeft, maxRight);
  resultMax += 1;
  return resultMax;
}

function isBinaryTreeBalanced(root) {
  if (typeof root === 'undefined') {
    return undefined;
  }
  return maxDepth(root) - minDepth(root) <= 1;
}
 
var bst = new BinarySearchTree();
bst.push(3);
bst.push(2);
bst.push(4);
bst.push(1);
bst.push(5);
console.log("min: " + minDepth(bst.root));
console.log("max: " + maxDepth(bst.root));
console.log("balanced: " + isBinaryTreeBalanced(bst.root));