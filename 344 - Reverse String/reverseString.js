var helper = function(start,end,s) {
    if(start >  end) return;

    // We will swap start and end position
    const temp = s[end];
    s[end] = s[start];
    s[start] = temp;
    
    // call helper recursively with updated start and end positions
    helper(start+1,end - 1,s);
};

var reverseString = function(s) {
    helper(0,s.length-1,s)
    return s;
};

