"use client"
import { useState, useEffect } from 'react';

function TimerComponent({ currentPlayer }: { currentPlayer: "O" | "X" }) {
    const [counter, setCounter] = useState(15);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter > 0 ? prevCounter - 1 : 0);
        }, 1000);

        return () => { clearInterval(interval); }; // clean interval
    }, []);

    useEffect(() => {
        setCounter(15);
    }, [currentPlayer])

    return (
        <div
            className={`absolute w-[250px] h-[75px] bottom-[-60px] flex flex-col items-center justify-center border-2 border-black rounded-xl z-4 shadow-c4-default uppercase text-white p-4 ${currentPlayer === "X" ? "bg-c4-yellow" : "bg-c4-pink"}`}
            style={{ left: "calc(50% - 125px)", right: "calc(50% - 125px)" }}
        >
            <span className="text-lg">Player {currentPlayer === "X" ? "1" : "2"}'s turn</span>
            <span className={`text-3xl font-black ${counter <= 5 && "text-red"}`}>
                {counter} s
            </span>
        </div>
    )
}

export default TimerComponent