import { InfoIcon } from "../assets/icons/info-icon"
import { PersonIcon } from "../assets/icons/person-icon"
import { RobotIcon } from "../assets/icons/robot-icon"

const CardContent = () => {
    return (
        <div className="w-full px-8 flex flex-col items-center gap-8">
            <button className="uppercase bg-c4-pink text-white font-black px-8 shadow-c4-button rounded-xl py-2 border-solid border-2 border-black text-xl w-full flex justify-between items-center">
                Play vs CPU
                <RobotIcon w={50} h={50} />
            </button>

            <button className="uppercase bg-c4-yellow text-black font-black px-8 shadow-c4-button rounded-xl py-2 border-solid border-2 border-black text-xl w-full flex justify-between items-center">
                Play vs Player
                <PersonIcon w={50} h={50} />
            </button>

            <button className="uppercase bg-c4-white text-black font-black px-8 shadow-c4-button rounded-xl py-2 border-solid border-2 border-black text-xl w-full flex justify-between items-center hover:zoom-[1.1]">
                Game rules
                <InfoIcon w={50} h={50} />
            </button>
        </div>
    )
}

export default CardContent;