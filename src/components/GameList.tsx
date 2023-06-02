type Game = {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
};

interface GameListProps {
    games: Game[];
}

function GameList({ games }: GameListProps) {
    return (
        <div>
            {games.map((game) => {
                return <p key={game.id}>{game.title}</p>;
            })}
        </div>
    );
}

export default GameList;
