import Grid from '@mui/material/Unstable_Grid2';
import GameCard from './GameCard.tsx';
import { Game } from '../gameTypes.ts';

interface GameListProps {
    games: Game[];
}

function GameList({ games }: GameListProps) {
    return (
        <Grid container spacing={2} marginTop={3}>
            {games.map((game) => (
                <GameCard key={game.id} game={game} />
            ))}
        </Grid>
    );
}

export default GameList;
