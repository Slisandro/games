"use client"
import React, { useState } from 'react';
import BoardComponent from '../components/board-component';
import CardHeader from '../components/card-header-component';
import { useRouter } from 'next/navigation';

const score_1 = 12;
const score_2 = 23;

function BoardLayouts() {
    const emptyBoard = Array(6).fill(Array(7).fill(null));
    const router = useRouter();
    const [board, setBoard] = useState(emptyBoard);
    const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");

    const navigateToHome = () => router.push("/connect-4");
    const onClickRestart = () => {
        setBoard(emptyBoard);
        return setCurrentPlayer("X");
    };

    return (
        <main className="flex min-h-screen max-h-screen h-screen flex-col items-center py-4 bg-c4-purple gap-12">
            <div className="flex items-center justify-between w-1/2">
                <button onClick={navigateToHome} className="bg-c4 text-white rounded-xl px-4 py-2 shadow-c4-default border-2 border-black hover:scale-110">Menu</button>
                <CardHeader />
                <button className="bg-c4 text-white rounded-xl px-4 py-2 shadow-c4-default border-2 border-black hover:scale-110" onClick={onClickRestart}>Restart</button>
            </div>
            <div className="w-full flex items-start justify-around">
                <div className="flex flex-col items-center gap-4 bg-white text-black border-2 border-black p-8 rounded-xl shadow-c4-default relative cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="absolute w-[3rem] h-[3rem] top-[-1.5rem] fill-c4-pink">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M16 14s-1.5 2-4 2-4-2-4-2"></path>
                        <line x1="15" y1="9" x2="15.01" y2="9"></line>
                        <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    </svg>
                    Player 1
                    <span className="text-center font-black text-2xl cursor-pointer">
                        {score_1}
                    </span>
                </div>
                <BoardComponent board={board} setBoard={setBoard} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />
                <div className="flex flex-col items-center gap-4 bg-white text-black border-2 border-black p-8 rounded-xl shadow-c4-default relative cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF00ff" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="absolute w-[3rem] h-[3rem] top-[-1.5rem] fill-c4-yellow">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M16 14s-1.5 2-4 2-4-2-4-2"></path>
                        <line x1="15" y1="9" x2="15.01" y2="9"></line>
                        <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    </svg>
                    Player 2
                    <span className="text-center font-black text-2xl cursor-pointer">
                        {score_2}
                    </span>
                </div>
            </div>
        </main>
    )
}

export default BoardLayouts