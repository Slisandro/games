"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import BoardComponent from '../components/board-component';
import CardHeader from '../components/card-header-component';
import ModalFinishGameComponent from '../components/modal-finish-game-component';
import useModalFinishGame from '../hooks/use-modal-finish-game-hook';


function BoardLayouts() {
    const emptyBoard = Array(6).fill(Array(7).fill(null));
    const router = useRouter();
    const [board, setBoard] = useState(emptyBoard);
    const [currentPlayer, setCurrentPlayer] = useState<"X" | "O" | "BOT">("X");
    const [winPlayer, setWinPlayer] = useState<"X" | "O" | "BOT" | undefined>();

    const [isPlaying, setIsPlaying] = useState(true);

    const [scoreX, setScoreX] = useState(0);
    const [scoreO, setScoreO] = useState(0);

    const { open, handleClose, handleOpen } = useModalFinishGame();

    const navigateToHome = () => router.push("/connect-4");

    const onClickRestart = () => {
        setBoard(emptyBoard);
        handleClose();
        setIsPlaying(true);
        return setCurrentPlayer("X");
    };

    const handleChangePoints = (w: "X" | "O" | "BOT") => {
        if (w === "X") return setScoreX(Number(scoreX) + 1);
        if (w === "O" || w === "BOT") return setScoreO(Number(scoreO) + 1);
    }

    const handleCloseModal = () => {
        navigateToHome();
        setTimeout(() => {
            handleClose();
        }, 500);
    }

    return (
        <>
            {open && <ModalFinishGameComponent winPlayer={winPlayer} onClickRestart={onClickRestart} scoreX={scoreX} scoreO={scoreO} handleCloseModal={handleCloseModal} />}
            <main className="flex min-h-screen max-h-screen h-screen flex-col items-center py-4 bg-c4-purple gap-12">
                <div className="flex items-center justify-between w-1/2">
                    <button onClick={navigateToHome} className="bg-c4 text-white rounded-xl px-4 py-2 shadow-c4-default border-2 border-black hover:scale-110">Menu</button>
                    <CardHeader />
                    <button className="bg-c4 text-white rounded-xl px-4 py-2 shadow-c4-default border-2 border-black hover:scale-110" onClick={onClickRestart}>Restart</button>
                </div>
                <div className="w-full flex items-start justify-around">
                    <div className="flex flex-col items-center gap-4 bg-white text-black border-2 border-black p-8 rounded-xl shadow-c4-default relative cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute w-[3rem] h-[3rem] top-[-1.5rem] fill-c4-pink">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M16 14s-1.5 2-4 2-4-2-4-2"></path>
                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                        </svg>
                        Player 1
                        <span className="text-center font-black text-2xl cursor-pointer">
                            {scoreX}
                        </span>
                    </div>
                    <BoardComponent isPlaying={isPlaying} setIsPlaying={setIsPlaying} handleOpenModal={handleOpen} board={board} setBoard={setBoard} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} handleChangePoints={handleChangePoints} setWinPlayer={setWinPlayer} />
                    <div className="flex flex-col items-center gap-4 bg-white text-black border-2 border-black p-8 rounded-xl shadow-c4-default relative cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF00ff" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute w-[3rem] h-[3rem] top-[-1.5rem] fill-c4-yellow">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M16 14s-1.5 2-4 2-4-2-4-2"></path>
                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                        </svg>
                        Player 2
                        <span className="text-center font-black text-2xl cursor-pointer">
                            {scoreO}
                        </span>
                    </div>
                </div>
            </main>
        </>
    )
}

export default BoardLayouts