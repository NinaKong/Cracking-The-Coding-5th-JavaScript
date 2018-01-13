function deleteMidNode(node) {
  if(node == null) {
    return false;
  }
  if(node.next == null) {
    return null;
  }
  var next = node.next;
  //put next node value to current node
  node.data = next.data;
  //link current node to next next node
  node.next = next.next;
}