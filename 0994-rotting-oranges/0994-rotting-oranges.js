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
                queue.push([i,j])
            }
        }
    }

    while(queue.length){
        const l = queue.length;
        let isRotted = false;
        for(let i=0; i<l; i++){
            const [r,c] = queue.shift();
            if(r+1 < rows && grid[r+1][c] === 1){
                grid[r+1][c] = 2;
                queue.push([r+1,c]);
                isRotted = true;
            }

            if(c+1 < cols && grid[r][c+1] === 1){
                grid[r][c+1] = 2;
                queue.push([r,c+1]);
                isRotted = true;

            }

            if(r-1 >= 0 && grid[r-1][c] === 1){
                grid[r-1][c] = 2;
                queue.push([r-1,c]);
                isRotted = true;

            }

            if(c-1 >= 0 && grid[r][c-1] === 1){
                grid[r][c-1] = 2;
                queue.push([r,c-1])
                isRotted = true;

            }
        }
        if(isRotted){
            count+=1;
        }
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