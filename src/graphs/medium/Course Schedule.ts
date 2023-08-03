export default function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph: number[][] = [];
    const visited: boolean[] = [];
    const visiting: boolean[] = [];
    
    for (let i = 0; i < numCourses; i++) {
        graph.push([]);
        visited.push(false);
        visiting.push(false);
    }
    
    for (let i = 0; i < prerequisites.length; i++) {
        graph[prerequisites[i][0]].push(prerequisites[i][1]);        
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!visited[i]) {
            if (hasCycle(graph, visited, visiting, i)) {
                return false;
            }
        }
    }
    
    return true;
};

function hasCycle(graph: number[][], visited: boolean[], visiting: boolean[], node: number): boolean {
    if (visited[node]) {
        return false;
    }
    
    if (visiting[node]) {
        return true;
    }
    
    visiting[node] = true;

    for (let i = 0; i < graph[node].length; i++) {
        if (hasCycle(graph, visited, visiting, graph[node][i])) {
            return true;
        }
    }
    
    visiting[node] = false;
    visited[node] = true;
    
    return false;
}