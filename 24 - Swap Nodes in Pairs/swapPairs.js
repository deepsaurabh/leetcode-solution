var swapPairs = function(head) {
    let dummy = new ListNode;
    dummy.next = head;
    swap(dummy);
    return dummy.next;
    
    function swap(node){
        if(node == null) return;

        let first = node.next;// marking first
        let second = null;
        
        if(first !== null) second = first.next; // marking second

        if(second !== null){ 
          let secondNext = second.next; // marking secondNext to be usd for next swapping

            second.next = first;
            node.next = second;
            first.next = secondNext;
            swap(first)
        }
    }
};
