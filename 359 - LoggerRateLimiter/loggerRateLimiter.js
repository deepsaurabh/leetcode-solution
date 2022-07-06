
var Logger = function() {
    this.map = new Map();
};


Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if(this.map.has(message)){
        if(timestamp < this.map.get(message)+10){
            return false;
        }
    }
     this.map.set(message,timestamp);
     return true;
};
