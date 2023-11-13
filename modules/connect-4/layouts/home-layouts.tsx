"use client"
import { useRouter } from "next/navigation";
import Card from "../components/card-component";
import CardContent from "../components/card-content-component";
import CardHeader from "../components/card-header-component";
import { RobotIcon } from "../assets/icons/robot-icon";
import { PersonIcon } from "../assets/icons/person-icon";
import { InfoIcon } from "../assets/icons/info-icon";

export default function HomeLayout() {
    const router = useRouter();
    const navigateToPlay = () => router.push("/connect-4/play");
    const navigateToRules = () => router.push("/connect-4/rules");

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-c4">
            <Card className="w-1/2 h-auto p-12 bg-c4-purple border-2 border-solid border-c4 rounded-2xl shadow-c4-card flex flex-col gap-12">
                <CardHeader />
                <CardContent className="w-full px-8 flex flex-col items-center gap-8">
                    <button onClick={navigateToPlay} className="uppercase bg-c4-pink text-white font-black px-8 shadow-c4-button rounded-xl py-2 border-solid border-2 border-black text-xl w-full flex justify-between items-center">
                        Play vs CPU
                        <RobotIcon w={50} h={50} />
                    </button>

                    <button onClick={navigateToPlay} className="uppercase bg-c4-yellow text-black font-black px-8 shadow-c4-button rounded-xl py-2 border-solid border-2 border-black text-xl w-full flex justify-between items-center">
                        Play vs Player
                        <PersonIcon w={50} h={50} />
                    </button>

                    <button onClick={navigateToRules} className="uppercase bg-c4-white text-black font-black px-8 shadow-c4-button rounded-xl py-2 border-solid border-2 border-black text-xl w-full flex justify-between items-center hover:zoom-[1.1]">
                        Game rules
                        <InfoIcon w={50} h={50} />
                    </button>
                </CardContent>
            </Card>
        </main>
    )
}