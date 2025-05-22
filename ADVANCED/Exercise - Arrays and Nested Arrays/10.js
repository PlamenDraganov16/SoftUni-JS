function ticTacToe(moves) {
    const board = Array.from({ length: 3 }, () => Array(3).fill(false));
    let currentPlayer = 'X';

    for (let move of moves) {
        const [row, col] = move.split(' ').map(Number);

        if (board[row][col] !== false) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        board[row][col] = currentPlayer;

        if (checkWinner(board, currentPlayer)) {
            console.log(`Player ${currentPlayer} wins!`);
            printBoard(board);
            return;
        }

        if (board.flat().every(cell => cell !== false)) {
            console.log("The game ended! Nobody wins :(");
            printBoard(board);
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    function checkWinner(board, player) {
        const winLines = [
            // rows
            [ [0,0], [0,1], [0,2] ],
            [ [1,0], [1,1], [1,2] ],
            [ [2,0], [2,1], [2,2] ],
            // cols
            [ [0,0], [1,0], [2,0] ],
            [ [0,1], [1,1], [2,1] ],
            [ [0,2], [1,2], [2,2] ],
            // diagonals
            [ [0,0], [1,1], [2,2] ],
            [ [0,2], [1,1], [2,0] ],
        ];

        return winLines.some(line =>
            line.every(([r, c]) => board[r][c] === player)
        );
    }

    function printBoard(board) {
        board.forEach(row => console.log(row.join('\t')));
    }
}