import GameCard from './GameCard.tsx';
import { Game } from '../types.ts';

interface GameListProps {
    games: Game[];
}

function GameList({ games }: GameListProps) {
    return (
        <>
            {games.map((game) => (
                <GameCard key={game.id} game={game} />
            ))}
        </>
    );
}

export default GameList;
