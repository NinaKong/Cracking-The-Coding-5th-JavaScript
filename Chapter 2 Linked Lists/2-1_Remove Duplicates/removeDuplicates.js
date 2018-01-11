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
}
var L1 = new LinkedList();
L1.add("nina");
L1.add("cat");
L1.add("meow");
L1.add("cat");
L1.add("meow");
console.log(L1.size());
console.log(L1);
console.log("remove " + L1.removeDuplicates());
console.log(L1.size());