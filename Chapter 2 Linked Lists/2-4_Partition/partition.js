/* LinkedList */
function LinkedList() { 
  var length = 0; 
  var head = null; 

  var Node = function(element){
    this.element = element; 
    this.next = null; 
  }; 
  this.size = function(){
    return length;
  };
  this.add = function(element){
    var node = new Node(element);
    if(head === null){
      head = node;
    } else {
      var currentNode = head;
      while(currentNode.next){
        currentNode  = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  }; 
  this.removeDuplicates = function() {
    var previousNode;
    var currentNode = head;
    hash = {};
    while(currentNode != null) {
      if(!hash[currentNode.element]) {
         hash[currentNode.element] = true;
      } else {
         previousNode.next = currentNode.next;
         length--;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    return length;
   };
  this.partition = function(partitionElement) {
    var beforeStart = null;
    var beforeEnd = null;
    var afterStart = null;
    var afterEnd = null;
    var currentNode = head;
    while(currentNode != null) {
      //Before Linked List
      if(currentNode.element < partitionElement){
        if(beforeStart == null) {
          beforeStart = currentNode;
          beforeEnd = beforeStart;
        } else {
          beforeEnd.next = currentNode;
          beforeEnd = currentNode;
        }
      }
      //After Linked List
      else {
        if(afterStart == null) {
          afterStart = currentNode;
          afterEnd = afterStart;
        } else {
          afterEnd.next = currentNode;
          afterEnd = currentNode;
        }
      }
      currentNode = currentNode.next;
    }
    if(beforeStart == null) {
      return afterStart;
    } 
    beforeEnd.next = afterStart;
    return beforeStart;
  }
  this.printList = function() {
    var currentNode = head;
    while (currentNode !== null) {
     console.log(currentNode.element);
     currentNode = currentNode.next;
    }
  };
}
var L1 = new LinkedList();
L1.add(2);
L1.add(4);
L1.add(1);
L1.add(9);
L1.add(7);
console.log(L1.size());
console.log("partition " + L1.partition(5));
L1.printList();