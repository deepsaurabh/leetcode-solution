var diameterOfBinaryTree = function(root) {
    
    let diameter = 0;
    
    function findMax(node){
        if(!node) return 0;

        const lh = findMax(node.left);
        const rh = findMax(node.right);
        diameter = Math.max(diameter,lh+rh);

        return 1+ Math.max(lh,rh);
    }
    findMax(root);
    return diameter;
};