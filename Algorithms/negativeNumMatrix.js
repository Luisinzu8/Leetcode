// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let total = 0;
    
    for(let i = 0; i < grid.length; i++) {
        let section = grid[i];
        for(let j = 0; j < section.length; j++) {
            if(section[j] < 0) {
                total++;
            }
        }
    }
    return total;
};