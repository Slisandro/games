export const checkForWin = (board: ("X" | "O" | null)[][], currentPlayer: "X" | "O"): boolean => {
    // Check rows
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] === currentPlayer && board[i][j + 1] === currentPlayer && board[i][j + 2] === currentPlayer && board[i][j + 3] === currentPlayer) {
                return true;
            }
        }
    }

    // Check columns
    for (let j = 0; j < 7; j++) {
        for (let i = 0; i < 3; i++) {
            if (board[i][j] === currentPlayer && board[i + 1][j] === currentPlayer && board[i + 2][j] === currentPlayer && board[i + 3][j] === currentPlayer) {
                return true;
            }
        }
    }

    // Check diagonals (top-left to bottom-right)
    for (let i = 3; i < 6; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] === currentPlayer && board[i - 1][j + 1] === currentPlayer && board[i - 2][j + 2] === currentPlayer && board[i - 3][j + 3] === currentPlayer) {
                return true;
            }
        }
    }

    // Check diagonals (top-right to bottom-left)
    for (let i = 3; i < 6; i++) {
        for (let j = 3; j < 7; j++) {
            if (board[i][j] === currentPlayer && board[i - 1][j - 1] === currentPlayer && board[i - 2][j - 2] === currentPlayer && board[i - 3][j - 3] === currentPlayer) {
                return true;
            }
        }
    }

    return false;
};