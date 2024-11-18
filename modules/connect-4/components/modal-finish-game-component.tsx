import React from 'react';
import ModalComponent from '@/core/components/modal-component'

export default function ModalFinishGameComponent({ winPlayer, scoreX, scoreO, handleCloseModal, onClickRestart }: { handleCloseModal: () => void, winPlayer: "X" | "O" | "BOT" | undefined, scoreO: number, scoreX: number, onClickRestart: () => void }) {

    return (
        <ModalComponent>
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                    <div className="flex flex-col items-center">
                        <div className="mt-3 text-center">
                            <h3 className="text-5xl mt-4 mb-8 font-bold text-gray-900" id="modal-title">
                                ¡Player {winPlayer === "X" ? "1" : "2"} wins!
                            </h3>
                            <div className="mt-2 flex justify-between">
                                <div className="flex flex-col gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="fill-c4-pink">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M16 14s-1.5 2-4 2-4-2-4-2"></path>
                                        <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                        <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                    </svg>
                                    <h2>Player 1</h2>
                                    <h2 className="text-5xl font-bold">
                                        {scoreX}
                                    </h2>
                                </div>
                                <div className="flex flex-col gap-4 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF00ff" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="fill-c4-yellow">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M16 14s-1.5 2-4 2-4-2-4-2"></path>
                                        <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                        <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                    </svg>
                                    <h2>
                                        Player 2
                                    </h2>
                                    <h2 className="text-5xl font-bold">
                                        {scoreO}
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 mb-3 flex items-center justify-between w-full gap-4">
                            <button className="uppercase text-center bg-c4-pink text-white font-black px-8 shadow-c4-button rounded-xl py-2 border-solid border-2 border-black text-xl w-full flex items-center w-[40%] justify-center mx-auto" onClick={onClickRestart}>Restart</button>
                            <button className="uppercase text-center bg-c4-pink text-white font-black px-8 shadow-c4-button rounded-xl py-2 border-solid border-2 border-black text-xl w-full flex items-center w-[40%] justify-center mx-auto" onClick={handleCloseModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </ModalComponent>
    )
}
