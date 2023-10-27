import { Link, useParams } from 'react-router-dom';
import useFetchGame from '../hooks/useFetchGame';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Chip,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Stack,
    Typography,
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

function GameDetails() {
    const { gameID } = useParams();
    const { game } = useFetchGame(gameID || '');

    if (!game) {
        return (
            <Typography variant="h2" component="h1">
                Loading...
            </Typography>
        );
    }

    return (
        <>
            <Typography variant="h2" component="h1" mb={5}>
                <a
                    href={game.game_url}
                    target="_blank"
                    style={{ textDecoration: 'none', color: '#1565C0' }}
                >
                    {game.title} <Chip label={game.status} color="success" />
                </a>
            </Typography>
            <Stack direction="row" sx={{ marginTop: '2px' }}>
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Platform"
                            secondary={game.platform}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Publisher"
                            secondary={game.publisher}
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Release Date"
                            secondary={game.release_date}
                        />
                    </ListItem>
                </List>
                <Box>
                    <ButtonGroup
                        variant="contained"
                        aria-label="outlined primary button group"
                    >
                        <Button>
                            <a
                                href={game.game_url}
                                target="_blank"
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                }}
                            >
                                Website
                            </a>
                        </Button>
                        <Button>
                            <Link
                                to={'/'}
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                }}
                            >
                                Game finder
                            </Link>
                        </Button>
                    </ButtonGroup>
                </Box>
            </Stack>
            <Box>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        id="panel1bh-header"
                    >
                        <Typography>Short description</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{game.short_description}</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        id="panel1bh-header"
                    >
                        <Typography>Description</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{game.description}</Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>

            <Box>
                <ImageList
                    sx={{ width: 500, height: 450 }}
                    cols={2}
                    rowHeight={164}
                >
                    {game.screenshots.map((screenshot) => (
                        <ImageListItem key={screenshot.id}>
                            <img
                                src={`${screenshot.image}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${screenshot.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={`${game.title} ${game.id}`}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </>
    );
}

export default GameDetails;
