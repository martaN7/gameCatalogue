import GameList from './GameList.tsx';
import { useFetchGames } from '../hooks/useFetchGames.ts';
import { useState } from 'react';
import { Container } from '@mui/material';

function GameListContainer() {
    const [filter, setFilter] = useState({
        platform: 'all',
    });

    const { games } = useFetchGames(filter);

    return (
        <>
            <Container maxWidth="lg">
                <GameList games={games} />
            </Container>
        </>
    );
}

export default GameListContainer;
