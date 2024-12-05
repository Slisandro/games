import CardHeader from '@/modules/connect-4/components/card-header-component';
import Connect4 from '../images/connect-4.png';

interface Game {
    id: number
    name: string
    disabled: boolean
    url: string
    urlImg: string,
    Icon: JSX.Element
}

const listGames: Game[] = [
    {
        id: 1,
        name: "Connect 4",
        disabled: false,
        url: "/connect-4",
        urlImg: Connect4.src,
        Icon: <CardHeader />
    },
    {
        id: 2,
        name: "Rock, Papel, Scissors",
        disabled: true,
        url: "/rock-papel-scissors",
        urlImg: Connect4.src,
        Icon: <CardHeader />
    },
    {
        id: 3,
        name: "Memory",
        disabled: true,
        url: "/memory",
        urlImg: Connect4.src,
        Icon: <CardHeader />
    },
];

export default listGames