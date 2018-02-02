function searchR(strs, str, first, last) {
	var mid = Math.floor((first+last)/2);
	if(strs[mid] == "") {
		var left = mid - 1;
		var right = mid + 1;
		while(true) {
			if(left < first && right > last){
				return -1;
			} else if(right <= last && !(strs[right] == "")){
				mid = right;
				break;
			} else if(left >= first && !(strs[left] == "")){
				mif = mid;
				break;
			}
			right++;
			left--;
		}
	}
	if(str == strs[mid]){
		return mid;
	} else if(strs[mid].localeCompare(str) < 0) {
		//The localeCompare() method compares two strings in the current locale.
		return searchR(strs, str, mid + 1, last);
	} else {
		return searchR(strs, str, first, mid - 1);
	}
}
function search(strs, str){
	if(strs == null || str == null || str == "") {
		return -1;
	}
	return searchR(strs, str, 0, strs.length - 1);
}

console.log(search(['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''], 'ball'));