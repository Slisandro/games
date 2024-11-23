"use client"
import { useRouter } from "next/navigation";
import React from "react";

function CardListGameComponent({ name, url, disabled, urlImg, Icon }: { name: string, url: string, urlImg: string, disabled: boolean, Icon: JSX.Element }) {
    const router = useRouter();
    const navigateToGame = () => router.push(url);

    return (
        <div className={` flex flex-col max-w-sm rounded overflow-hidden shadow-lg ${disabled && "opacity-30"}`}>
            <img className="w-full" src={urlImg} alt="Sunset in the mountains" />
            <div className="px-6 py-2 flex flex-col gap-2">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </div>
            <div className="px-6 pb-4 pt-2">
                <button onClick={navigateToGame} className="uppercase bg-c4-pink text-white font-black pl-4 shadow-c4-button rounded-xl border-solid border-2 border-black w-full flex justify-between items-center text-sm">
                    Play game
                    <div className="scale-50 flex justify-end">
                        {Icon}
                    </div>
                </button>
            </div>
        </div>
    )
}

export default CardListGameComponent