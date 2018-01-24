//Method 1 Brute force
function magicSlow(arr) {
	for(var i =0; i< arr.length; i++) {
		if(arr[i] == i) {
			return i
		}
	}
	return -1;
}


//Method 2 BST
function magicFast(arr, start, end) {
	if((end < start)||(start < 0)|| (end >=arr.length)){
		return -1;
	}
	var mid = Math.floor(start + (end - start)/2);
	if(arr[mid] ==  mid) {
		return mid;
	} else if(arr[mid] <  mid) {
		return magicFast(arr, mid + 1, end);
	} else {
		return magicFast(arr, start, mid - 1);
	}
}
function magic(arr) {
	return magicFast(arr, 0 , arr.length - 1);
}
var arr = [-1, 0, 1, 3, 9, 100];
console.log("Method 1: " + magicSlow(arr));
console.log("Method 2: " + magic(arr));