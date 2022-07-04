var decodeString = function(s) {
    var arr = [];
    var currentString = '';
    var prevString = '';
    var currentNumber = 0;
    var tempNum = 0;

    for(var i =0; i <s.length;i++){
        var char = s[i];
        if(char == '['){
            arr.push(currentString);
            arr.push(currentNumber);
            currentString = '';
            currentNumber = 0;
        }
        else if(char == ']'){
            tempNum = arr.pop();
            prevString = arr.pop();
            currentString = prevString + currentString.repeat(tempNum);
            
        }
        else if(Number.isInteger(parseInt(char))){
            currentNumber = (currentNumber * 10)+parseInt(char);
        }else{
            currentString += char;
        }
        
    }
    return currentString;
};