/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let s = new Set();
    let count = 0;
    let queue = [];
    //search all rotten
    for(let i=0; i<rows;i++){
        for(let j=0;j<cols;j++){
            if(grid[i][j] === 2){
                queue.push([i,j, 0])
            }
        }
    }

    while(queue.length){
        const l = queue.length;
        let isRotted = false;
        const [r,c, min] = queue.shift();
        if(r+1 < rows && grid[r+1][c] === 1){
            grid[r+1][c] = 2;
            queue.push([r+1,c, min+1]);
            count = min+1

        }
        if(c+1 < cols && grid[r][c+1] === 1){
            grid[r][c+1] = 2;
            queue.push([r,c+1, min+1]);
            count = min+1

        }
        if(r-1 >= 0 && grid[r-1][c] === 1){
            grid[r-1][c] = 2;
            queue.push([r-1,c, min+1]);
            count = min+1

        }
        if(c-1 >= 0 && grid[r][c-1] === 1){
            grid[r][c-1] = 2;
            queue.push([r,c-1, min+1])
            count = min+1
        }
        // count = Math.max(count, min)
    }

    for(let i=0; i<rows;i++){
        for(let j=0;j<cols;j++){
            if(grid[i][j] === 1){
                return -1;
            }
        }
    }
    return count;


};