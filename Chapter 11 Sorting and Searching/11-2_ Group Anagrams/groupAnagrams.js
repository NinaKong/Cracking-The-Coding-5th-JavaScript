function groupAnagrams(arr) {
    var result = [];
    if(arr == null || arr.length == 0) {
        return result;
    }
    var map = {}
    for(var index = 0; index < arr.length; index++) {
        var sortArr = arr[index].split("").sort().join("");
        if(map[sortArr] == null) {
            var l = [];
            l.push(index);
            map[sortArr] = l;
        } else {
            map[sortArr].push(index);
        }
    }
    for(var l in map) {
        if(map[l].length > 1) {
            for(var i = 0; i < map[l].length; i++) {
                result.push(arr[map[l][i]]);
            }
        }
    }
    return result;
}

console.log(groupAnagrams(['nina','nani', 'name', 'mane', 'Meow']));