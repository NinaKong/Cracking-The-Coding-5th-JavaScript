var merge = function(nums1, m, nums2, n) {
    var index = 0;
    for(var i = m ; i < m+n ; i++){
            nums1[i] = nums2[index];
            index++;
    }

    for(var j = 0 ; j < nums1.length - 1 ; j++){
        for(var k = j + 1 ; k < nums1.length ; k++){
            if(nums1[j] > nums1[k]){
                var temp = nums1[j];
                nums1[j] = nums1[k];
                nums1[k] = temp;
            }
        }
    }
};