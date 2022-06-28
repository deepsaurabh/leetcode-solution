
var longestIncreasingPath = function(matrix) {
    if(matrix.length === 0){
        return 0;
    }
    var max = 0;
    var map = {};

const isOutside = function(i,j){
    return(i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length);
}

const helper = function(i,j,prev){
    const key = i+'|'+j;
    if(isOutside(i, j) || matrix[i][j] <= prev) {
         return 0;
    }
       
    if(map[key]){
        return map[key];
    }

    const num = matrix[i][j];

    const l = helper(i,j - 1,num);
    const r = helper(i,j + 1,num);
    const t = helper(i - 1,j,num);
    const d = helper(i + 1,j,num);
    
    map[key] = Math.max(l,r,t,d)+1;
    max = Math.max(max,map[key]);
    return map[key];
} 


for(var i=0;i < matrix.length;i++){
    for(var j=0; j< matrix[0].length;j++){
        const key = i+'|'+j;
        if(!map[key]){
            helper(i,j,-Infinity);
        }
    }
}
    return max;
}