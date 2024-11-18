import React, { useState } from 'react';

interface CellProps {
    i: number;
    j: number;
    currentPlayer: string;
    handleClick: (i: number, j: number) => void;
    isSelect: "O" | "X" | ""
}

const Cell: React.FC<CellProps> = ({ i, j, handleClick, isSelect }) => {
    return (
        <button
            className={`grid-cell rounded-full w-14 h-14 border border-4 border-black shadow-t m-auto shadow-c4-board-item ${isSelect === "X" ? "bg-c4-pink" : isSelect === "O" ? "bg-c4-yellow" : "bg-c4"}`}
            key={`${i}-${j}`}
            onClick={() => handleClick(i, j)}
        >
        </button>
    );
};

export default Cell;