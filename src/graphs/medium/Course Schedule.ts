export default function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph: Array<Array<number>> = new Array(numCourses);
    const visited: boolean[] = new Array(numCourses)
    const visiting: boolean[] = new Array(numCourses)

    for(let i = 0; i < numCourses; i++){
        graph[i] = [];
        visited[i] = false
        visiting[i] = false
    }

    for(let i = 0; i < prerequisites.length; i++){
        const node = prerequisites[i]
        graph[node[0]][0] = i;
        graph[node[0]][1] = node[1];
        
    }
    
    for(let i = 0; i < numCourses - 1; i++){
        if(hasCycle(graph, visited, visiting, i)){
            return false;
        }
    }

    return true;
};

function hasCycle(graph: number[][], visited: boolean[], visiting: boolean[], node: number): boolean {
    if(visited[node]){
        return false;
    }

    if(visiting[node]){
        return true
    }
    visiting[node] = true
    
    for(const neighbor of graph[node]){
        if(hasCycle(graph, visited, visiting, neighbor)){
            return true
        }
    }

    visited[node] = true;
}

