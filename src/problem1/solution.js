//1. Iterative Approach
function sumToNIterative(n) {
    const result = [];
    for (let a = 0; a <= n; a++) {
        const b = n - a;
        result.push([a, b]);
    }
    return result;
}
  
//2. Recursive Approach
function sumToNRecursive(n, start = 1) {
    if (n === 0) return [[]];
    if (n < 0) return [];

    const result = [];
    for (let i = start; i <= n; i++) {
        const subsets = sumToNRecursive(n - i, i);
        subsets.forEach(subset => {
        result.push([i, ...subset]);
        });
    }
    return result;
}

// 3. Partition Count
function partitionCount(n) {
    const partitions = Array(n + 1).fill(0);
    partitions[0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
        partitions[j] += partitions[j - i];
        }
    }
    return partitions[n];
}
  
  