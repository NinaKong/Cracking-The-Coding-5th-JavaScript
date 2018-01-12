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
  this.kthFromEnd = function(k){
    var node = head,
    i = 1,
    kthNode;
    //handle, 0 or negative value of k
    if(k <= 0) return false;

    while(node){
      if(i == k) kthNode = head;
      else if(i - k > 0){
        //use totally length minus k to get the kth from the end
        kthNode = kthNode.next;
      }
      i++;
      node = node.next;
    }
    return kthNode;
  }
  this.getKthLastElement = function(k) {
    if (!head || k < 1) {
      return undefined;
    }

    var current = head;
    var nBehindCurrent = head;
    //counting the length of the list in the first iteration
    for (var i = 0; i < k - 1; i++) {
      current = current.next;
      if (!current) {
        return undefined;
      }
    }
     //pinpoint the desired element
    while (current.next) {
      nBehindCurrent = nBehindCurrent.next;
      current = current.next;
    }
    return nBehindCurrent;
  }
}
var sll = new LinkedList();
sll.add("nina");
sll.add("cat");
sll.add("meow");
sll.add("cat");
sll.add("meow");
console.log(sll.size());
console.log(sll.kthFromEnd(1)); 
console.log(sll.getKthLastElement(5));