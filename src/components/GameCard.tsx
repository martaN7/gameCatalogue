import Grid from '@mui/material/Unstable_Grid2';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';
import { Game } from '../types.ts';
import { Link } from 'react-router-dom';

interface GameCardProps {
    game: Game;
}

function GameCard({ game }: GameCardProps) {
    return (
        <Grid xs={12} sm={6} md={4} lg={3}>
            <Card
                elevation={3}
                sx={{
                    maxWidth: 300,
                    minHeight: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <Box>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={game.thumbnail}
                        title={game.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {game.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {game.platform}
                            {game.short_description}
                        </Typography>
                    </CardContent>
                </Box>
                <CardActions sx={{ p: 2 }}>
                    <Link to={`/games/${game.id}`}>
                        <Button variant="contained" size="small">
                            More info
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default GameCard;
