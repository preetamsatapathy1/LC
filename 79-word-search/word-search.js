/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const row = board.length;
    const col = board[0].length;
    let res = false;

    const backtrack = (r, c, index) => {
        if(index === word.length) {
            res = true;
            return;
        }

        let prev = board[r][c];
        board[r][c] = '#'
        if(r+1 < row && board[r+1][c] === word[index]){
            backtrack(r+1, c, index+1)
        }
        if(r-1 >= 0 && board[r-1][c] === word[index]){
            backtrack(r-1, c, index+1)
        }
        if(c+1 < col && board[r][c+1] === word[index]){
            backtrack(r, c+1, index+1)
        }
        if(c-1 >= 0 && board[r][c-1] === word[index]){
            backtrack(r, c-1, index+1)
        }  
        board[r][c] = prev;
    }

    for(let i=0; i<row;i++){
        for(let j=0; j<col; j++){
            if(board[i][j] === word[0]){
                if(!res){
                    backtrack(i, j, 1)
                }
            }
        }
    }

    return res
};