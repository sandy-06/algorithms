// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    var result = 0;
    for( var i = 0; i< arr.length; i++){
        var arrNumber = arr[i];
        result += arrNumber;
    }
    return result;
};

  