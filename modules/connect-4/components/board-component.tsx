import { checkForWin } from '../utilities/check-for-win-utilities';
import Cell from './cell-component';
import TimerComponent from './timer-component';

function BoardComponent({ board, setBoard, currentPlayer, setCurrentPlayer }: { board: any[], setBoard: any, currentPlayer: "O" | "X", setCurrentPlayer: any }) {

    const handleTimedOut = () => {
        const randomColumn = Math.floor(Math.random() * 6);
        const randomRow = Math.floor(Math.random() * 6);
        // validate if random position is available
        // if() {
        console.log(randomColumn, randomRow)
        return handleClick(randomColumn, randomRow);
        // }
    };

    const handleClick = (i: number, j: number) => {
        if (board[i][j] !== null) {
            return;
        }

        const newBoard = board.map(row => [...row]);
        newBoard[i][j] = currentPlayer;
        setBoard(newBoard);

        if (checkForWin(newBoard, currentPlayer)) {
            setTimeout(() => {
                alert(`${currentPlayer} wins!`);
            }, 1000);
        }

        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    };

    return (
        <div className="w-auto h-auto grid grid-rows-6 gap-4 px-4 py-6 bg-white border-4 border-black rounded-xl shadow-c4-card relative">
            {board.map((row: any, i: number) => (
                <div className="grid grid-cols-7 gap-4" key={i}>
                    {row.map((_cell: "X" | "O" | "", j: number) => (
                        <Cell
                            key={i + "-" + j}
                            i={i}
                            j={j}
                            currentPlayer={currentPlayer}
                            handleClick={handleClick}
                            isSelect={board[i][j]}
                        />
                    ))}
                </div>
            ))}
            <TimerComponent currentPlayer={currentPlayer} handleTimedOut={handleTimedOut} />
        </div>
    )
}

export default BoardComponent