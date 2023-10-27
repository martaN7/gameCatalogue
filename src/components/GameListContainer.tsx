import GameList from './GameList.tsx';
import { useFetchGames } from '../hooks/useFetchGames.ts';
import { useState } from 'react';
import { Container, Typography } from '@mui/material';
import GameFilters from './GameFilters.tsx';
import Grid from '@mui/material/Unstable_Grid2';

function GameListContainer() {
    const [filter, setFilter] = useState({
        platform: 'browser',
        sortBy: 'relevance',
    });

    const { games } = useFetchGames(filter);

    if (!games) {
        return (
            <Typography variant="h2" component="h1">
                Loading...
            </Typography>
        );
    }

    return (
        <>
            <Container maxWidth="lg">
                <Grid container spacing={2} marginTop={3}>
                    <GameFilters onFilter={setFilter} />
                    <GameList games={games} />
                </Grid>
            </Container>
        </>
    );
}

export default GameListContainer;
