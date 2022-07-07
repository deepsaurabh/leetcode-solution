var peakIndexInMountainArray = function(arr) {
    var peakInd = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i+1] < arr[i]){
            peakInd = i;
            break;
        }
    }
    return peakInd;
};