// import { checkForWin } from '../utilities/check-for-win-utilities';
// import Cell from './cell-component';
// import TimerComponent from './timer-component';

function BoardComponent({ board, setBoard, currentPlayer, setCurrentPlayer, setWinPlayer, handleOpenModal, handleChangePoints, isPlaying, setIsPlaying }: { board: any[], setBoard: any, currentPlayer: "O" | "X" | "BOT", setCurrentPlayer: any, setWinPlayer: (w: "X" | "O" | "BOT" | undefined) => void, handleOpenModal: () => void, handleChangePoints: (w: "X" | "O" | "BOT") => void, isPlaying: boolean, setIsPlaying: (b: boolean) => void }) {
    const handleTimedOut = () => {
        let randomColumn = Math.floor(Math.random() * 6);
        let randomRow = Math.floor(Math.random() * 6);
        // validate if random position is available
        let availableRandom = false;

        while (!availableRandom) {
            if (!board[randomColumn][randomRow]) {
                availableRandom = true;
            } else {
                // set new randomColumn and randomRow 
                randomColumn = Math.floor(Math.random() * 6);
                randomRow = Math.floor(Math.random() * 6);
            }
        }

        if (availableRandom) {
            return handleClick(randomColumn, randomRow);
        }
    };

    const handleClick = (i: number, j: number) => {
        if (board[i][j] !== null) {
            return;
        }

        const newBoard = board.map(row => [...row]);
        newBoard[i][j] = currentPlayer;
        setBoard(newBoard);

        // if (checkForWin(newBoard, currentPlayer)) {
        //     handleChangePoints(currentPlayer)
        //     setIsPlaying(false);
        //     setWinPlayer(currentPlayer)
        //     handleOpenModal();
        // } else {
        //     return setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        // }
    };

    return (
        <div className="w-auto h-auto grid grid-rows-6 gap-4 px-4 py-6 bg-white border-4 border-black rounded-xl shadow-c4-card relative">
            {board.map((row: any, i: number) => (
                <div className="grid grid-cols-7 gap-4" key={i + "-" + row}>
                    {row.map((_cell: "X" | "O" | "", j: number) => (<></>
                        // <Cell
                        //     key={i + "-" + j}
                        //     i={i}
                        //     j={j}
                        //     currentPlayer={currentPlayer}
                        //     handleClick={handleClick}
                        //     isSelect={board[i][j]}
                        // />
                    ))}
                </div>
            ))
            }
            {/* <TimerComponent isPlaying={isPlaying} currentPlayer={currentPlayer} handleTimedOut={handleTimedOut} /> */}
        </div >
    )
}

export default BoardComponent