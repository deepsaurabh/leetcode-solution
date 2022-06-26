const buildAdjList = (n,edges) => {
    const adjList = Array.from({length:n},()=>[]);
    for(let edge of edges){
        let [src,dest] = edge;
        adjList[src].push(dest);
    }
    return adjList;
}

const dFS = (adjList,colors,res,i) => {
    // marking vertex i as visiting
    colors[i] = 1;

    for(let neighbor of adjList[i]){
        // if we have 2 visiting vertex in graph it is cyclic graph
        if(colors[neighbor] == 1) return true;
        
        if(colors[neighbor] == 0){
            // check for all neighbor of vertex i
            if(dFS(adjList,colors,res,neighbor)) return true;
        }
    }
    // marking vertex i as visited
    colors[i] = 2;
    res.push(i);
    return false;
}

var findOrder = function(numCourses, prerequisites) {
    // adjacent list to represent graph
    const adjList = buildAdjList(numCourses,prerequisites);
    // 3 color method to check cyclic graph 0 - not visited, 1 - visitinf, 2 - visited
    var colors = new Array(numCourses).fill(0);
    var res = [];
    // visiting each vertex
    for(let i=0;i<numCourses;i++){
        if(!colors[i]){
            // checking cyclic graph
            if (dFS(adjList, colors, res, i)) return [];
        }
    }
    return res;
};