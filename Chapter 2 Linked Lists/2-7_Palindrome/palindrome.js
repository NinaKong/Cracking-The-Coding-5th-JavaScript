/* LinkedList */
function LinkedList() { 
  var length = 0; 
  var head = null; 
}
function Node(value){
    this.value = value; 
    this.next = null; 
}

LinkedList.prototype.add = function(value) {
    var node = new Node(value),
        currentNode = this.head;
 
    // 1st use-case: an empty list 
    if (!currentNode) {
        this.head = node;
        this._length++;
         
        return node;
    }
 
    // 2nd use-case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
 
    currentNode.next = node;
 
    this._length++;
     
    return node;
};
function reverseLinkedList(sll){
  
  if(!sll.head || !sll.head.next) return sll;

  var nodes=[], 
    current = sll.head;
  //storing all the nodes in an array
  while(current){
    nodes.push(current);
    current = current.next;
  }
    
  var reversedLL = new LinkedList();
  
  reversedLL.head = nodes.pop();
  current = reversedLL.head;
  
  var node = nodes.pop();  
  //make sure to make next of the newly inserted node to be null
  //other wise the last node of your SLL will retain its old next.
  while(node){
     node.next = null;
     current.next = node;
     
     current = current.next;
     node = nodes.pop();
  }
  return reversedLL;
}
function isPalindrome(L1, L2) {
  // Empty or a single element Linked List
  if (!L2.head || !L2.head.next) {
    console.log('No duplicates were found. Empty or a single element Linked List.');
    return;
  }

  // Create a deep copy of L1 so we can reverse it and compare with L1
  //var temp = JSON.stringify(this); // Serialize L1, remember this can be an expensive operation
  //var L2 = JSON.parse(temp); // Deserialize L1, remember this can be an expensive operation

  // Object.setPrototypeOf(L2, this); // Change L2's default prototype. This is ES6 Feature. OPTIONAL
  
  

  var l2 = L2.head;
  var l1 = L1.head;
  
  while (l2) {
    if (l2.value !== l1.value) {
      return false;
    }
    l2 = l2.next;
    l1 = l1.next;
  }

  return true;
};
var listA = new LinkedList();
listA.add(1);
listA.add(2);
listA.add(1);
var listB = reverseLinkedList(listA); 
var listC = new LinkedList();
listC.add(1);
listC.add(2);
listC.add(1);
//reversesll(listA);

console.log("isPalindrome: " + isPalindrome(listC, listB));

