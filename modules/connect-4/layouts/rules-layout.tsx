"use client" 
import { useRouter } from 'next/navigation';
import Card from "../components/card-component";
import CardContent from "../components/card-content-component";
import { CheckIcon } from '../assets/icons/check-icon';

function RulesLayout() {
    const router = useRouter();
    const navigateToHome = () => router.push("/connect-4");
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-c4">
            <Card className="relative w-1/2 h-auto p-12 bg-white border-2 border-solid border-c4 rounded-2xl shadow-c4-card flex flex-col gap-12 text-black">
                <CardContent className="w-full px-8 flex flex-col items-center gap-4">
                    <h2 className="font-semibold text-3xl m-0 p-0">Rules</h2>
                    
                    <h4 className="w-full text-c4-purple-light text-xl">Objective</h4>
                    <p className="text-sm">Be the first player to connect 4 of the same colored discs in a row (either horizontally, vertically or diagonally).</p>

                    <h4 className="w-full text-c4-purple-light text-xl">How to Play</h4>
                    <ol>
                        <li className="text-sm">
                            <b className="pr-4">1</b> 
                            Red gses first in the first game
                        </li>
                        <li className="text-sm">
                            <b className="pr-4">2</b>
                            Players must alternate turns, and only one disc can be dropsed in each turn.
                        </li>
                        <li className="text-sm">
                            <b className="pr-4">3</b> 
                            The game ends when there is a 4-in-a-rows or a statemate.
                        </li>
                        <li className="text-sm">
                            <b className="pr-4">4</b> 
                            The starter of the previous game goes seconds on the next game.
                        </li>
                    </ol>
                    <button 
                        onClick={navigateToHome} 
                        className="bg-c4-pink border-2 border-black border-c4-default rounded-full mx-auto p-2 absolute bottom-[-1.5rem] shadow-c4-default"
                    >
                        <CheckIcon color={"white"} />
                    </button>
                </CardContent>
            </Card>
        </main>
    )
}

export default RulesLayout