/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(E, N, k) {
    
    let dist = Array(N + 1).fill(Infinity); // +1 for 1-based indexing
    dist[0] = dist[k] = 0; // dist = 0 for sentinel at index 0 and node K
    while (--N)
        for (let [u, v, w] of E)
            if (dist[v] > dist[u] + w)
                dist[v] = dist[u] + w;
    let max = Math.max(...dist);
    return max < Infinity ? max : -1;
    
};