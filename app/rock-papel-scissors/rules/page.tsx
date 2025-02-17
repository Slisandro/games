"use client" 
import { useRouter } from 'next/navigation';
import Card from '@/modules/connect-4/components/card-component';
import CardContent from '@/modules/connect-4/components/card-content-component';
import { CheckIcon } from '@/modules/connect-4/assets/icons/check-icon';

function RulesLayout() {
    const router = useRouter();
    const navigateToHome = () => router.push("/connect-4");
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-c4">
            <Card className="relative w-1/2 h-auto p-12 bg-white border-2 border-solid border-c4 rounded-2xl shadow-c4-card flex flex-col gap-12 text-black">
                <CardContent className="w-full px-8 flex flex-col items-center gap-4">
                    <h2 className="font-semibold text-3xl m-0 p-0">Rules</h2>
                    
                    <h4 className="w-full text-c4-purple-light text-xl">Objective</h4>
                    <p className="text-sm">Defeat your opponent by choosing the correct hand gesture.</p>

                    <h4 className="w-full text-c4-purple-light text-xl">How to Play</h4>
                    <ol>
                        <li className="text-sm">
                            <b className="pr-4">1</b> 
                            Each player simultaneously chooses one of the three gestures: Rock, Paper, or Scissors.
                        </li>
                        <li className="text-sm">
                            <b className="pr-4">2</b>
                            The winner is determined by the following rules:
                        </li>
                        <li className="text-sm">
                            <b className="pr-4 ml-2">-</b> 
                            Rock crushes Scissors.
                        </li>
                        <li className="text-sm">
                            <b className="pr-4 ml-2">-</b> 
                            Scissors cuts Paper.
                        </li>
                        <li className="text-sm">
                            <b className="pr-4 ml-2">-</b> 
                            Paper covers Rock.
                        </li>
                        <li className="text-sm">
                            <b className="pr-4">3</b> 
                            If both players choose the same gesture, it is a tie, and the round is replayed.
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